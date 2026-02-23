export const languages = {
  'ja-jp': '日本語',
  'zh-tw': '繁體中文',
  'en-us': 'English',
} as const;

export type Lang = keyof typeof languages;
export const langCodes = { 'ja-jp': 'JP', 'zh-tw': 'TW', 'en-us': 'EN' } as const;

export const nav = {
  'ja-jp': {
    top: 'TOP',
    philosophy: 'PHILOSOPHY',
    about: 'ABOUT',
    ourRamen: 'OUR RAMEN',
    location: 'LOCATION',
    recruit: 'RECRUIT',
    gallery: 'GALLERY',
    contactUs: 'CONTACT US',
    orderNow: 'Order now',
  },
  'zh-tw': {
    top: 'TOP',
    philosophy: 'PHILOSOPHY',
    about: 'ABOUT',
    ourRamen: 'OUR RAMEN',
    location: 'LOCATION',
    recruit: 'RECRUIT',
    gallery: 'GALLERY',
    contactUs: 'CONTACT US',
    orderNow: '訂購',
  },
  'en-us': {
    top: 'TOP',
    philosophy: 'PHILOSOPHY',
    about: 'ABOUT',
    ourRamen: 'OUR RAMEN',
    location: 'LOCATION',
    recruit: 'RECRUIT',
    gallery: 'GALLERY',
    contactUs: 'CONTACT US',
    orderNow: 'Order now',
  },
} as const;

export const recruitLink = 'https://www.104.com.tw/company/1a2x6bkgq7?jobsource=checkc';
export const facebookLink = 'https://www.facebook.com/Ramen.Chikumo/';
export const instagramLink = 'https://www.instagram.com/chikumo_tw';

export const index = {
  'ja-jp': {
    title: 'TOP | 千雲 | Chikumo',
    description: '日本の鶏白湯。ラーメン屋はレストランと違い、たった一杯の器に、全てを注ぎ込むことができる。老若男女誰でも気軽に入れ、手頃な値段でお腹いっぱいになれる。そんなラーメンという食文化の素晴らしさを日本から世界へ届けたい。一杯のラーメンで、世界中に感動を。その思いで私たち麺屋千雲は今日もラーメンを作り続けています。',
    hero: '日本の鶏白湯。',
    philosophyTitle: '私たちの想い',
    philosophyText: 'ラーメン屋はレストランと違い、\nたった一杯の器に、\n全てを注ぎ込むことができる。\n老若男女誰でも気軽に入れ、\n手頃な値段でお腹いっぱいになれる。\nそんなラーメンという食文化の\n素晴らしさを日本から世界へ届けたい。\n一杯のラーメンで、世界中に感動を。\nその思いで私たち麺屋千雲は\n今日もラーメンを作り続けています。',
    chickenTitle: '鶏へのこだわり',
    chickenText: '私たちの鶏白湯ラーメンには、化学調味料や添加物を一切使っておりません。\nそれは、鶏本来の旨味を100％引き出すため。\n丸鶏を１羽まるごと使用し、\n一晩じっくり炊き込んだ後、骨をひとつひとつ完全に潰しています。\n鶏の旨味を凝縮した自慢の濃厚鶏白湯スープをご賞味ください。',
  },
  'zh-tw': {
    title: 'TOP | 千雲 | Chikumo',
    description: '日本的雞白湯。拉麵店與一般餐廳不同，將美味全數傾注於一個碗中。無論男女老少，都能用合理的價格飽餐一頓。我們希望從日本，將拉麵飲食文化的美妙之處傳遞給全世界。用一碗拉麵，讓全世界感動。我們麵屋千雲以這項理念製作拉麵至今。',
    hero: '日本的雞白湯。',
    philosophyTitle: '我們的理念',
    philosophyText: '拉麵店與一般餐廳不同，\n將美味全數傾注於一個碗中。\n無論男女老少，\n都能用合理的價格飽餐一頓。\n我們希望從日本，\n將拉麵飲食文化的美妙之處傳遞給全世界。\n用一碗拉麵，讓全世界感動。\n我們麵屋千雲以這項理念製作拉麵至今。',
    chickenTitle: '對雞的講究和堅持',
    chickenText: '我們的雞白湯拉麵，\n不使用任何化學調味料及添加物。\n這是為了100%汲取雞肉本身的美味。\n使用整隻全雞，\n經過一夜細細烹煮，\n一根根雞骨都全數軟透。\n請品嚐我們引以為傲，\n濃縮了雞肉鮮美的濃郁雞白湯。',
  },
  'en-us': {
    title: 'TOP | Chikumo',
    description: 'Chicken Paitan: the Japanese way. Contrary to your conventional restaurant, a ramen shop can tell a whole story through a single bowl of ramen.',
    hero: 'Chicken Paitan:\nthe Japanese way',
    philosophyTitle: 'Our values',
    philosophyText: 'Contrary to your conventional restaurant, a ramen shop can tell a whole story through a single bowl of ramen.\nAn inclusive space for all, where everyone can feel welcome and enjoy a satisfying meal at an affordable price.\nOur wish is to share the amazing Japanese food culture that is ramen with the rest of the world.\nTo touch the hearts and stomachs of everyone in the world through a single bowl of ramen.\nWith this value in mind, our team at Menya Chikumo continues to prepare ramen day after day.',
    chickenTitle: 'Our commitment to quality chicken',
    chickenText: 'No chemical seasonings or additives are used in our Chicken Paitan ramen.\nOur dedication to sticking to all-natural ingredients is what fully brings out the chicken "umami" in our ramen.\nAfter a whole chicken is slow-cooked overnight, each bone is completely chopped up until none is left.\nPlease enjoy our signature hearty Chicken Paitan soup, full of umami.',
  },
} as const;

