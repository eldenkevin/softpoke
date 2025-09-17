import pandas as pd
import re

def parse_influencer_data(raw_text):
    """
    NOX 인플루언서 텍스트 데이터를 파싱하는 함수
    """
    
    # 점수로 시작하는 각 블록으로 분리
    blocks = re.split(r'\n(?=\d+\.\d+\n)', raw_text)
    
    influencers = []
    
    for block in blocks:
        if len(block.strip()) < 50:  # 너무 짧은 블록 제외
            continue
            
        lines = [line.strip() for line in block.split('\n') if line.strip()]
        
        if len(lines) < 5:  # 최소 정보가 없으면 제외
            continue
            
        influencer = {
            '순번': len(influencers) + 1,
            '점수': '',
            '이름': '',
            '인스타계정': '',
            '태그': '',
            '팔로워수': '',
            '평균좋아요': '',
            '평균댓글': '',
            '국적': '',
            '협업잠재력': '',
            '조회수팔로워비율': '',
            '인게이지먼트비율': '',
            '예상조회수': ''
        }
        
        found_numbers = False
        found_first_percent = False
        
        for i, line in enumerate(lines):
            
            # 1. 점수 (첫 번째 라인, 숫자.숫자 형태)
            if i == 0 and re.match(r'^\d+\.\d+$', line):
                influencer['점수'] = line
            
            # 2. 이름 (점수 바로 다음, @ 시작 아님)
            elif i == 1 and not line.startswith('@'):
                influencer['이름'] = line
            
            # 3. 인스타 계정 (@ 시작)
            elif line.startswith('@'):
                influencer['인스타계정'] = line
            
            # 4. 태그 (인스타 계정 바로 다음, 영문 소문자)
            elif (i > 0 and lines[i-1].startswith('@') and 
                  re.match(r'^[a-z]+', line)):
                influencer['태그'] = line
            
            # 5. 팔로워/좋아요/댓글 숫자 (K, M 포함 3개 숫자)
            number_match = re.match(r'^\s*(\d+\.?\d*[KM]?)\s+(\d+\.?\d*[KM]?)\s+(\d+\.?\d*[KM]?)\s*$', line)
            if number_match and not found_numbers:
                influencer['팔로워수'] = number_match.group(1)
                influencer['평균좋아요'] = number_match.group(2)
                influencer['평균댓글'] = number_match.group(3)
                found_numbers = True
            
            # 6. 국적
            elif line in ['Taiwan', 'South Korea', 'Hong Kong SAR China', 'Macau SAR China']:
                influencer['국적'] = line.replace(' SAR China', '')
            
            # 7. 협업잠재력 (숫자/10 형태)
            coop_match = re.search(r'(\d+)\s*/\s*10', line)
            if coop_match:
                influencer['협업잠재력'] = f"{coop_match.group(1)}/10"
            
            # 8. 퍼센트 값들 (첫 번째는 조회수/팔로워, 두 번째는 인게이지먼트)
            elif '%' in line:
                if not found_first_percent:
                    influencer['조회수팔로워비율'] = line
                    found_first_percent = True
                elif not influencer['인게이지먼트비율']:
                    influencer['인게이지먼트비율'] = line
            
            # 9. 예상조회수 (K, M 포함하고 앞 라인에 Views 있음)
            elif (('K' in line or 'M' in line) and 
                  i > 0 and 'Views' in lines[i-1]):
                influencer['예상조회수'] = line
        
        # 최소 조건: 이름이나 인스타 계정이 있어야 함
        if influencer['이름'] or influencer['인스타계정']:
            influencers.append(influencer)
    
    return influencers

def save_to_excel(influencers, filename='인플루언서_데이터.xlsx'):
    """
    파싱된 데이터를 엑셀 파일로 저장
    """
    
    if not influencers:
        print("저장할 데이터가 없습니다.")
        return
    
    # DataFrame 생성
    df = pd.DataFrame(influencers)
    
    # 팔로워 수를 숫자로 변환 (정렬용)
    def convert_to_number(value):
        if not value:
            return 0
        value = str(value).replace(',', '')
        if 'K' in value:
            return float(value.replace('K', '')) * 1000
        elif 'M' in value:
            return float(value.replace('M', '')) * 1000000
        else:
            try:
                return float(value)
            except:
                return 0
    
    df['팔로워수_숫자'] = df['팔로워수'].apply(convert_to_number)
    
    # 팔로워 수 기준으로 정렬
    df = df.sort_values('팔로워수_숫자', ascending=False)
    df = df.drop('팔로워수_숫자', axis=1)  # 임시 컬럼 제거
    df['순번'] = range(1, len(df) + 1)  # 순번 재정렬
    
    # 엑셀로 저장
    df.to_excel(filename, index=False, sheet_name='인플루언서_데이터')
    
    print(f"✅ {filename} 저장 완료!")
    print(f"📊 총 {len(df)}명의 인플루언서 데이터")
    
    # 통계 정보
    print("\n=== 통계 정보 ===")
    
    # 국가별 분포
    country_counts = df['국적'].value_counts()
    print("🌍 국가별 분포:")
    for country, count in country_counts.items():
        if country:
            print(f"   {country}: {count}명")
    
    # 평균 팔로워 수
    follower_numbers = df['팔로워수'].apply(convert_to_number)
    avg_followers = follower_numbers.mean()
    print(f"👥 평균 팔로워 수: {avg_followers:,.0f}명")
    
    # 상위 5명
    print("\n🏆 팔로워 수 상위 5명:")
    for i, row in df.head().iterrows():
        print(f"   {row['순번']}. {row['이름']} ({row['인스타계정']}) - {row['팔로워수']}")
    
    return df

# 실제 데이터로 테스트
if __name__ == "__main__":
    
    # 샘플 데이터
    sample_data = """2.87
阿魚阿貴·旅遊 美食 생活
@ayuagui_
foodtravel美食
 38.93K  472  303
 Taiwan
Coop. Potential
 7 /10
Views/Followers
18.5%

Engagement Rate
3.34%

Est. Views
26.94K

2.4
王俊之
@chefdinnerplan
chefbakingfood
 49.29K  3.44K  1.67K
 Taiwan
Coop. Potential
 5 /10
Views/Followers
9.43%

Engagement Rate
2.06%

Est. Views
21.69K"""
    
    print("🚀 데이터 파싱 시작...")
    influencers = parse_influencer_data(sample_data)
    
    print(f"📊 {len(influencers)}명 파싱 완료")
    
    # 미리보기
    for inf in influencers:
        print(f"\n이름: {inf['이름']}")
        print(f"계정: {inf['인스타계정']}")
        print(f"팔로워: {inf['팔로워수']}")
        print(f"국적: {inf['국적']}")
        print(f"인게이지먼트: {inf['인게이지먼트비율']}")
    
    # 엑셀 저장
    save_to_excel(influencers)