export const philosophy = {
  'ja-jp': {
    title: 'PHILOSOPHY | 千雲 | Chikumo',
    description: '私たちの想い - 麺屋千雲の理念',
    heading: 'PHILOSOPHY',
    valuesTitle: '私たちの想い',
    valuesText: 'ラーメン屋はレストランと違い、\nたった一杯の器に、\n全てを注ぎ込むことができる。\n老若男女誰でも気軽に入れ、\n手頃な値段でお腹いっぱいになれる。\nそんなラーメンという食文化の\n素晴らしさを日本から世界へ届けたい。\n一杯のラーメンで、世界中に感動を。\nその思いで私たち麺屋千雲は\n今日もラーメンを作り続けています。',
    missionsTitle: '千雲が掲げる5つのMISSON',
    missions: [
      'どこよりもおいしいラーメンを世界中に広め、世界中のだれもが、"CHIKUMO"を知り、食べられる世界をつくります。',
      '"CHIKUMO"に関わる全てのものが洗練されており、画期的かつ先進的なものを目指します。',
      'おもてなしや気遣い、お客様の期待を超えるサービスを提供し、お客様に笑顔と感動を届けます。',
      '子どもからお年寄りまで安心して暮らせる社会を実現します。',
      '全ての従業員とその家族の幸福を追求し、公正・誠実な経営を追求します。',
    ],
  },
  'zh-tw': {
    title: 'PHILOSOPHY | 千雲 | Chikumo',
    description: '我們的理念 - 麵屋千雲的理念',
    heading: 'PHILOSOPHY',
    valuesTitle: '我們的理念',
    valuesText: '拉麵店與一般餐廳不同，\n將美味全數傾注於一個碗中。\n無論男女老少，\n都能用合理的價格飽餐一頓。\n我們希望從日本，\n將拉麵飲食文化的美妙之處傳遞給全世界。\n用一碗拉麵，讓全世界感動。\n我們麵屋千雲以這項理念製作拉麵至今。',
    missionsTitle: '千雲的五個使命',
    missions: [
      '將最美味的拉麵推廣至全世界，打造一個無人不知，且能盡情享受「千雲」美味的世界。',
      '以持續創新及提升「千雲」的所有精粹為目標。',
      '無微不至地悉心款待，提供超乎顧客期待的服務，為客戶帶來笑容與感動。',
      '實現從兒童到年長者都能安心生活的社會。',
      '追求讓所有員工及其家人，在身心及物質上皆感到幸福滿足，秉持公平、誠信經營。',
    ],
  },
  'en-us': {
    title: 'PHILOSOPHY | Chikumo',
    description: 'Our values - The philosophy of Menya Chikumo',
    heading: 'PHILOSOPHY',
    valuesTitle: 'Our values',
    valuesText: 'Contrary to your conventional restaurant, a ramen shop can tell a whole story through a single bowl of ramen.\nAn inclusive space for all, where everyone can feel welcome and enjoy a satisfying meal at an affordable price.\nOur wish is to share the amazing Japanese food culture that is ramen with the rest of the world.\nTo touch the hearts and stomachs of everyone in the world through a single bowl of ramen.\nWith this value in mind, our team at Menya Chikumo continues to prepare ramen day after day.',
    missionsTitle: 'The 5 Missions of Chikumo',
    missions: [
      'To introduce the world to the best ramen there is, and create a society where \'CHIKUMO\' is known and enjoyed by everyone.',
      'To surround CHIKUMO with all things sophisticated, revolutionary, and innovative.',
      'To bring happiness and excitement to our customers through excellent hospitality, thoughtfulness, and service beyond expectations.',
      'To realize a society where people of all ages, from children to the elderly, can live with peace of mind.',
      'To pursue the holistic well-being of all employees and their families, while providing a fair, honest management.',
    ],
  },
} as const;

export const about = {
  'ja-jp': {
    title: 'ABOUT | 千雲 | Chikumo',
    description: '会社概要 - 株式会社千雲',
    heading: 'ABOUT',
    profileTitle: '会社概要',
    rows: [
      { label: '会社名', value: '株式会社千雲' },
      { label: '所在地', value: '〒150-0043 東京都渋谷区道玄坂1-16-5 大下ビル8F' },
      { label: '設立年月日', value: '2023年04月03日' },
      { label: '資本金', value: '1,000万円' },
      { label: '代表取締役社長', value: '中野 正幾' },
    ],
  },
  'zh-tw': {
    title: 'ABOUT | 千雲 | Chikumo',
    description: '公司簡介 - 株式会社千雲',
    heading: 'ABOUT',
    profileTitle: '公司簡介',
    rows: [
      { label: '公司名稱', value: '株式会社千雲' },
      { label: '地點', value: '東京都澀谷區道玄坂1-16-5, 8樓' },
      { label: '設立年月日', value: '4月3日2023年' },
      { label: '資本額', value: '1,000萬日元' },
      { label: '董事長兼總裁', value: '中野 正幾' },
    ],
  },
  'en-us': {
    title: 'ABOUT | Chikumo',
    description: 'Company Profile - Chikumo, Inc.',
    heading: 'ABOUT',
    profileTitle: 'Company Profile',
    rows: [
      { label: 'Company Name', value: 'Chikumo, Inc.' },
      { label: 'Location', value: '8th Floor, Oshita Building, 1-16-5 Dogenzaka, Shibuya-ku, Tokyo 150-0043, Japan' },
      { label: 'Date of establishment', value: 'April 3, 2023' },
      { label: 'Capital', value: '10 million yen' },
      { label: 'President, CEO', value: 'Masaki Nakano' },
    ],
  },
} as const;

export const ourRamen = {
  'ja-jp': {
    title: 'OUR RAMEN | 千雲 | Chikumo',
    description: '千雲のラーメン',
    heading: 'OUR RAMEN',
    subtitle: '千雲定番の一杯',
    items: [
      {
        name: '鶏白湯そば',
        description: '丸鶏と若鶏の旨味を限界まで引き出した\n濃厚鶏白湯スープに、\n豚肩ロースを低温調理した\n自家製レアチャーシューを乗せて。',
        image: '/wp-content/uploads/2023/11/231222_0076-1-1.png',
      },
      {
        name: 'あっさり柚子香る\n鶏塩そば',
        description: '鶏の旨味と鹿児島産鰹節の出汁が\n濃縮されたスープに柚子皮をプラス。\n鶏・鰹節・昆布・柚子が織りなす\n芳醇な香りが自慢の一杯です。',
        image: '/wp-content/uploads/2023/11/231222_0153-1-1.png',
      },
      {
        name: '鶏白湯つけめん',
        description: '千雲の濃厚鶏白湯スープに合わせて\n魚介節を炊き込んだ特製つけ麺。\nコシのあるもちもちの麺と一緒に\n鶏の旨味と魚介の風味をお楽しみください。',
        image: '/wp-content/uploads/2023/11/231222_0245-1-1.png',
      },
    ],
  },
  'zh-tw': {
    title: 'OUR RAMEN | 千雲 | Chikumo',
    description: '千雲的拉麵',
    heading: 'OUR RAMEN',
    subtitle: '千雲必吃的一碗',
    items: [
      {
        name: '雞白湯拉麵',
        description: '徹底引出全雞與嫩雞\n其鮮美的濃郁雞白湯\n鋪上以肩胛梅花肉低溫烹調\n自製而成的稀有叉燒。',
        image: '/wp-content/uploads/2023/11/231222_0076-1-1.png',
      },
      {
        name: '清爽的柚香\n鹽味雞湯拉麵',
        description: '濃縮雞的鮮美與北海道昆布高湯\n在其鰹魚湯頭加入柚子皮\n雞、昆布、鰹魚、柚子\n在碗中交織出令我們自豪的芳醇香氣',
        image: '/wp-content/uploads/2023/11/231222_0153-1-1.png',
      },
      {
        name: '雞白湯沾麵',
        description: '結合千雲的濃郁雞白湯湯頭\n加入魚介熬煮而成的特製沾麵\n請搭配既彈牙又有嚼勁的麵條\n同時享受雞的鮮美及魚介風味',
        image: '/wp-content/uploads/2023/11/231222_0245-1-1.png',
      },
    ],
  },
  'en-us': {
    title: 'OUR RAMEN | Chikumo',
    description: 'Our Ramen - Chikumo',
    heading: 'OUR RAMEN',
    subtitle: 'A "CHIKUMO" classic',
    items: [
      {
        name: 'Chicken Paitan Ramen',
        description: 'Our signature ramen in a hearty Chicken Paitan broth that enhances the rich flavor of both whole chicken and young chicken, topped with homemade rare chashu made from slow-cooked pork shoulder.',
        image: '/wp-content/uploads/2023/11/231222_0076-1-1.png',
      },
      {
        name: 'Light and refreshing with a fragrant hint of yuzu\nChicken Salt Ramen',
        description: 'In sharp contrast to our classic Chicken Paitan, here we have a refreshing bowl of ramen with a concentrated chicken and Kagoshima bonito flake broth, enhanced with yuzu peel.\nA bowl that boasts of a mellow aroma of chicken, bonito flakes, kelp, and yuzu.',
        image: '/wp-content/uploads/2023/11/231222_0153-1-1.png',
      },
      {
        name: 'Chicken Paitan Tsukemen',
        description: 'Our specialty tsukemen, featuring a luxurious collaboration of Chikumo\'s rich Chicken Paitan broth with seafood-infused dashi.\nEnjoy the flavorful fusion of chicken and seafood with our thick chewy noodles.',
        image: '/wp-content/uploads/2023/11/231222_0245-1-1.png',
      },
    ],
  },
} as const;

export const location = {
  'ja-jp': {
    title: 'LOCATION | 千雲 | Chikumo',
    description: '店舗情報',
    heading: 'LOCATION',
    stores: [
      {
        name: '麺屋 千雲 -Chikumo- 林森店',
        address: '3G2G+33 正義里 台湾 台北市 中山区',
        phone: '+886 2 2523 3198',
        hours: '11時00分 ～ 04時00分',
        uber: true,
        image: '/wp-content/uploads/2023/11/231222_0342-1.png',
      },
      {
        name: '麺屋 千雲 -Chikumo- 光華店',
        address: '2GVJ+9C 梅花里 台湾 台北市 中正区',
        phone: '+886 2 3343 2435',
        hours: '11時00分 ～ 03時00分',
        uber: true,
        image: '/wp-content/uploads/2023/11/231222_0403-1.png',
      },
      {
        name: '麺屋 千雲 -Chikumo- 信義101店',
        address: '台北市信義区信義路5丁目16番地',
        phone: '+886 2 2720 0330',
        hours: '11時00分 ～ 03時00分',
        uber: false,
        image: '/wp-content/uploads/2024/02/101pc.webp',
      },
    ],
  },
  'zh-tw': {
    title: 'LOCATION | 千雲 | Chikumo',
    description: '店鋪資訊',
    heading: 'LOCATION',
    stores: [
      {
        name: '麵屋 千雲 -Chikumo- 林森店',
        address: '104台北市中山區林森北路105-1號',
        phone: '+886 2 2523 3198',
        hours: 'AM 11:00 – AM 04:00',
        uber: true,
        image: '/wp-content/uploads/2023/11/231222_0342-1.png',
      },
      {
        name: '麵屋 千雲 -Chikumo- 光華店',
        address: '100台北市中正區臨沂街3巷1號',
        phone: '+886 2 3343 2435',
        hours: 'AM 11:00 – AM 03:00',
        uber: true,
        image: '/wp-content/uploads/2023/11/231222_0403-1.png',
      },
      {
        name: '麵屋 千雲 -Chikumo- 信義101店',
        address: '台北市信義區信義路5段16號',
        phone: '+886 2 2720 0330',
        hours: 'AM 11:00 ~ AM 03:00',
        uber: false,
        image: '/wp-content/uploads/2024/02/101pc.webp',
      },
    ],
  },
  'en-us': {
    title: 'LOCATION | Chikumo',
    description: 'Store Locations',
    heading: 'LOCATION',
    stores: [
      {
        name: 'Ramen Chikumo Linsen Main Store',
        address: 'No. 105-1, Linsen N Rd, Zhongshan District, Taipei City, 104',
        phone: '+886 2 2523 3198',
        hours: 'AM 11:00 – AM 04:00',
        uber: true,
        image: '/wp-content/uploads/2023/11/231222_0342-1.png',
      },
      {
        name: 'Ramen Chikumo Guanghua Store',
        address: 'No. 1, Lane 3, Linyi St, Zhongzheng District, Taipei City, 100',
        phone: '+886 2 3343 2435',
        hours: 'AM 11:00 – AM 03:00',
        uber: true,
        image: '/wp-content/uploads/2023/11/231222_0403-1.png',
      },
      {
        name: 'Ramen Chikumo Taipei 101 Store',
        address: 'No. 16, Section 5, Xinyi Rd, Xinyi District, Taipei City, Taiwan 110',
        phone: '+886 2 2720 0330',
        hours: 'AM 11:00 ~ AM 03:00',
        uber: false,
        image: '/wp-content/uploads/2024/02/101pc.webp',
      },
    ],
  },
} as const;

export const galleryImages = [
  '/wp-content/uploads/2023/11/231222_0086-1-1.png',
  '/wp-content/uploads/2023/11/231222_0918-1-1.png',
  '/wp-content/uploads/2023/11/231222_0187-1-1.png',
  '/wp-content/uploads/2023/11/231222_0115-1-1.png',
  '/wp-content/uploads/2023/11/231222_0518-1-1.png',
  '/wp-content/uploads/2023/11/231222_0399-1-1.png',
  '/wp-content/uploads/2023/11/DSC0293-1-1.png',
  '/wp-content/uploads/2023/11/231222_0081-1-1.png',
  '/wp-content/uploads/2023/11/231222_0127-2-1.png',
  '/wp-content/uploads/2023/11/231222_1199-1-1.png',
  '/wp-content/uploads/2023/11/231222_0805-1-1.png',
  '/wp-content/uploads/2023/11/231222_1171-1-1.png',
  '/wp-content/uploads/2023/11/231222_1197-1-1.png',
  '/wp-content/uploads/2023/11/231222_0281-1-1.png',
  '/wp-content/uploads/2023/11/231222_0433-2-1.png',
  '/wp-content/uploads/2023/11/231222_1096-1-3.png',
] as const;

export const gallery = {
  'ja-jp': { title: 'GALLERY | 千雲 | Chikumo', description: 'ギャラリー', heading: 'GALLERY' },
  'zh-tw': { title: 'GALLERY | 千雲 | Chikumo', description: '藝廊', heading: 'GALLERY' },
  'en-us': { title: 'GALLERY | Chikumo', description: 'Gallery', heading: 'GALLERY' },
} as const;

export const recruit = {
  'ja-jp': {
    title: 'RECRUIT | 千雲 | Chikumo',
    description: '採用情報',
    heading: 'RECRUIT',
    jobTitle: '募集要項',
    positionsLabel: '募集職種',
    positions: ['幹部候補', 'マネージャー', 'ホール', 'キッチン'],
    messageLabel: 'メッセージ',
    membersLabel: 'メンバー',
    applyButton: '応募する',
  },
  'zh-tw': {
    title: 'RECRUIT | 千雲 | Chikumo',
    description: '人才招募',
    heading: 'RECRUIT',
    jobTitle: '人才招募',
    positionsLabel: '職務名稱',
    positions: ['儲備幹部', '經營主管', '外場服務生', '內場廚師'],
    messageLabel: '訊息',
    membersLabel: '團隊成員',
    applyButton: '應徵申請',
  },
  'en-us': {
    title: 'RECRUIT | Chikumo',
    description: 'Recruitment',
    heading: 'RECRUIT',
    jobTitle: 'Job description',
    positionsLabel: 'Job Title (Job Position)',
    positions: ['Executive candidate', 'Manager', 'Floor staff (Wait staff)', 'Kitchen staff'],
    messageLabel: 'Our Message',
    membersLabel: 'Members (Our Team)',
    applyButton: 'Apply',
  },
} as const;

export const contactUs = {
  'ja-jp': {
    title: 'CONTACT US | 千雲 | Chikumo',
    description: 'お問い合わせ',
    heading: 'CONTACT US',
    nameLabel: '名前',
    emailLabel: 'メールアドレス',
    messageLabel: '問い合わせ内容',
    submitLabel: '送信',
  },
  'zh-tw': {
    title: 'CONTACT US | 千雲 | Chikumo',
    description: '聯絡我們',
    heading: 'CONTACT US',
    nameLabel: '姓名',
    emailLabel: '電子郵件',
    messageLabel: '問詢內容',
    submitLabel: '傳送',
  },
  'en-us': {
    title: 'CONTACT US | Chikumo',
    description: 'Contact Us',
    heading: 'CONTACT US',
    nameLabel: 'Name',
    emailLabel: 'E-mail address',
    messageLabel: 'Inquiry details',
    submitLabel: 'Send',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return 'ja-jp';
}
