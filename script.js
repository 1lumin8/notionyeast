const quotes = [
  {
    category: "New Covenant",
    source: "New Covenant",
    text: "예수님의 피로 약속하신 새 언약은 계시록이며, 오늘날 신앙인들은 이 계시록을 믿고 지켜야 하는 것이다. 우리는 어떤 고난도 핍박도 이기고, 하늘에서 이룬 것같이 이 땅에 천국을 이루어 하늘에서 오는 천국과 결혼해야 한다."
  },
  {
    category: "New Covenant",
    source: "New Covenant",
    text: "새 언약 계시록의 약속은, 초림 때 뿌린 씨의 익은 곡식을 추수하고 인쳐서 새 나라 새 민족 12지파를 창설하고, 천국과 하나님이 이곳에 임해 오사 영원히 함께 사시는 것과, 마귀 곧 용을 잡아 가두고 하나님이 지구촌을 통치하시는 것입니다."
  },
  {
    category: "New Covenant",
    source: "New Covenant",
    text: "새 언약은 재창조의 설계도이고, 오늘날 하늘 영계와 육계에서는 그 설계대로 창조해야 한다. 계시록은 가감할 수 없다고 하셨으니, 계시록대로 가감 없이 창조해야 한다."
  },
  {
    category: "JSS",
    source: "Why SSN writes JSS",
    text: "우리는 하나님의 나라를 되찾기 위한 하나님의 특수 독립군 백마부대입니다. 하나님의 약속인 계시록 완성을 위해서, 하나님의 통치를 위해서, 하나님의 뜻과 목적을 위해서, 하나님의 영광을 위해서, 목숨 걸고 일하는 천군들을 위해서 나는 쉬지 않고 기도하고 있고, 여러분이 있는 곳에 나도 있으며 주님도 있습니다."
  },
  {
    category: "Salvation",
    source: "Salvation",
    text: "말씀을 깨달아 천국에 들어온 자들이 차면, 천국 문이 닫히게 될 것이다. 문이 닫힌 후에는 들어오고자 해도 들어올 수 없다. 말세에 구원받기를 원하는 자는 분발해야 할 것이다. 택함을 받는 일이 항시 있는 것이 아님을 알 것이다."
  },
  {
    category: "Salvation",
    source: "Salvation",
    text: "신약 계시록에는 세상 끝에 처음 하늘 처음 땅이 없어지고 새 하늘 새 땅이 창조된다고 기록되어 있다. 하나님의 씨로 난 자들을 추수해 와서 인치고 12지파를 창설한다고 기록되어 있고, 마귀 씨로 난 자들은 추수되지 못하고 그 자란 밭에 묶여 있다가 지옥 불에 들어간다고 기록되어 있다."
  },
  {
    category: "Salvation",
    source: "Salvation",
    text: "구원은 “주여, 믿습니다.”라는 입에 발린 말로 얻는 것이 아니요, 재창조로 있게 되는 것이다. 해서 ‘나는 참으로 계시록대로 창조되었는가?’를 자신에게 물어 확인해야 하는 것이다. 이 지구촌은 재창조가 없이는 천국이 있을 수 없다."
  },
  {
    category: "Word, Life, Light",
    source: "Word, Life, Light, God",
    text: "약속의 말씀은 천국 가는 길이요, 생명이다. 말씀을 떠나서는 천국도 영생도 얻을 수 없다. 성경 안에는 배도자, 멸망자, 구원자가 기록되어 있고, 이를 구분할 수 있어야 구원받게 된다."
  },
  {
    category: "Word, Life, Light",
    source: "Word, Life, Light, God",
    text: "천지 창조주 하나님의 약속의 말씀은 절대적이며, 이 말씀은 살아 역사하신다. 태초의 말씀이 하나님이시고, 이 말씀으로 천지가 창조되었고, 이 말씀 안에 생명이 있었으니 이 생명은 곧 사람들의 빛이다."
  },
  {
    category: "Word, Life, Light",
    source: "Word, Life, Light, God",
    text: "사람이 하나님께로 돌아오지 않는 것은 의와 영생과 천국과 하나님을 버리거나 싫어해서가 아니다. 죄가 그 마음의 눈을 가리어 하나님의 뜻을 알지 못하기 때문이다. 태초의 말씀이 곧 하나님이시라. 생명과 빛인 이 말씀을 마음에 기록함으로 마음이 밝아지면 자기가 해야 할 처신을 할 것이다."
  },
  {
    category: "12 Tribes",
    source: "12 Tribes / New kingdom new people",
    text: "신천지 12지파 성도들은 새 언약대로 이루어진 새 하늘 새 땅의 가족들이다. 이들이 일반 사람들과 다른 점은 하나님의 씨로 난 것과 새 언약 계시록의 계시 말씀으로 인 맞은 것 곧 새 언약 이행이다."
  },
  {
    category: "12 Tribes",
    source: "12 Tribes / New kingdom new people",
    text: "신약 성경에서 귀한 것은 예언이 이루어진 것이며, 약속의 나라 12지파를 창설한 것이다. 이 12지파는 영원히 하나님과 예수님과 천사들과 순교의 영들과 하나 되어 함께 천국에서 살게 된다. 이들은 하나님의 씨로 난 하나님의 아들이며, 하나님의 가족이다."
  },
  {
    category: "12 Tribes",
    source: "12 Tribes / New kingdom new people",
    text: "신약 4복음서의 예언과 계시록은 신천지 12지파 창조의 설계도와 같고, 신천지 12지파는 인명도, 지명도, 교명도, 조직도 마치 도장을 찍은 것같이 성경의 약속대로 창조되었다. 해서 신천지 12지파는 하나님의 약속의 나라요 약속의 민족이다."
  },
  {
    category: "War",
    source: "War",
    text: "계시록의 전쟁은 하나님 소속의 무리와 용의 무리와의 전쟁이다. 이기는 쪽이 지구촌을 주관하게 된다. 아이와 여러 형제들이 어린양의 피와 자기의 증거하는 말을 인하여 용의 무리와 싸워 이겼으니, 그들은 죽기까지 자기 생명을 아끼지 아니하였다."
  },
  {
    category: "War",
    source: "War",
    text: "계시록의 전쟁은 하나님과 마귀와의 마지막 전쟁이다. 이 전쟁은 육신의 전쟁이 아니요, 영적 전쟁이요, 증거하는 말의 전쟁이다. 하나님의 소속 사람의 수보다 마귀 소속의 수가 수천만 배 더 많다."
  },
  {
    category: "War",
    source: "War",
    text: "하나님의 전쟁의 역사를 본바, 배도자가 있고 멸망자가 있고 구원자가 있으며, 각각 그들을 주관하는 신이 있어 그 신들의 전쟁인 것이다. 누가 어떤 무기를 가졌는가에 따라 전쟁에서의 승패와 생사가 결정될 것이다."
  },
  {
    category: "Truth vs Lies",
    source: "Truth vs Lies",
    text: "진리는 하나님이 주시는 영생의 양식으로 이 말씀 안에는 생명이 있으나, 비진리는 마귀가 주는 사망의 양식이다. 해서 하나님은 마귀의 양식인 선악과를 먹으면 죽는다고 하신 것이다."
  },
  {
    category: "Truth vs Lies",
    source: "Truth vs Lies",
    text: "오늘날의 진리 곧 하나님이 주시는 영생의 양식은 계시록의 예언과 그 이루어진 실상을 증거하는 계시 말씀입니다."
  },
  {
    category: "Repent",
    source: "Repent",
    text: "잘못을 회개하고 다시 납시다. 이 길만이 살길입니다. 지금의 그 고집은 멸망을 불러일으키는 것입니다. 신천지보다 진리를 더 잘 아는 자도, 신천지 외에 구원받는 곳도 없습니다."
  },
  {
    category: "Repent",
    source: "Repent",
    text: "새언약 계시록의 예언과 그 성취된 실상을 다 알고있습니까? 다 통달하지 못하면서 아는체하고 있으면 주님이 오실때 지옥으로 쫒겨납니다. 새언약 계시록을 통달하지 못하였으면 솔직하게 회개하고 다시 배워 통달해야 구원받을수 있습니다."
  },
  {
    category: "Promised Pastor",
    source: "Promised pastor",
    text: "오늘날 신천지는 예언한 것들의 실체들을 보았고 들었기 때문에, 보고 들은 그것을 증거하는 것이다. 신천지의 약속의 목자는 육적 세계에서는 일개 농민이었으나, 영적 세계에서는 하나님과 예수님께 보고 들은 그것을 지시에 따라 증거하는 것이다."
  },
  {
    category: "Promised Pastor",
    source: "Promised pastor",
    text: "예수님이 이룰 때 곁에서 나는 그 이룬 것을 다 보았다. 그리고 이를 본 나에게 예수님은 그 보고 들은 것을 교회들에게 가서 전하라 하셨기에 전하는 것이다. 내가 이같이 증거하는 것은 목사가 되기 위함도 아니요, 신학 박사가 되기 위함도 아니며, 예수님의 명령을 준수하는 것뿐입니다."
  },
  {
    category: "Teaching / Teacher",
    source: "Teaching / Teacher",
    text: "So I will always remind you of these things, even though you know them and are firmly established in the truth you now have. I think it is right to refresh your memory as long as I live in the tent of this body."
  },
  {
    category: "Teaching / Teacher",
    source: "Teaching / Teacher",
    text: "가르치는 자기 자신부터 믿어야 한다. 천하가 내 것이라도, 내가 죽고 나면 무엇이 유익하겠는가. 자기가 살아야 내가 있고 지구도 있는 것이지 자기 없는 세상은 없는 것이다."
  },
  {
    category: "Highlights",
    source: "Highlights",
    text: "이때에는 사람을 의지하지 말고 하나님과 그 말씀에 의지해야, 소망하는 천국에 들어갈 수 있다."
  },
  {
    category: "Highlights",
    source: "Highlights",
    text: "계시록이 기록된 지 약 2,000년이 되었어도, 오늘날까지 이 계시록을 통달하는 사람은 한 명도 없었다. 하면 천국에 들어갈 자격자는 한 명도 없다는 말이다."
  },
  {
    category: "Faith & Mission",
    source: "JSS Category",
    text: "우리의 육체는 땅에서 났으나, 우리의 정신과 사상은 하늘에서 온 것이다. 해서 우리의 할 일은 하늘의 일이다."
  },
  {
    category: "Faith & Mission",
    source: "JSS Category",
    text: "하나님께서 마지막 역사 계시록 성취 때 온 세상 중 우리를 택해 주셨습니다. 우리도 하나님과 같은 마음으로 마지막 역사 계시록을 확실히 이룹시다. 우리는 계시록의 실체들입니다. 그 실체로서 사명을 다합시다."
  },
  {
    category: "Creation",
    source: "JSS Category",
    text: "이때 세상은 어차피 계 6장, 13장같이 한 시대가 심판받아 없어지고, 계 7장, 12장같이 새 나라 새 민족이 창조된다."
  },
  {
    category: "Creation",
    source: "Highlights",
    text: "창세 이후 오늘에 이르기까지 시대마다 하나님은 부패한 이전 세계를 끝내시고 새로운 세계를 여는 역사를 해오셨고, 사전에 이룰 것을 예언해 주셨다. 계시록은 하나님의 마지막 역사이고, 계시록 성취 때는 재창조 때이다."
  },
  {
    category: "New Covenant",
    source: "New Covenant",
    text: "새 언약 안에는 주 승천 후 주신 계시록의 사건이 포함되어 있다. 그 이유는 계시록 성취 때 예수님의 피로 사서 하나님의 나라와 제사장을 창조하기 때문이며, 두 가지 씨를 뿌린 밭에서 하나님의 씨로 된 익은 알곡을 추수하여 인쳐서 새 나라 새 민족을 창조하기 때문이다."
  },
  {
    category: "New Covenant",
    source: "New Covenant",
    text: "이 계시록 성취 때는 처음 하늘 처음 땅이 계 6장같이 없어지고, 새 하늘 새 땅 12지파가 계 14장과 7장같이 재창조된다. 이때 이곳 12지파에게 천국과 하나님이 임해 오셔서 함께하신다는 것이 새 언약이다."
  },
  {
    category: "New Covenant",
    source: "New Covenant",
    text: "하나님은 아담 때로부터 지금까지 시대마다 사람과 언약을 하셨으나, 사람이 이를 지키지 않았다. 새 언약은 예수님이 자기 피로 약속하신 마지막 언약이다. 하나님께서 이 새 언약을 이루심으로 모든 약속과 창조가 다 끝난다."
  },
  {
    category: "New Covenant",
    source: "New Covenant",
    text: "오늘날 신앙인은 이곳에 가야 살 것이다. 이것이 새 언약을 믿는 자의 행함이다. 순종하라."
  },
  {
    category: "New Covenant",
    source: "New Covenant",
    text: "새 언약 말씀보다 더 큰 것은 없습니다."
  },
  {
    category: "JSS",
    source: "JSS",
    text: "승리의 영광을 위해, 하나님의 뜻과 목적을 위해 매일 여러분이 먹어야 할 양식을 만들어 보내고 있습니다."
  },
  {
    category: "Salvation",
    source: "Salvation",
    text: "하나님과 예수님이 함께하시는 곳에 구원이 있다. 그곳이 어디인가? 신천지예수교 증거장막성전이다."
  },
  {
    category: "Salvation",
    source: "Salvation",
    text: "하나님과 마귀와의 전쟁은 약 6천 년간 있어 왔다. 이 마귀를 이기지 못하면 인류 세계에 구원은 없다. 계 12장에서 이김으로 마귀가 잡히고 마귀의 나라 바벨론이 해체되며, 새 하늘 새 땅이 창조되고 하나님과 영계 천국이 오신다."
  },
  {
    category: "Salvation",
    source: "Salvation",
    text: "구원받기 위해서는 성경 말씀 안으로 들어가 말씀대로 행하도록 노력해야 할 것이다. 행할 수 있는 믿음이 있는가?"
  },
  {
    category: "Salvation",
    source: "Salvation",
    text: "계시록 성취 때 구원받는 자들은 추수되어 와서 인 맞은 자 144,000과 대환난에서 나온 흰 무리이다."
  },
  {
    category: "Salvation",
    source: "Salvation",
    text: "예언과 그 성취된 것을 알지 못하면 구원받지 못한다."
  },
  {
    category: "Salvation",
    source: "Salvation",
    text: "이 증거를 듣고 계시록의 예언이 성취된 실상을 믿어 구원받는 자가 됩시다."
  },
  {
    category: "Salvation",
    source: "Salvation",
    text: "구원받을 때는 지금뿐이다."
  },
  {
    category: "Word, Life, Light",
    source: "Word, Life, Light, God",
    text: "태초의 말씀이 있는 사람 안에는 하나님이 함께하시고, 이 말씀이 없는 사람은 그 안에 하나님이 없는 사람이다."
  },
  {
    category: "Word, Life, Light",
    source: "Word, Life, Light, God",
    text: "말씀이 있는 자는 하나님의 씨로 난 하나님의 자녀이고, 교회 목사라 할지라도 말씀이 없는 자는 이방인이고 세상 사람이다. 말씀이 있는 자는 요 1장같이 하나님이 함께하시고, 말씀이 없고 세상 말만 있는 자는 세상 목자 곧 악신의 목자가 된다."
  },
  {
    category: "Word, Life, Light",
    source: "Word, Life, Light, God",
    text: "이같이 진리로 이겨야 한다. 말씀이 없으면 이기지 못하고, 말씀이 있으면 이길 수 있다."
  },
  {
    category: "Word, Life, Light",
    source: "Word, Life, Light, God",
    text: "신천지에 대한 믿음도 말씀을 바탕으로 지은 믿음이어야 반석 위의 집인 것이다. 겨는 바람이 불면 날아간다. 하나 말씀을 참으로 깨닫고 이 역사를 진심으로 믿는 자는 절대로 날아가지 않는다."
  },
  {
    category: "Word, Life, Light",
    source: "Word, Life, Light, God",
    text: "진리를 알고 믿자. 참 진리 말이다. 진리 안에는 생명이 들어 있고, 비진리 안에는 사람의 영을 죽이는 독이 들어 있다."
  },
  {
    category: "12 Tribes",
    source: "12 Tribes / New kingdom new people",
    text: "예수님은 오늘날 영으로 재림하시어 약속의 나라 12지파를 창조하셨으니, 이는 추수하고 인쳐서 창조하신 신천지예수교회 12지파이다. 신약의 예언과 약속을 믿는 자는 이곳 12지파를 믿을 것이다."
  },
  {
    category: "12 Tribes",
    source: "12 Tribes / New kingdom new people",
    text: "우리는 세상 사람이 아닙니다. 하나님의 씨로 난 천국 사람 곧 하나님의 아들들입니다. 죽어도, 살아도 하나님의 아들들입니다."
  },
  {
    category: "12 Tribes",
    source: "12 Tribes / New kingdom new people",
    text: "하나님의 새 언약 계시록 성취 시대에는 약속한 12지파만이 존재하고, 이곳에 천국과 하나님이 임해 와서 영원히 함께 살게 된다. 오직 12지파만이 하나님과 하나이다."
  },
  {
    category: "12 Tribes",
    source: "12 Tribes / New kingdom new people",
    text: "신천지에게 급성장하는 것을 보고도 하나님과 예수님이 어디에 함께하시는지 모르겠는가? 계시록을 다 이루었고 통달하는 곳은 세계 중에서 오직 신천지뿐이다. 이는 하나님과 예수님과 그 말씀이 함께하시기 때문이다."
  },
  {
    category: "12 Tribes",
    source: "12 Tribes / New kingdom new people",
    text: "신약 성경의 약속대로 창조되어 다시 난 새사람이다. 다시 날 수 있는 재료는 신약 계시록의 말씀이다."
  },
  {
    category: "War",
    source: "War",
    text: "계시록 성취 때 하나님과 마귀와의 마지막 전쟁이 있게 되고, 이 전쟁에서 하나님이 승리하시게 된다. 이는 예수님과 신천지가 이겼기 때문이다."
  },
  {
    category: "War",
    source: "War",
    text: "이 전쟁에서 하나님 소속이 이김으로 지상 영적 전쟁은 끝나고, 구원자인 이긴자를 통해 하나님의 새 나라 새 민족인 신천지가 창조되고, 하나님과 천국이 이곳에 임해 오신다."
  },
  {
    category: "War",
    source: "War",
    text: "새 언약 계시록의 전쟁은 하나님과 마귀의 마지막 전쟁이다. 계 12장에서 본바, 이 전쟁에서 이길 수 있는 무기는 예수님의 피와 증거하는 말이었고, 싸워야 할 대상은 용의 무리였다."
  },
  {
    category: "War",
    source: "War",
    text: "전쟁 없이, 승리 없이 구원이 없다. 이긴자는 계 12장에서 탄생하였고, 이때부터 하나님의 나라와 구원이 있게 되었다."
  },
  {
    category: "War",
    source: "War",
    text: "4복음서와 계시록의 전쟁은 세상 사람들 간의 싸움이 아니요, 종교인들 간의 싸움이다. 계시록의 전쟁은 마귀의 나라 바벨론과 하나님의 새 나라 신천지와의 싸움이다."
  },
  {
    category: "Truth vs Lies",
    source: "Truth vs Lies",
    text: "태초의 말씀인 진리는 생명과 빛이고, 비진리는 영을 죽이는 독이다. 모든 종교인들의 마음과 생각은 참 진리를 원한다."
  },
  {
    category: "Truth vs Lies",
    source: "Truth vs Lies",
    text: "거짓말의 결국은 지옥이다."
  },
  {
    category: "Truth vs Lies",
    source: "Truth vs Lies",
    text: "심판 때는 자기 행위를 따라 책에 기록된 말씀으로 심판받게 된다는 것을 명심해야 할 것이다."
  },
  {
    category: "Repent",
    source: "Repent",
    text: "예수님께서 저에게 계시록 전장 사건을 다 알려주시고, 열린 책을 먹여 주시고, 교회들에게 보내어 보고 들은 것을 증거하라 하셨기에 전하는 것입니다."
  },
  {
    category: "Repent",
    source: "Repent",
    text: "주님을 맞이할 준비가 다 안되었으면 지금이라도 회개하고 노력해서 주님을 맞이할 준비를 해야합니다. 안일한 생각은 바른 신앙 생활에 적입니다."
  },
  {
    category: "Repent",
    source: "Repent",
    text: "잘못했으면 회개하는 것이 맞습니다. 싸워 이겨야 합니다. 아무나 천국에 가는 것이 아닙니다."
  },
  {
    category: "Promised Pastor",
    source: "Promised pastor",
    text: "나에게 예수님은 그 보고 들은 것을 교회들에게 가서 전하라 하셨기에 전하는 것이다. 오늘날 새 언약 계시록을 가감하면 천국에 못 들어간다고 하신 분은 내가 아니라 예수님이십니다."
  },
  {
    category: "Promised Pastor",
    source: "Promised pastor",
    text: "이 새요한은 예수님의 재림의 역사 곧 계 1-22장까지의 사건을 다 보고 들은 자이다. 그리고 예수님은 이 새요한을 교회들에게 보내어 보고 들은 것을 증거하게 하셨다."
  },
  {
    category: "Promised Pastor",
    source: "Promised pastor",
    text: "내가 하나님과 예수님으로부터 배운 것은 주로 계시록이었다. 오늘날 예수님이 계시록의 봉한 인을 다 떼시고 열어 이루셨다. 그리고 그 열린 책을 받아먹게 하셨고, 이 책 계시록의 실체들을 보여 주셨다."
  },
  {
    category: "Promised Pastor",
    source: "Promised pastor",
    text: "계시록 사건을 다 본 하나님의 사자는 용의 무리와 끝까지 싸워 이긴 이긴자이며, 이긴자가 있는 곳은 하나님의 씨로 난 12지파이다."
  },
  {
    category: "Teaching / Teacher",
    source: "Teaching / Teacher",
    text: "나는 아는 것, 본 것, 그것을 가르친다. 교만하지 않기 위해서이다."
  },
  {
    category: "Teaching / Teacher",
    source: "Teaching / Teacher",
    text: "내용만 아는게 아니라 여기에 실체까지 말해줘야되죠. 왜 그러냐? 오늘날은 예언이 아니고 이루는것이죠. 이루다 보니까 실체도 있을것 아닙니까?"
  },
  {
    category: "Teaching / Teacher",
    source: "Teaching / Teacher",
    text: "약속의 목자의 말씀: 열심을 다해 자기 자신을 가르치라. 남은 가르치고 자기를 안 가르치니 문제가 생기는 것이다."
  },
  {
    category: "Highlights",
    source: "Highlights",
    text: "천국과 영생은 헐값이 아닙니다. 목숨과 같이 귀중합니다."
  },
  {
    category: "Highlights",
    source: "Highlights",
    text: "하나님은 하나님의 뜻대로 하는 자를 더 사랑하십니다. 우리 신천지는 하늘나라의 독립군이며 특수 강철 백마부대입니다."
  },
  {
    category: "Highlights",
    source: "Highlights",
    text: "진짜 신앙인은 목숨 걸고 이 약속의 말씀을 믿고 지키는 자이다."
  },
  {
    category: "Faith & Mission",
    source: "JSS Category",
    text: "일한 대로 상을 받는다고 하였습니다. 계시록의 역사는 하나님과 마귀와의 마지막 전쟁입니다. 이겨야만 잃은 것을 찾게 되고 통치하게 됩니다."
  },
  {
    category: "Faith & Mission",
    source: "JSS Category",
    text: "우리 성도들이 세상의 빛이 되게 해 달라고 기도합니다. 우리는 세상 사람이 아니요, 하나님의 씨로 난 하나님의 천국 자녀들입니다. 해서 이 세상에서 저 해같이 빛이 되어야 합니다."
  },
  {
    category: "Faith & Mission",
    source: "JSS Category",
    text: "우리 신천지에게는 하늘의 천사들과 순교한 영들이 함께하신다. 지금 하나님은 신천지에게 6천 년 만에 최고의 진리를 주셨다."
  },
  {
    category: "Creation",
    source: "JSS Category",
    text: "노아 때같이 한 시대가 바뀌려면 종교 전쟁이 필수적인 것으로 보인다. 오늘날 약속의 나라 새 하늘 새 땅 신천지가 출현함으로, 이전 교회들이 총동원하여 신천지의 진리의 말씀을 믿지 못하게 방해했다."
  },
  {
    category: "Creation",
    source: "JSS Category",
    text: "하나님은 마지막 역사인 계시록의 성취 사건에 대해 이때가 노아 때, 롯 때와 같다고 하셨고, 이 일을 위해 대전쟁을 하고 있다. 계 7장과 14장의 약속대로 약속의 민족을 남겼고, 전쟁에서 이겼으며, 하나님의 통치 시대가 열리게 되는 것이다."
  },
  {
    category: "Creation",
    source: "JSS Category",
    text: "계시록 성취 때는 배도도, 멸망도, 심판도, 창조도 계시록의 순리대로 이루어져야 한다. 이때 신천지 12지파가 창조된다."
  }
];

const heavenlyYeastQuotes = [
  {
    category: "Worry & Provision",
    source: "Heavenly Yeast / Worry, God will provide",
    text: "우리 앞길을 책임져달라고 기도하면 하나님께서 앞길 책임져 주신다. 아무 염려 말고 지금까지 나의 길을 인도해 주신 것처럼 나의 앞길도 이끄실 것을 믿자."
  },
  {
    category: "Worry & Provision",
    source: "Heavenly Yeast / Worry, God will provide",
    text: "나는 혼자 다닌 일이 한 번도 없었다. 만약에 하늘이 지켜주지 아니한다면 이 역사 할 필요 없다. 하늘이 지켜주심을 믿어야 된다."
  },
  {
    category: "Know Yourself",
    source: "Heavenly Yeast / Know yourself",
    text: "We need to ask ourselves what percentage of us belongs to either God or the world and organize ourselves."
  },
  {
    category: "Know Yourself",
    source: "Heavenly Yeast / Know yourself",
    text: "이 책의 계시 말씀으로 자신의 신앙을 확인하고 영생의 길로 가야 구원받게 된다. 이 약속의 말씀으로 자신을 알자. 그리고 대적과 싸워 이기자."
  },
  {
    category: "Faith & Deeds",
    source: "Heavenly Yeast / Important test question",
    text: "If faith and deeds are not perfect, we cannot enter the kingdom of heaven, and even if we enter, we will be cast out. Therefore, we must create heart, mind, and action according to the New Covenant Revelation."
  },
  {
    category: "Faith & Deeds",
    source: "Heavenly Yeast / Important test question",
    text: "이때는 돈보다 말씀과 믿음과 행함이 더 중하다 할 것이니, 육신의 재물을 구하는 것보다 성경의 약속을 알고 그 약속에 대한 믿음과 그 뜻대로 하는 것이 더 나은 길일 것이다."
  },
  {
    category: "Highlights",
    source: "Heavenly Yeast / Highlights",
    text: "하나님의 목자라면 하나님의 모든 성분이 마음에 있어야 한다. 하나님의 신을 마음에 모시려면, 하나님의 말씀이 내 안에 있어야 한다. 그렇게 되면 하나님은 자동적으로 나와 함께하시는 것이다."
  },
  {
    category: "Highlights",
    source: "Heavenly Yeast / Highlights",
    text: "나 자신의 마음을 100퍼센트 하나님께 맡기면, 하나님도 그 마음을 100퍼센트 내게 담아 주실 것이다."
  },
  {
    category: "Highlights",
    source: "Heavenly Yeast / Highlights",
    text: "자기 계산 가지고 믿음이 약하고 어떻고 저떻고 평가하지 말고 하나님 말씀을 믿자는 것이다. 그래서 이왕이면 하나님의 멋진 나라를 만들고 하나님의 멋진 백성이 되자."
  },
  {
    category: "Highlights",
    source: "Heavenly Yeast / Highlights",
    text: "마귀는 마귀니까 하는 소리를 하지만, 우리는 항상 하나님의 일을 해야 한다. 만약 마귀가 붙잡고 늘어지면 '나 바빠, 하나님 일 해야 돼' 하면서 떼내 버려야 한다."
  },
  {
    category: "Highlights",
    source: "Heavenly Yeast / Highlights",
    text: "우리는 하늘나라의 판검사가 되기 위해서는 그 정도의 공부가 아니라 피나는 공부를 해야 한다."
  },
  {
    category: "Highlights",
    source: "Heavenly Yeast / Highlights",
    text: "'내가 하는 것을 누가 알아'라고 생각하는 것은, 그 말 자체가 하나님을 안 믿는 것이다. 그러므로 자기 자신이 먼저 깨달아서 죄가 될 일들과 다른 사람에게 피해가 되는 일을 해서는 안 된다."
  },
  {
    category: "Highlights",
    source: "Heavenly Yeast / Highlights",
    text: "하늘의 문화는 세상의 문화보다 나아야 한다. 우리의 지식 또한 하늘의 지식이니, 정말 세상의 모든 것에 통할 정도로 모든 문화 지식이 뛰어나야 한다."
  },
  {
    category: "Highlights",
    source: "Heavenly Yeast / Highlights",
    text: "우리는 맹목적인 신앙을 하기보다는 왜 신앙을 하는가, 왜 이 말씀을 먹어야 하는가를 알고, 충만한 체험과 완전한 믿음을 가져야 한다."
  },
  {
    category: "Highlights",
    source: "Heavenly Yeast / Highlights",
    text: "사람들은 안 믿는 버릇이 있어서 말씀을 잘 안 믿지만, 하나님이 공연히 공갈로 이 좋은 말씀을 하신 것이 아니다. 하나님의 말씀을 믿도록 하자."
  },
  {
    category: "Highlights",
    source: "Heavenly Yeast / Highlights",
    text: "오해라는 자체는 살인과 같은 것이다. 확신도 없는 것을 가지고 함부로 말하는 것은 살인과 같다는 말이다."
  },
  {
    category: "Highlights",
    source: "Heavenly Yeast / Highlights",
    text: "왜 스스로에게 가라앉는 부정적인 소리를 하는가? 우리는 하나님이 우리를 보고 계시므로 분발해야 하고, 생기가 펄펄 넘치도록 해야 한다."
  },
  {
    category: "Highlights",
    source: "Heavenly Yeast / Highlights",
    text: "추수되어 온 자와 추수되어 오지 못한 자의 차이는 엄청나게 크다. 하나님께서는 우리를 추수해 올 때 미리 우리가 구원받을 것을 아실 것이다."
  },
  {
    category: "Highlights",
    source: "Heavenly Yeast / Highlights",
    text: "어디를 가서 누구를 상대하든지 간에 생각이 넓어야 한다. 밤낮 자기 아는 것에만 매여 있으면 안 된다."
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "곁에 있는 사람끼리도 믿지 못하고 사랑하지 못하면서 안 보이는 하나님을 사랑하고 믿는다는 것이 이치에 맞는가? 하나님은 이치이고 진리이시다."
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "우리는 정신이 나가거나 혼이 빠진 사람처럼 그렇게 살면 안 된다. 확실해도 구원받을까 말까 한데, 흐리멍덩해 보라. 과연 구원받을 수 있겠는가?"
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "하나님을 향한 우리의 마음이 변치 않는다면, 하나님께서도 우리에게 향하는 마음을 거두지 아니하실 것이다."
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "하나님도, 예수님도, 목 베인 영혼들도 총집중하여 여기에 와서 우리의 마음을 살펴보고 계시다는 것을 알아야 한다."
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "나가서 전도하는 일보다 더 큰 일이 어디 있는가. 비록 자신이 제명을 받았다, 근신을 받았다 할지라도 전도해야 하지 않겠는가?"
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "누가 똑똑한 사람인가? 깨달아 믿는 사람이 똑똑한 사람이다."
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "때로 울고 싶고 치사하고 다 던져 버리고 싶어도 참는 것은, 오직 하나님의 일을 이루기 위해서이다."
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "나 자신이 괴롭고 어려운 것만을 생각하면 아무 일도 못 한다. 죽으면 죽으리라는 각오로 하나님의 일을 해야 한다."
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "하나님께서 심판 때에 '너 뭐했느냐? 무슨 공로로 천국에 왔느냐?' 물으시면, 그분 앞에서 할 말이 있어야 한다."
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "공연히 누가 잘 하느니 못 하느니 이유를 대는 것은 먼저 자기에게 중심이 없어졌기 때문이다. 내 믿음의 중심이 말씀에 입각한 믿음이라면 사사로운 일로 흔들리지 않을 것이다."
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "우리는 '나는 하나님의 뜻대로 신앙을 하고 구원받아야 하겠다'는 근본 정신을 가져야 한다. 이러한 것을 잘 모르기 때문에 사람이 교만해지고 건방을 떠는 것이다."
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "천국과 영생과 하나님보다 더 큰 것은 없다. 그러니 우리는 모든 연단 가운데 나아가야 하지 않겠는가?"
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "내가 수십 년 수백 년 잘 걸어왔다고 해도, 한번 실수를 해서 낭떠러지에서 떨어져 버리면 결국 떨어져 죽게 되는 것이다. 그러니 우리는 조심 또 조심해야 한다."
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "이 사람들이 전한 것은 예언에 불과하지만, 오늘날 우리는 신약 예언과 신약이 성취된 것까지 다 깨달았으니, 구약의 선지자들보다 더욱 커야 하지 않겠는가?"
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "성경 역사를 살펴볼 때, 죄를 지으려고 지은 것이 아니라 환경에 떠밀려서 죄를 지은 것이다. 이런 모든 점들을 감안해서 우리는 더욱 깨어 있는 분명한 정신을 가져야 한다."
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "우리는 정말 절대적으로 하나님의 말씀을 믿고, 이 말씀에 의해 나는 결코 천국 가야 한다, 영생해야 한다는 각오가 서야 한다."
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "완전한 말씀의 실체가 되어 하나님 앞에 귀여움 받고 세상도 구원받도록 해줘서 하나님께 칭찬받도록 하자."
  },
  {
    category: "Important",
    source: "Heavenly Yeast / Important",
    text: "우리는 말을 함부로 하면 안 된다. 말 한 마디 잘못한 것 때문에 많은 사람이 시험에 빠지는 것이다."
  },
  {
    category: "Voyager",
    source: "Heavenly Yeast / Voyager Sailing Towards Heaven",
    text: "너희는 예수님같이 선지 사도같이, 아니 그보다 더 사적에서 떠나 공적에 서라. 나 자신은 십자가에 못 박혀 죽었고, 산 것은 내가 아닌 예수님께서 산 것이다."
  },
  {
    category: "Voyager",
    source: "Heavenly Yeast / Voyager Sailing Towards Heaven",
    text: "주의 제자 되고 한 몸을 이루었으니, 나에게 방해되는 것은 잘라 없게 하는 것이 나를 아프게 하는 십자가이다. 그래도 이겨야 한다."
  },
  {
    category: "Voyager",
    source: "Heavenly Yeast / Voyager Sailing Towards Heaven",
    text: "한 순간 호흡까지라도 주를 위해 천국을 위해서 아끼고 소중한 시간이 되게 하라. 천국 건설 할 일 많다."
  },
  {
    category: "Voyager",
    source: "Heavenly Yeast / Voyager Sailing Towards Heaven",
    text: "백방으로 뛰고 또 뛰고 불꽃같은 눈으로 두 주먹 힘 있게 쥐고 달려가자. 우리는 오직 주와 천국만이 내 소망이다."
  },
  {
    category: "Voyager",
    source: "Heavenly Yeast / Voyager Sailing Towards Heaven",
    text: "그대 있는 곳에 나도 있고, 나 있는 곳에 그대들도 있다. 천국가는 운명의 뱃사공 우리 주님께서도 함께 가고 있다."
  },
  {
    category: "God's Will",
    source: "Heavenly Yeast / How can we do the will of God?",
    text: "우리는 하나님의 지혜의 신을 받아서 진정한 깨달음이 되어야 한다. 하나님의 뜻대로 하려면 하나님의 뜻을 알아야 하는 것이다."
  },
  {
    category: "God's Will",
    source: "Heavenly Yeast / How can we do the will of God?",
    text: "정말 성경을 가지고 신앙을 하고 하나님의 뜻대로 신앙하기를 원하는 사람이라면, 자기 자신과 이 말씀을 비교해 보아야 한다."
  },
  {
    category: "God's Will",
    source: "Heavenly Yeast / How can we do the will of God?",
    text: "우리는 정말 무엇을 하든지 간에 하나님의 뜻대로 해야 한다."
  },
  {
    category: "God's Will",
    source: "Heavenly Yeast / How can we do the will of God?",
    text: "정말 나 자신이 하나님의 뜻대로 신앙하고 천국 가고자 하는 마음을 가졌다면, 그냥 겉으로 보고 넘어갈 것이 아니라 눈 있게 보고 생각해 봐야 한다."
  },
  {
    category: "God's Will",
    source: "Heavenly Yeast / How can we do the will of God?",
    text: "이는 하나님께서 이끄시니까 되는 것이다. 하나님의 역사인 것이다. 여러분들은 이 사람보다 몇십 배 더 잘난 사람들이다. 그러니 무엇이든지 하나님의 뜻대로 하려고 하면 잘 될 것이다."
  },
  {
    category: "God's Will",
    source: "Heavenly Yeast / How can we do the will of God?",
    text: "우리는 기도해야 한다. 기도는 하나님을 움직인다. 기도를 통해서 하나님의 목적과 우리의 소망이 이루어져야 하지 않겠는가?"
  },
  {
    category: "God's Will",
    source: "Heavenly Yeast / How can we do the will of God?",
    text: "하나님은 어떠한 사람을 원하시겠는가? 하나님의 말씀대로 창조된 사람을 원할 것 아니겠는가?"
  },
  {
    category: "God's Help",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "하늘이 도와주시지 않으면 아무것도 안 된다. 그러므로 하나님께 도움을 받으려면 하나님의 뜻대로 해야 하고 하나님 앞에 올바른 일을 해야 한다."
  },
  {
    category: "God's Help",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "하나님과의 약속을 지키기 위해 죽기 살기로 뛰면, 이를 하나님께서도 보시고 도와주시지 않겠는가?"
  },
  {
    category: "God's Help",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "포기하고 있는데 누가 도와주겠는가? 용기를 가지면 성령이 도와주실 것이다."
  },
  {
    category: "God's Help",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "사람이 아무것도 모른다고 해도, 해내려는 마음으로 노력하면 하늘이 도우신다."
  },
  {
    category: "God's Help",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "하나님께서는 우리의 믿음을 보시고 모든 것을 이루어 주시기 때문에, 첫째 우리는 하나님께 점수를 따야 되고 하나님께 점수를 따려면 바른 신앙을 해야 한다."
  },
  {
    category: "God's Help",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "우리는 하나님께 쉬지 말고 기도해야 한다. 그래야 하나님도 기분이 좋으셔서 우리를 위해 더 많이 일해 주실 것이다."
  },
  {
    category: "God's Help",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "순교자들이 목숨 걸고 역사한 것처럼 우리도 목숨 걸고 달려갈 때, 하늘이 도우시고 순교의 영들이 도와주실 것이다."
  },
  {
    category: "God's Help",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "하나님의 일을 하면 하나님이 알아서 해주시지 않겠는가? 그렇게 해서 하나님의 멋진 나라를 만들어 놓고 나서 그때 봐야 된다."
  },
  {
    category: "God's Help",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "우리는 하나님의 마음과 사상과 뜻과 같아야 함께 일할 수 있다. 그러니 소인배처럼 밤낮 지저분한 것들을 생각하거나 그래서는 안 된다."
  },
  {
    category: "God's Help",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "하나님의 일을 돕는 자에게는 '그래, 더 도와라' 하시며 은혜를 주실 것이다. 하나님의 일을 돕지 않는 자에게 왜 은혜를 주시겠는가?"
  },
  {
    category: "God's Help",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "하나님께서는 하나님의 일을 도우려는 사람은 돕지 않겠는가? 이것이 만고의 진리이다."
  },
  {
    category: "God's Help",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "내 마음을 하나님 앞에 드려야 하나님의 마음에 나를 담아 주시지 않겠는가를 생각하는 신앙을 가져야 한다."
  },
  {
    category: "God's Help",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "좋은 일을 웃음과 기쁨과 즐거움으로 해 나가야 하나님도 더 도와주실 것이다."
  },
  {
    category: "Greet God",
    source: "Heavenly Yeast / How to greet God",
    text: "하나님의 목자라면 하나님의 모든 성분이 마음에 있어야 한다. 하나님의 신을 마음에 모시려면, 하나님의 말씀이 내 안에 있어야 한다."
  },
  {
    category: "Greet God",
    source: "Heavenly Yeast / How to greet God",
    text: "우리는 하나님과 같은 마음으로, 하나님의 씨를 받아서, 하나님과 같이 세상을 사랑해야 한다."
  },
  {
    category: "Greet God",
    source: "Heavenly Yeast / How to greet God",
    text: "이제 우리는 나 자신이 정말 하나님을 모실 만한 자격과 실력이 있는가를 생각하며 항시 자기를 돌아봐야 한다."
  },
  {
    category: "Greet God",
    source: "Heavenly Yeast / How to greet God",
    text: "이긴 자들은 하나님의 자녀가 되어 새로운 세상을 유업으로 받는다 하였다. 그러므로 우리는 확실한 믿음과 성실함으로 하나님을 맞이해야 한다."
  },
  {
    category: "Greet God",
    source: "Heavenly Yeast / How to greet God",
    text: "하나님을 모실 수 있는 성전은 자신의 마음이 아닌가? 그러니 정말 깨끗한 마음이 우선되어야 한다."
  },
  {
    category: "God's Child",
    source: "Heavenly Yeast / Who has right to be God's child?",
    text: "우리도 하나님의 말씀의 씨로 거듭나야만 하나님을 아버지라 부를 수 있으며, 하나님의 자녀가 될 수 있다."
  },
  {
    category: "God's Child",
    source: "Heavenly Yeast / Who has right to be God's child?",
    text: "우리가 하나님에게서 났다면, 말씀으로 났다면, 우리도 말씀체가 되어야 한다. 새 언약은 말씀을 생각에 두고 마음에 새기는 것이기 때문이다."
  },
  {
    category: "God's Child",
    source: "Heavenly Yeast / Who has right to be God's child?",
    text: "순종하지 않고 잘못된 행실 하면 마땅히 쫓겨나야 한다. 여기 와서 자기 멋대로 생각대로 주관대로 하려고 하면 안 된다."
  },
  {
    category: "God's Child",
    source: "Heavenly Yeast / Who has right to be God's child?",
    text: "말씀이 생기이고, 말씀이 씨이다. 그러므로 말씀이 들어가서 생령이 되는 것이다."
  },
  {
    category: "Hometown",
    source: "Heavenly Yeast / What does it mean to go to our hometown?",
    text: "하나님께서 태초에 세상을 창조하셨을 때는 얼마나 아름답게 만드셨겠는가? 그때의 모습으로 돌아가는 것이 우리의 본향으로 돌아가는 것이 아니겠는가?"
  },
  {
    category: "Hometown",
    source: "Heavenly Yeast / What does it mean to go to our hometown?",
    text: "우리의 본향은 하나님 모시고 함께 사는 낙원 천국이다."
  },
  {
    category: "Eternal Life",
    source: "Heavenly Yeast / Is heaven and eternal life freely given?",
    text: "복과 천국과 영생이 그냥 수월하게 얻어지는 것이 아니다. 가치가 크면 클수록 그것을 얻기 위해서는 그만한 노력이 있어야 하는 것 아니겠는가?"
  },
  {
    category: "Eternal Life",
    source: "Heavenly Yeast / Is heaven and eternal life freely given?",
    text: "우리는 너무나 큰 것에 도전하는 사람들이기에 그만한 노력을 해야 한다. 갖은 노력을 다할 때 하나님이 우리에게 주시는 것이다."
  },
  {
    category: "Integrity",
    source: "Heavenly Yeast / Thinking that no one will see",
    text: "'내가 하는 것을 누가 알아'라고 생각하는 것은, 그 말 자체가 하나님을 안 믿는 것이다."
  },
  {
    category: "Integrity",
    source: "Heavenly Yeast / Thinking that no one will see",
    text: "그러므로 우리는 자기 자신이 먼저 깨달아서, 죄가 될 일들을 해서는 안 되고 다른 사람에게 피해가 되는 일도 해서는 안 된다."
  },
  {
    category: "Worldliness",
    source: "Heavenly Yeast / Hating God, God hating",
    text: "높아진다는 것은 하나님이 미워하는 것이라. 높아지는 자는 낮아질 것이고 낮아지는 자는 높아질 것이다."
  },
  {
    category: "Worldliness",
    source: "Heavenly Yeast / Hating God, God hating",
    text: "하나님의 법을 지키지 않으면 하나님과 원수가 된다."
  },
  {
    category: "Worldliness",
    source: "Heavenly Yeast / Hating God, God hating",
    text: "성령으로 시작하였는데, 육으로 돌아가서 저 세상 사람으로 살겠다는 생각을 가진다면, 하나님 앞에 미운 사람이 될 것이다."
  },
  {
    category: "Worldliness",
    source: "Heavenly Yeast / Hating God, God hating",
    text: "세상 때문에 하나님의 일을 등한히 해서는 안 된다."
  },
  {
    category: "Worldliness",
    source: "Heavenly Yeast / What doing whatever you want means",
    text: "우리가 하나님을 안 믿는다면, 아주 세상으로 가서 자기 멋대로 살아 버리면 된다. 그러나 소망을 바라보는 사람이라면, 하나님의 뜻대로 해야 한다."
  },
  {
    category: "Word & Robes",
    source: "Heavenly Yeast / How not to get thrown out by God",
    text: "우리 신천지인이라면 누구를 막론하고 걸어다니는 성경책이 될 수 있도록, 모두가 자아완성적인 실력자가 되어야 한다."
  },
  {
    category: "Word & Robes",
    source: "Heavenly Yeast / How not to get thrown out by God",
    text: "귀한 것은 오직 하나님의 말씀이므로, 이 말씀의 보석으로 마음에 채워 놓으면 그 사람은 아까워서라도 하나님께서 절대로 버리지 못하실 것이다."
  },
  {
    category: "Word & Robes",
    source: "Heavenly Yeast / What does it mean to wash our robes?",
    text: "수정 같은 생명수로 두루마기를 빨아 입으라는 것은, 겉으로 걸친 껍데기의 옷을 빨라는 것이 아니라 마음의 옷, 곧 행실을 빨라는 것이다."
  },
  {
    category: "Word & Robes",
    source: "Heavenly Yeast / What does it mean to wash our robes?",
    text: "잘못된 행실은 고쳐야 한다. 이 마음의 옷을 빨 수 있는 생명수가 바로 하나님의 말씀이다."
  },
  {
    category: "Know God",
    source: "Heavenly Yeast / Why should the world know God?",
    text: "세상의 철학이 아무리 높다고 해도 그것은 풀 포기 하나 만들지 못한다. 그러나 하나님은 천지 만물을 창조하셨다."
  },
  {
    category: "Know God",
    source: "Heavenly Yeast / Why should the world know God?",
    text: "우리가 이왕 철학을 좇으려면 하나님의 철학을 배워야 하지 않겠는가?"
  },
  {
    category: "Know God",
    source: "Heavenly Yeast / Why should the world know God?",
    text: "확실히 믿는다면, 예수님께서 하나님의 백성들을 책임져 주실 것이다."
  },
  {
    category: "Appointed Worker",
    source: "Heavenly Yeast / Mindset of an appointed worker",
    text: "An appointed worker should continuously think about their duty while sleeping, awake, eating or walking on the street, and whether sitting or standing, draw up different scenarios about their task."
  },
  {
    category: "Appointed Worker",
    source: "Heavenly Yeast / Mindset of an appointed worker",
    text: "Even by looking at all the things in the world, all the happenings around the world, all the things in the universe and even the videos from television, one must attain wisdom from them regarding their assigned duty."
  },
  {
    category: "Appointed Worker",
    source: "Heavenly Yeast / Mindset of an appointed worker",
    text: "Making it better and brighter means believing in it, repaying even one ten-thousandth of God's grace and giving glory to God."
  },
  {
    category: "Appointed Worker",
    source: "Heavenly Yeast / Mindset of an appointed worker",
    text: "If there is anything wrong then fix it a thousand and ten thousand times."
  },
  {
    category: "Appointed Worker",
    source: "Heavenly Yeast / Mindset of an appointed worker",
    text: "If there is a place where I could learn to enhance the work for my duty, then I must go, and even learn from all creation."
  },
  {
    category: "Appointed Worker",
    source: "Heavenly Yeast / Mindset of an appointed worker",
    text: "I must create new ways to complete my duty to be the best of the best, better than anyone and anything, which will please God. This is my life."
  }
];

const expandedJssQuotes = quotes.concat([
  {
    category: "Jesus",
    source: "Jesus",
    text: "하나님의 씨로 난 예수님은 흙으로 가지 않고 하늘로 가서 하나님의 우편에 계셨다. 이 하늘은 계시록 4장과 21장에서 본 영계의 세계였고, 이 땅에 오시는 천국인 새 예루살렘이다."
  },
  {
    category: "Jesus",
    source: "Jesus",
    text: "새 하늘 새 땅이 창조된 12지파가 천국이고, 마귀의 씨로 난 자들이 지옥이다. 하나님의 씨로 난 자들의 땅의 천국에 하늘의 천국 곧 거룩한 성 새 예루살렘 성과 하나님이 오사 하나가 된 것이 에덴동산을 회복한 새 천국이다."
  },
  {
    category: "Jesus",
    source: "Jesus",
    text: "예수님과 약속의 목자는 새 천국의 건설자이다."
  },
  {
    category: "Jesus",
    source: "Jesus",
    text: "주께서 요 14장에서 약속하신 처소를 만들어 다시 오셨습니다. 함께 갑시다. 예수님은 우리를 위해 대신 십자가를 져 주셨고, 우리를 위해 처소를 만들어 오셨습니다."
  },
  {
    category: "Jesus",
    source: "Jesus / Who was he?",
    text: "예수님은 하나님의 아들이고, 하나님과 하나 된 분이시며, 죄가 없는 분이시다."
  },
  {
    category: "Jesus",
    source: "Jesus / Who was he?",
    text: "예수님은 사람의 씨로 나지 않고 하나님의 씨로 났다. 해서 하나님의 아들이며 의인이다."
  },
  {
    category: "Jesus",
    source: "Jesus / Who was he?",
    text: "예수님은 참 포도나무였고, 살리는 구원의 나무였다. 예수님은 태초의 말씀인 생명나무로서 달마다 열두 가지 열매를 맺으며, 그 잎은 만국을 소성하기 위해 있다고 하셨다."
  },
  {
    category: "Jesus",
    source: "Jesus / Who was he?",
    text: "하나님과 예수님은 어떤 존재이신가? 태초의 말씀이시고, 창조력이 있으며, 생명과 빛이시다."
  },
  {
    category: "Jesus",
    source: "Jesus / Who was he?",
    text: "하나님과 예수님이 떠나시는 것은 생명이 떠나는 것이요, 하나님과 예수님이 들어오시는 것은 생명이 들어오는 것이다."
  },
  {
    category: "Jesus",
    source: "Jesus / Who was he?",
    text: "예수님은 하나님의 아들이시고 하나님이 함께하셨고, 구약을 이루셨으며, 신약을 예언하신 분입니다."
  },
  {
    category: "Jesus' Blood",
    source: "Jesus / What is his blood?",
    text: "하나님과 예수님은 태초의 말씀이시다. 해서 하나님과 예수님의 피는 곧 생명의 말씀이다. 이 생명의 말씀 안에 예수님의 피가 있어, 이 말씀을 받아먹은 자가 곧 예수님의 생명의 피를 받아먹은 자이다."
  },
  {
    category: "Jesus' Blood",
    source: "Jesus / What is his blood?",
    text: "2천 년 전 골고다에서 흘리신 피는 예수님의 말씀 안에 있다. 오늘날 이 계시 말씀을 들어 먹는 자가 구원받게 된 것이다."
  },
  {
    category: "Jesus' Blood",
    source: "Jesus / What is his blood?",
    text: "예수님의 피도, 생명의 말씀도, 영생의 양식도 신천지의 계시 말씀뿐입니다. 이 계시 실상 말씀을 마음에 새겨 두는 것이 하나님과 예수님과 생명을 마음에 두신 것입니다."
  },
  {
    category: "Jesus' Blood",
    source: "Jesus / What is his blood?",
    text: "예수님의 피로 일심단결하면, 어떤 것도 이길 수 있고 새 세상도 창조할 수 있다. 우리는 천국을 위해 생명을 걸고 싸워서 이겨야 한다."
  },
  {
    category: "Jesus' Blood",
    source: "Jesus / What is his blood?",
    text: "하나님의 천국 비밀은 예수님의 피였다. 예수님의 피는 마귀를 이기고 사람의 죄를 해결할 수 있었다."
  },
  {
    category: "Jesus' Blood",
    source: "Jesus / Where is the blood of Jesus?",
    text: "예수님의 피와 생명은 새 언약 계시 말씀 안에 있어, 이 계시 말씀을 받은 자가 예수님의 피를 먹은 자이다."
  },
  {
    category: "Jesus' Blood",
    source: "Jesus / Where is the blood of Jesus?",
    text: "신약 계시록의 열린 책을 받아먹은 약속의 목자의 배 안에는 영생하는 피의 말씀인 계시록이 있고, 이는 인류를 구원하는 영생의 참 양식이다."
  },
  {
    category: "Jesus' Blood",
    source: "Jesus / Where is the blood of Jesus?",
    text: "새 언약 계시록 안에는 예수님의 피와 생명이 들어 있다. 해서 신약 계시록은 하나님의 법이다. 이 법과 생명의 말씀이 생각과 마음에 없으면 천국에 못 들어간다."
  },
  {
    category: "Jesus' Blood",
    source: "Jesus / Who was Jesus' blood shed for?",
    text: "예수님의 피는 아버지의 나라를 위한 것이었다. 이로 보아 아버지의 나라는 계시록 성취 때 이루어지며, 이 아버지의 나라에서 유월절 양식인 예수님의 피와 살을 먹게 되는 것이다."
  },
  {
    category: "Jesus' Blood",
    source: "Jesus / Who eats blood of Jesus?",
    text: "예수님의 새 언약의 피는 재림 때인 계시록 성취 때 먹게 된 것이다. 그리고 이 피로 사서 나라와 제사장을 삼은, 계 7장과 14장의 12지파가 먹게 된 것이다."
  },
  {
    category: "Jesus' Blood",
    source: "Jesus / Who was Jesus' blood shed for?",
    text: "예수님은 오늘날의 우리를 자기의 피로 사서 하나님의 새 나라와 제사장을 삼으실 것을, 유월절 밤 피로 새 언약을 하셨습니다."
  },
  {
    category: "Jesus' Blood",
    source: "Jesus / Who was Jesus' blood shed for?",
    text: "예수님은 자기 백성의 죄를 대신하여 십자가에서 피를 흘리셨으니, 이는 자기를 믿는 자의 죄를 사하시기 위함이었다. 이것이 의요, 또 이것을 믿는 것이 의이다."
  },
  {
    category: "Jesus' Works",
    source: "Jesus / Works",
    text: "예수님은 우리가 거할 처소를 예비하러 가셨고, 예비되면 그 만드신 거처 곧 영계 천국인 거룩한 성 새 예루살렘을 가지고 다시 오신다고 하셨다."
  },
  {
    category: "Jesus' Works",
    source: "Jesus / Works",
    text: "예수님은 십자가에서 죽으셨으나 생명의 부활이 되어 사신 바 되었고, 하늘로 올라가셨다. 그리고 재림 때 우리가 거할 처소인 새 예루살렘 성을 창조하여 오셨다."
  },
  {
    category: "Jesus' Works",
    source: "Jesus / Works",
    text: "초림 예수님은 구약의 약속대로 하나님의 씨를 뿌리시고 가셨다. 그리고 재림 때인 추수 때 다시 오사 뿌린 씨의 익은 곡식을 추수하여 인치시고 12지파를 창조하셨다."
  },
  {
    category: "Jesus' Works",
    source: "Jesus / Works",
    text: "오늘날 예수님은 신약 계시록을 이루셨고, 그 이룬 것을 온 세상에 증거하기 위해 이 일을 현장에서 다 보고 나온 이긴 자들로 증거장막 성전을 세우셨다."
  },
  {
    category: "Jesus' Works",
    source: "Jesus / Works",
    text: "예수님은 죽음에서 부활하셨고, 죽은 나사로를 살리셨다. 죽음과 삶의 전쟁에서 예수님이 이기셨다."
  },
  {
    category: "Jesus' Works",
    source: "Jesus / Works",
    text: "예수님은 하나님의 씨로 난 아들로서 의인이요, 하나님이 예수님 안에, 예수님이 하나님 안에 계셨다."
  },
  {
    category: "Jesus' Works",
    source: "Jesus / Works",
    text: "예수님은 초림 때 하나님의 씨를 뿌리셨고, 재림 때에는 하나님의 씨로 난 자들을 추수하고 인쳐서 약속하신 12지파를 창설하셨다."
  },
  {
    category: "Jesus' Works",
    source: "Jesus / Works",
    text: "구약에서 약속한 목자는 예수님이었고, 예수님이 오셔서 이룬 것은 구약에 약속한 것이었다. 이와 같이 신약에서 약속한 목자는 이긴자이다."
  },
  {
    category: "Jesus' Light",
    source: "Jesus / Image and Transfiguration",
    text: "계 1장에서 승천하신 후 재림하신 예수님의 모습을 본바, 눈은 불꽃 같고, 발은 빛난 주석 같고, 음성은 많은 물소리 같고, 입에서는 좌우에 날선 검이 나오고, 얼굴은 해 같았다."
  },
  {
    category: "Jesus' Light",
    source: "Jesus / Image and Transfiguration",
    text: "예수님은 자신을 광명한 새벽별이라고 하셨다. 요한이 본 모습은 사람이 바라볼 수 없는 큰 빛이었다."
  },
  {
    category: "Jesus' Light",
    source: "Jesus / Image and Transfiguration",
    text: "하나님과 예수님의 빛을 보고 죽을 것 같은 고통을 느꼈다. 하나님과 천국과 그 소속 장로들까지 빛으로 된 존재들임을 알 것이다."
  },
  {
    category: "Jesus' Light",
    source: "Jesus / Image and Transfiguration",
    text: "예수님은 하나님의 씨로 난 하나님의 아들이었고, 육체로 죽었다가 부활하신 후의 본체의 모습은 빛이었다."
  },
  {
    category: "Jesus' Light",
    source: "Jesus / Image and Transfiguration",
    text: "신천지가 받은 말씀은 곧 생명과 빛이다."
  }
]);

const expandedHeavenlyYeastQuotes = heavenlyYeastQuotes.concat([
  {
    category: "Faith & Clarity",
    source: "Heavenly Yeast / Important",
    text: "확실해도 구원받을까 말까 한데, 흐리멍덩해 보라. 과연 구원받을 수 있겠는가? 성경체가 되자고 그렇게 말했는데도 흐리멍덩하다면, 이건 신앙이 아니다."
  },
  {
    category: "Faith & Clarity",
    source: "Heavenly Yeast / Important",
    text: "여러분은 이 말씀을 진짜 믿고 있는가, 희미한 신앙을 하고 있는가? 우리는 정말 절대적으로 하나님의 말씀을 믿고 천국과 영생에 대한 각오가 서야 한다."
  },
  {
    category: "Faith & Clarity",
    source: "Heavenly Yeast / Important",
    text: "이도 저도 아니고 희미하게 있으면, 자기 영만 죽는 것이 아니라 곁에 있는 사람도 죽인다는 것이다."
  },
  {
    category: "Words & Speech",
    source: "Heavenly Yeast / Important",
    text: "말 한 마디 잘못한 것 때문에 많은 사람이 시험에 빠지는 것이다. 성경이 바로 말씀이고 말씀이 예수님이니까, 우리는 그 길로 가야 한다."
  },
  {
    category: "Words & Speech",
    source: "Heavenly Yeast / Highlights",
    text: "편지도 받는 사람 본인 것이 아니면 보낸 사람에게 되돌아가듯이, 확실하지 않은 근거 없는 말은 결국 말한 그 사람에게 돌아간다. 그러므로 말을 함부로 하면 안 된다."
  },
  {
    category: "Broad Mind",
    source: "Heavenly Yeast / Highlights",
    text: "모든 것을 경험해 보고 생각도 넓혀서 다 이겨 나갈 수 있는 능력을 갖춰야 한다."
  },
  {
    category: "Broad Mind",
    source: "Heavenly Yeast / Highlights",
    text: "밤낮 자기 아는 것에만 매여 있으면 안 된다. 어디를 가서 누구를 상대하든지 간에 생각이 넓어야 한다."
  },
  {
    category: "Public Mind",
    source: "Heavenly Yeast / Voyager Sailing Towards Heaven",
    text: "Just like Jesus and the prophets and apostles, no, even more than them, you must leave the private and stand on the public."
  },
  {
    category: "Public Mind",
    source: "Heavenly Yeast / Voyager Sailing Towards Heaven",
    text: "Because Jesus' Spirit is in me, this body belongs not to me but to Jesus. The Lord and I have become one and are walking towards the path of life."
  },
  {
    category: "Public Mind",
    source: "Heavenly Yeast / Voyager Sailing Towards Heaven",
    text: "Use every moment and every breath as a valuable, precious time for the Lord and for heaven."
  },
  {
    category: "Public Mind",
    source: "Heavenly Yeast / Voyager Sailing Towards Heaven",
    text: "There are many things to do to establish heaven. Let us run and run again in all directions, with eyes like flames of fire."
  },
  {
    category: "Public Mind",
    source: "Heavenly Yeast / Voyager Sailing Towards Heaven",
    text: "For us, only the Lord and heaven are our hope. For this hope, let us establish heaven with every moment of our lives."
  },
  {
    category: "Prayer",
    source: "Heavenly Yeast / How can we do the will of God?",
    text: "기도는 하나님을 움직인다. 기도를 통해서 하나님의 목적과 우리의 소망이 이루어져야 하지 않겠는가?"
  },
  {
    category: "Prayer",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "우리는 하나님께 쉬지 말고 기도해야 한다. 그래야 하나님도 기분이 좋으셔서 우리를 위해 더 많이 일해 주실 것이다."
  },
  {
    category: "Prayer",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "하나님께 도움을 받으려면 하나님의 뜻대로 해야 하고 하나님 앞에 올바른 일을 해야 한다."
  },
  {
    category: "God's Work",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "진심으로 하나님의 일을 하면, 하나님이 도와주시는 것이다. 오직 하나님의 일을 하게 되면 하나님이 알아서 해주시지 않겠는가?"
  },
  {
    category: "God's Work",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "하나님의 일을 돕는 자에게는 하나님께서 더 도우라 하시며 은혜를 주실 것이다."
  },
  {
    category: "God's Work",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "하나님의 일을 도우려는 사람을 하나님께서 돕지 않겠는가? 이것이 만고의 진리이다."
  },
  {
    category: "God's Work",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "우리는 하나님의 마음과 사상과 뜻과 같아야 함께 일할 수 있다."
  },
  {
    category: "Heart",
    source: "Heavenly Yeast / How to greet God",
    text: "하나님을 모실 수 있는 성전은 자신의 마음이 아닌가? 그러니 정말 깨끗한 마음이 우선되어야 한다."
  },
  {
    category: "Heart",
    source: "Heavenly Yeast / How to greet God",
    text: "거룩한 하나님을 모시려면 내 마음도 거룩해야 한다."
  },
  {
    category: "Heart",
    source: "Heavenly Yeast / How can we receive help from God?",
    text: "내 마음을 하나님 앞에 드려야 하나님의 마음에 나를 담아 주시지 않겠는가를 생각하는 신앙을 가져야 한다."
  },
  {
    category: "Heart",
    source: "Heavenly Yeast / Highlights",
    text: "나 자신의 마음을 100퍼센트 하나님께 맡기면, 하나님도 그 마음을 100퍼센트 내게 담아 주실 것이다."
  },
  {
    category: "Word",
    source: "Heavenly Yeast / How not to get thrown out by God",
    text: "어디에 갖다 놓더라도 걸어다니는 성경책이 될 수 있도록, 모두가 자아완성적인 실력자가 되어야 한다."
  },
  {
    category: "Word",
    source: "Heavenly Yeast / How not to get thrown out by God",
    text: "이 말씀의 보석으로 마음에 채워 놓으면 그 사람은 아까워서라도 하나님께서 절대로 버리지 못하실 것이다."
  },
  {
    category: "Word",
    source: "Heavenly Yeast / What does it mean to wash our robes?",
    text: "마음의 옷을 빨 수 있는 생명수가 바로 하나님의 말씀이다."
  },
  {
    category: "Word",
    source: "Heavenly Yeast / Who has right to be God's child?",
    text: "말씀에 대해 느낌도 없고 가치감도 모르고 물에 떠다니는 것같이 하면 안 된다. 말씀체가 되어야 한다."
  },
  {
    category: "Word",
    source: "Heavenly Yeast / Who has right to be God's child?",
    text: "말씀이 생기이고, 말씀이 씨이다. 그러므로 말씀이 들어가서 생령이 되는 것이다."
  },
  {
    category: "World",
    source: "Heavenly Yeast / Hating God, God hating",
    text: "세상을 사랑하는 것이 하나님과 원수 된다고 하였다. 세상 때문에 하나님의 일을 등한히 해서는 안 된다."
  },
  {
    category: "World",
    source: "Heavenly Yeast / Hating God, God hating",
    text: "이제 우리는 세상 줄을 끊을 때가 왔다. 그리고 이제 우리는 하나님의 나라를 창조할 때가 왔다."
  },
  {
    category: "World",
    source: "Heavenly Yeast / What doing whatever you want means",
    text: "소망을 바라보는 사람이라면, 하나님의 뜻대로 해야 한다. 어떠한 말을 하든, 어떠한 행동을 하든, 하늘의 예수님과 순교의 영들이 바라보고 있지 않겠는가?"
  },
  {
    category: "Creation & Culture",
    source: "Heavenly Yeast / Highlights",
    text: "하늘의 문화는 세상의 문화보다 나아야 한다. 정말 세상의 모든 것에 통할 정도로 우리는 모든 문화 지식이 뛰어나야 한다."
  },
  {
    category: "Creation & Culture",
    source: "Heavenly Yeast / Mindset of an appointed worker",
    text: "If there is a place where I could learn to enhance the work for my duty, then I must go, and even learn from all creation, because it also was created with God's wisdom."
  },
  {
    category: "Creation & Culture",
    source: "Heavenly Yeast / Mindset of an appointed worker",
    text: "If there is anything wrong then fix it a thousand and ten thousand times."
  },
  {
    category: "Creation & Culture",
    source: "Heavenly Yeast / Mindset of an appointed worker",
    text: "I must create new ways to complete my duty to be the best of the best, better than anyone and anything, which will please God."
  }
]);

const bibleQuotes = [
  {
    category: "Strength",
    source: "Bible (A) / Prov 24:10",
    text: "If you falter in times of trouble, how small is your strength!"
  },
  {
    category: "Patience",
    source: "Bible (A) / Ecc 7:8",
    text: "The end of a matter is better than its beginning, and patience is better than pride."
  },
  {
    category: "Peace",
    source: "Bible (A) / Rom 16:20",
    text: "The God of peace will soon crush Satan under your feet. The grace of our Lord Jesus be with you."
  },
  {
    category: "Word",
    source: "Bible (A) / Jn 6:63",
    text: "The Spirit gives life; the flesh counts for nothing. The words I have spoken to you are spirit and they are life."
  },
  {
    category: "Word",
    source: "Bible (A) / Jn 17:8",
    text: "For I gave them the words you gave me and they accepted them."
  },
  {
    category: "Word",
    source: "Bible (A) / Jn 17:14",
    text: "I have given them your word and the world has hated them, for they are not of the world any more than I am of the world."
  },
  {
    category: "Light",
    source: "Bible (A) / Mt 5:14-16",
    text: "You are the light of the world. A city on a hill cannot be hidden. In the same way, let your light shine before men."
  },
  {
    category: "Salvation",
    source: "Bible (A) / 2 Pt 3:15",
    text: "Bear in mind that our Lord's patience means salvation."
  },
  {
    category: "Scripture",
    source: "Bible (A) / 2 Pt 3:16",
    text: "His letters contain some things that are hard to understand, which ignorant and unstable people distort, as they do the other Scriptures."
  },
  {
    category: "Faith",
    source: "Bible (A) / 2 Pt 1:10-11",
    text: "Be all the more eager to make your calling and election sure. For if you do these things, you will never fall."
  },
  {
    category: "Hope",
    source: "Bible (A) / 1 Pt 3:15-16",
    text: "Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have."
  },
  {
    category: "Gentleness",
    source: "Bible (A) / 1 Pt 3:15",
    text: "But do this with gentleness and respect."
  },
  {
    category: "Faith",
    source: "Bible (A) / Mt 13:58",
    text: "And he did not do many miracles there because of their lack of faith."
  },
  {
    category: "Faith",
    source: "Bible (A) / Mt 14:31-33",
    text: "You of little faith, why did you doubt? And when they climbed into the boat, the wind died down."
  },
  {
    category: "Faith",
    source: "Bible (A) / Jn 11:40",
    text: "Did I not tell you that if you believed, you would see the glory of God?"
  },
  {
    category: "Faith",
    source: "Bible (A) / Heb 11:24-27",
    text: "By faith Moses chose to be mistreated along with the people of God rather than to enjoy the pleasures of sin for a short time."
  },
  {
    category: "Faith",
    source: "Bible (A) / Heb 11:29-31",
    text: "By faith the people passed through the Red Sea as on dry land. By faith the walls of Jericho fell."
  },
  {
    category: "Faith",
    source: "Bible (A) / Lk 18:42",
    text: "Receive your sight; your faith has healed you."
  },
  {
    category: "Protection",
    source: "Bible (A) / 1 Pt 5:8",
    text: "Be self-controlled and alert. Your enemy the devil prowls around like a roaring lion looking for someone to devour."
  },
  {
    category: "Jesus",
    source: "Bible (A) / Jn 10:9-10",
    text: "I am the gate; whoever enters through me will be saved. The thief comes only to steal and kill and destroy; I have come that they may have life."
  },
  {
    category: "Jesus",
    source: "Bible (A) / Jn 10:11",
    text: "I am the good shepherd. The good shepherd lays down his life for the sheep."
  },
  {
    category: "Jesus",
    source: "Bible (A) / Jn 10:14-15",
    text: "I am the good shepherd; I know my sheep and my sheep know me, and I lay down my life for the sheep."
  },
  {
    category: "Jesus",
    source: "Bible (A) / Lk 2:34-35",
    text: "This child is destined to cause the falling and rising of many in Israel, and to be a sign that will be spoken against."
  },
  {
    category: "Jesus",
    source: "Bible (A) / Jn 6:35-37",
    text: "I am the bread of life. He who comes to me will never go hungry, and whoever comes to me I will never drive away."
  },
  {
    category: "Jesus",
    source: "Bible (A) / Jn 15:4",
    text: "Remain in me, and I will remain in you. No branch can bear fruit by itself; it must remain in the vine."
  },
  {
    category: "Covenant",
    source: "Bible (A) / Rom 1:25",
    text: "They exchanged the truth of God for a lie, and worshiped and served created things rather than the Creator."
  },
  {
    category: "Covenant",
    source: "Bible (A) / Rom 1:28",
    text: "Since they did not think it worthwhile to retain the knowledge of God, he gave them over to a depraved mind."
  },
  {
    category: "Covenant",
    source: "Bible (A) / Rom 9:8-9",
    text: "It is not the natural children who are God's children, but it is the children of the promise who are regarded as Abraham's offspring."
  },
  {
    category: "Covenant",
    source: "Bible (A) / Rom 9:11-12",
    text: "In order that God's purpose in election might stand: not by works but by him who calls."
  },
  {
    category: "Judgment",
    source: "Bible (A) / Acts 17:30-31",
    text: "In the past God overlooked such ignorance, but now he commands all people everywhere to repent. For he has set a day when he will judge the world with justice."
  },
  {
    category: "Judgment",
    source: "Bible (A) / Mt 25:40",
    text: "Whatever you did for one of the least of these brothers of mine, you did for me."
  },
  {
    category: "Judgment",
    source: "Bible (A) / Mt 25:45-46",
    text: "Whatever you did not do for one of the least of these, you did not do for me. Then they will go away to eternal punishment, but the righteous to eternal life."
  },
  {
    category: "Repentance",
    source: "Bible (A) / Acts 17:32-34",
    text: "Some of them sneered, but others said, We want to hear you again on this subject. A few men became followers of Paul and believed."
  },
  {
    category: "World",
    source: "Bible (A) / 2 Cor 5:1-4",
    text: "If the earthly tent we live in is destroyed, we have a building from God, an eternal house in heaven, not built by human hands."
  },
  {
    category: "World",
    source: "Bible (A) / 2 Cor 5:4",
    text: "While we are in this tent, we groan and are burdened, so that what is mortal may be swallowed up by life."
  },
  {
    category: "Word",
    source: "Bible (A) / Rom 1:17",
    text: "For in the gospel a righteousness from God is revealed, a righteousness that is by faith from first to last."
  },
  {
    category: "Gospel",
    source: "Bible (A) / Rom 16:25-26",
    text: "Now to him who is able to establish you by my gospel and the proclamation of Jesus Christ, according to the revelation of the mystery hidden for long ages past."
  },
  {
    category: "God",
    source: "Bible (A) / Acts 17:24-27",
    text: "The God who made the world and everything in it is the Lord of heaven and earth and does not live in temples built by hands."
  },
  {
    category: "God",
    source: "Bible (A) / Acts 17:27-28",
    text: "God did this so that men would seek him and perhaps reach out for him and find him, though he is not far from each one of us."
  },
  {
    category: "God",
    source: "Bible (A) / Acts 17:28",
    text: "For in him we live and move and have our being."
  },
  {
    category: "God",
    source: "Bible (A) / Jas 4:7-8",
    text: "Submit yourselves, then, to God. Resist the devil, and he will flee from you. Come near to God and he will come near to you."
  },
  {
    category: "God",
    source: "Bible (A) / Dt 31:8",
    text: "The LORD himself goes before you and will be with you; he will never leave you nor forsake you."
  },
  {
    category: "Love",
    source: "Bible (A) / Rom 8:35",
    text: "Who shall separate us from the love of Christ? Shall trouble or hardship or persecution or famine or nakedness or danger or sword?"
  },
  {
    category: "Love",
    source: "Bible (A) / Rom 8:38-39",
    text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, will be able to separate us from the love of God."
  },
  {
    category: "Endurance",
    source: "Bible (A) / 2 Tim 2:11-13",
    text: "If we died with him, we will also live with him; if we endure, we will also reign with him."
  },
  {
    category: "Suffering",
    source: "Bible (A) / Rv 2:10",
    text: "Do not be afraid of what you are about to suffer. Be faithful, even to the point of death, and I will give you the crown of life."
  },
  {
    category: "Discipline",
    source: "Bible (A) / 1 Tim 1:18-20",
    text: "Hold on to faith and a good conscience. Some have rejected these and so have shipwrecked their faith."
  },
  {
    category: "Church",
    source: "Bible (A) / Mt 18:20",
    text: "For where two or three come together in my name, there am I with them."
  },
  {
    category: "Prayer",
    source: "Bible (A) / Mt 18:19",
    text: "If two of you on earth agree about anything you ask for, it will be done for you by my Father in heaven."
  }
];

const expandedBibleQuotes = bibleQuotes.concat([
  {
    category: "Eternal Life",
    source: "Bible (A) / Jn 8:51",
    text: "I tell you the truth, if anyone keeps my word, he will never see death."
  },
  {
    category: "Salvation",
    source: "Bible (A) / Lk 2:30-32",
    text: "For my eyes have seen your salvation, which you have prepared in the sight of all people, a light for revelation to the Gentiles."
  },
  {
    category: "Eternal Life",
    source: "Bible (A) / 1 Jn 2:15-17",
    text: "Do not love the world or anything in the world. The world and its desires pass away, but the man who does the will of God lives forever."
  },
  {
    category: "Love",
    source: "Bible (A) / 1 Jn 3:14-15",
    text: "We know that we have passed from death to life, because we love our brothers. Anyone who does not love remains in death."
  },
  {
    category: "Eternal Life",
    source: "Bible (A) / Jn 17:3",
    text: "Now this is eternal life: that they may know you, the only true God, and Jesus Christ, whom you have sent."
  },
  {
    category: "Salvation",
    source: "Bible (A) / 2 Tim 3:15",
    text: "The holy Scriptures are able to make you wise for salvation through faith in Christ Jesus."
  },
  {
    category: "Judgment",
    source: "Bible (A) / Prov 20:8",
    text: "When a king sits on his throne to judge, he winnows out all evil with his eyes."
  },
  {
    category: "Judgment",
    source: "Bible (A) / Jn 5:22-23",
    text: "The Father judges no one, but has entrusted all judgment to the Son, that all may honor the Son just as they honor the Father."
  },
  {
    category: "Judgment",
    source: "Bible (A) / Jn 12:47-48",
    text: "I did not come to judge the world, but to save it. There is a judge for the one who rejects me and does not accept my words."
  },
  {
    category: "Judgment",
    source: "Bible (A) / Jas 4:12",
    text: "There is only one Lawgiver and Judge, the one who is able to save and destroy."
  },
  {
    category: "Judgment",
    source: "Bible (A) / Heb 10:30-31",
    text: "The Lord will judge his people. It is a dreadful thing to fall into the hands of the living God."
  },
  {
    category: "Judgment",
    source: "Bible (A) / 1 Pt 4:17",
    text: "It is time for judgment to begin with the family of God."
  },
  {
    category: "Judgment",
    source: "Bible (A) / 2 Cor 5:10",
    text: "We must all appear before the judgment seat of Christ, that each one may receive what is due him for the things done while in the body."
  },
  {
    category: "Judgment",
    source: "Bible (A) / Mt 7:1-2",
    text: "Do not judge, or you too will be judged. For in the same way you judge others, you will be judged."
  },
  {
    category: "Judgment",
    source: "Bible (A) / Rom 14:12-13",
    text: "Each of us will give an account of himself to God. Therefore let us stop passing judgment on one another."
  },
  {
    category: "Faith",
    source: "Bible (A) / Heb 11:1",
    text: "Now faith is being sure of what we hope for and certain of what we do not see."
  },
  {
    category: "Faith",
    source: "Bible (A) / Heb 11:6",
    text: "Without faith it is impossible to please God, because anyone who comes to him must believe that he exists."
  },
  {
    category: "Faith",
    source: "Bible (A) / Heb 10:38-39",
    text: "My righteous one will live by faith. But we are not of those who shrink back and are destroyed, but of those who believe and are saved."
  },
  {
    category: "Faith",
    source: "Bible (A) / Jn 20:29",
    text: "Because you have seen me, you have believed; blessed are those who have not seen and yet have believed."
  },
  {
    category: "Faith",
    source: "Bible (A) / Rom 4:20-21",
    text: "He did not waver through unbelief regarding the promise of God, but was strengthened in his faith and gave glory to God."
  },
  {
    category: "Faith",
    source: "Bible (A) / Rom 10:17",
    text: "Faith comes from hearing the message, and the message is heard through the word of Christ."
  },
  {
    category: "Faith",
    source: "Bible (A) / Mk 5:34-36",
    text: "Daughter, your faith has healed you. Go in peace and be freed from your suffering. Do not be afraid; just believe."
  },
  {
    category: "Faith",
    source: "Bible (A) / 2 Cor 5:7",
    text: "We live by faith, not by sight."
  },
  {
    category: "Faith",
    source: "Bible (A) / Mt 21:21-22",
    text: "If you have faith and do not doubt, it will be done. If you believe, you will receive whatever you ask for in prayer."
  },
  {
    category: "Faith",
    source: "Bible (A) / 1 Pt 1:8-9",
    text: "Though you have not seen him, you love him; and even though you do not see him now, you believe in him."
  },
  {
    category: "Word",
    source: "Bible (A) / Jn 1:1",
    text: "In the beginning was the Word, and the Word was with God, and the Word was God."
  },
  {
    category: "Word",
    source: "Bible (A) / Heb 4:12",
    text: "For the word of God is living and active. Sharper than any double-edged sword, it judges the thoughts and attitudes of the heart."
  },
  {
    category: "Word",
    source: "Bible (A) / 2 Tim 3:16-17",
    text: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness."
  },
  {
    category: "Word",
    source: "Bible (A) / Jas 1:21",
    text: "Humbly accept the word planted in you, which can save you."
  },
  {
    category: "Word",
    source: "Bible (A) / Isa 55:10-11",
    text: "My word that goes out from my mouth will not return to me empty, but will accomplish what I desire."
  },
  {
    category: "Word",
    source: "Bible (A) / Psa 119:105",
    text: "Your word is a lamp to my feet and a light for my path."
  },
  {
    category: "Word",
    source: "Bible (A) / Prov 30:5-6",
    text: "Every word of God is flawless; he is a shield to those who take refuge in him. Do not add to his words."
  },
  {
    category: "Word",
    source: "Bible (A) / Dt 8:3",
    text: "Man does not live on bread alone but on every word that comes from the mouth of the LORD."
  },
  {
    category: "Word",
    source: "Bible (A) / Dt 32:47",
    text: "They are not just idle words for you; they are your life."
  },
  {
    category: "Word",
    source: "Bible (A) / Mk 13:31",
    text: "Heaven and earth will pass away, but my words will never pass away."
  },
  {
    category: "Word",
    source: "Bible (A) / Jn 5:24",
    text: "Whoever hears my word and believes him who sent me has eternal life and will not be condemned."
  },
  {
    category: "Word",
    source: "Bible (A) / Jn 8:31-32",
    text: "If you hold to my teaching, you are really my disciples. Then you will know the truth, and the truth will set you free."
  },
  {
    category: "Word",
    source: "Bible (A) / Jn 17:17",
    text: "Sanctify them by the truth; your word is truth."
  },
  {
    category: "Grace",
    source: "Bible (A) / Eph 2:4-9",
    text: "Because of his great love for us, God, who is rich in mercy, made us alive with Christ. It is by grace you have been saved."
  },
  {
    category: "Grace",
    source: "Bible (A) / Rom 11:5-6",
    text: "At the present time there is a remnant chosen by grace. And if by grace, then it is no longer by works."
  },
  {
    category: "Grace",
    source: "Bible (A) / Titus 2:11-14",
    text: "The grace of God that brings salvation has appeared to all men. It teaches us to say no to ungodliness and worldly passions."
  },
  {
    category: "Grace",
    source: "Bible (A) / 1 Pt 5:12",
    text: "This is the true grace of God. Stand fast in it."
  }
]);

const completeBibleQuotes = expandedBibleQuotes.concat([
  {
    category: "Love",
    source: "Bible (A) / Mt 22:36-40",
    text: "Love the Lord your God with all your heart and with all your soul and with all your mind. Love your neighbor as yourself."
  },
  {
    category: "Repentance",
    source: "Bible (A) / Rom 2:4-6",
    text: "God's kindness leads you toward repentance. Because of your stubbornness and your unrepentant heart, you are storing up wrath against yourself."
  },
  {
    category: "Repentance",
    source: "Bible (A) / Isa 30:15",
    text: "In repentance and rest is your salvation, in quietness and trust is your strength."
  },
  {
    category: "Repentance",
    source: "Bible (A) / Hos 5:15",
    text: "Then I will go back to my place until they admit their guilt. And they will seek my face; in their misery they will earnestly seek me."
  },
  {
    category: "Repentance",
    source: "Bible (A) / 2 Cor 7:10-11",
    text: "Godly sorrow brings repentance that leads to salvation and leaves no regret, but worldly sorrow brings death."
  },
  {
    category: "Repentance",
    source: "Bible (A) / 2 Tim 2:24-26",
    text: "Those who oppose him he must gently instruct, in the hope that God will grant them repentance leading them to a knowledge of the truth."
  },
  {
    category: "Repentance",
    source: "Bible (A) / Psa 32:5",
    text: "Then I acknowledged my sin to you and did not cover up my iniquity. And you forgave the guilt of my sin."
  },
  {
    category: "Repentance",
    source: "Bible (A) / Psa 51:16-17",
    text: "The sacrifices of God are a broken spirit; a broken and contrite heart, O God, you will not despise."
  },
  {
    category: "Repentance",
    source: "Bible (A) / Prov 28:13",
    text: "He who conceals his sins does not prosper, but whoever confesses and renounces them finds mercy."
  },
  {
    category: "Repentance",
    source: "Bible (A) / Jer 15:19",
    text: "If you repent, I will restore you that you may serve me; if you utter worthy, not worthless, words, you will be my spokesman."
  },
  {
    category: "Repentance",
    source: "Bible (A) / Eze 18:21-23",
    text: "If a wicked man turns away from all the sins he has committed and keeps all my decrees, he will surely live; he will not die."
  },
  {
    category: "Repentance",
    source: "Bible (A) / Eze 18:30-31",
    text: "Repent! Turn away from all your offenses; then sin will not be your downfall. Get a new heart and a new spirit."
  },
  {
    category: "Repentance",
    source: "Bible (A) / Joel 2:12-13",
    text: "Return to me with all your heart, with fasting and weeping and mourning. Rend your heart and not your garments."
  },
  {
    category: "Repentance",
    source: "Bible (A) / Jonah 3:5-10",
    text: "The Ninevites believed God. When God saw what they did and how they turned from their evil ways, he had compassion."
  },
  {
    category: "Repentance",
    source: "Bible (A) / Zech 1:3-4",
    text: "Return to me, declares the LORD Almighty, and I will return to you. Turn from your evil ways and your evil practices."
  },
  {
    category: "Repentance",
    source: "Bible (A) / 2 Chron 7:14",
    text: "If my people will humble themselves and pray and seek my face and turn from their wicked ways, then will I hear from heaven."
  },
  {
    category: "Repentance",
    source: "Bible (A) / Lk 15:7",
    text: "There will be more rejoicing in heaven over one sinner who repents than over ninety-nine righteous persons who do not need to repent."
  },
  {
    category: "Repentance",
    source: "Bible (A) / Lk 13:3",
    text: "Unless you repent, you too will all perish."
  },
  {
    category: "Repentance",
    source: "Bible (A) / Acts 3:19-21",
    text: "Repent, then, and turn to God, so that your sins may be wiped out, that times of refreshing may come from the Lord."
  },
  {
    category: "Repentance",
    source: "Bible (A) / 2 Pt 3:8-9",
    text: "The Lord is patient with you, not wanting anyone to perish, but everyone to come to repentance."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Dt 6:24-25",
    text: "If we are careful to obey all this law before the LORD our God, as he has commanded us, that will be our righteousness."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Rom 2:13",
    text: "It is not those who hear the law who are righteous in God's sight, but it is those who obey the law who will be declared righteous."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Rom 10:1-4",
    text: "Since they did not know the righteousness that comes from God and sought to establish their own, they did not submit to God's righteousness."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Gn 15:6",
    text: "Abram believed the LORD, and he credited it to him as righteousness."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Psa 15:1-5",
    text: "He whose walk is blameless and who does what is righteous, who speaks the truth from his heart, will never be shaken."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Psa 34:15-20",
    text: "The eyes of the LORD are on the righteous and his ears are attentive to their cry. A righteous man may have many troubles, but the LORD delivers him from them all."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Psa 37:28-31",
    text: "The LORD loves the just and will not forsake his faithful ones. The law of his God is in his heart; his feet do not slip."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Psa 37:39-40",
    text: "The salvation of the righteous comes from the LORD; he is their stronghold in time of trouble."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Prov 10:25",
    text: "When the storm has swept by, the wicked are gone, but the righteous stand firm forever."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Prov 11:4-6",
    text: "Wealth is worthless in the day of wrath, but righteousness delivers from death. The righteousness of the upright delivers them."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Prov 12:28",
    text: "In the way of righteousness there is life; along that path is immortality."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Prov 21:21",
    text: "He who pursues righteousness and love finds life, prosperity and honor."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Prov 28:1",
    text: "The wicked man flees though no one pursues, but the righteous are as bold as a lion."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Psa 92:12-15",
    text: "The righteous will flourish like a palm tree; they will still bear fruit in old age, they will stay fresh and green."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Zeph 2:3",
    text: "Seek the LORD, all you humble of the land, you who do what he commands. Seek righteousness, seek humility."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / 1 Tim 6:11-12",
    text: "Flee from all this, and pursue righteousness, godliness, faith, love, endurance and gentleness. Fight the good fight of the faith."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Eph 5:8-10",
    text: "Live as children of light, for the fruit of the light consists in all goodness, righteousness and truth."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Heb 12:10-11",
    text: "God disciplines us for our good, that we may share in his holiness. Later on, it produces a harvest of righteousness and peace."
  },
  {
    category: "Righteousness",
    source: "Bible (A) / Jas 2:21-24",
    text: "His faith and his actions were working together, and his faith was made complete by what he did."
  },
  {
    category: "Seeking God",
    source: "Bible (A) / Psa 24:3-6",
    text: "Who may ascend the hill of the LORD? He who has clean hands and a pure heart. Such is the generation of those who seek him."
  },
  {
    category: "Seeking God",
    source: "Bible (A) / Jer 33:3",
    text: "Call to me and I will answer you and tell you great and unsearchable things you do not know."
  },
  {
    category: "Seeking God",
    source: "Bible (A) / Prov 28:5",
    text: "Evil men do not understand justice, but those who seek the LORD understand it fully."
  },
  {
    category: "Seeking God",
    source: "Bible (A) / Lam 3:24-26",
    text: "The LORD is good to those whose hope is in him, to the one who seeks him."
  },
  {
    category: "Seeking God",
    source: "Bible (A) / Psa 34:4-6",
    text: "I sought the LORD, and he answered me; he delivered me from all my fears."
  },
  {
    category: "Seeking God",
    source: "Bible (A) / Psa 145:18",
    text: "The LORD is near to all who call on him, to all who call on him in truth."
  },
  {
    category: "Seeking God",
    source: "Bible (A) / 1 Chron 28:9",
    text: "If you seek him, he will be found by you; but if you forsake him, he will reject you forever."
  },
  {
    category: "Seeking God",
    source: "Bible (A) / Mt 6:33",
    text: "Seek first his kingdom and his righteousness, and all these things will be given to you as well."
  },
  {
    category: "Seeking God",
    source: "Bible (A) / Lk 11:9-10",
    text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you."
  },
  {
    category: "Seeking God",
    source: "Bible (A) / Lk 12:29-31",
    text: "Do not set your heart on what you will eat or drink; do not worry about it. But seek his kingdom, and these things will be given to you as well."
  },
  {
    category: "Understanding",
    source: "Bible (A) / Mt 16:16-17",
    text: "You are the Christ, the Son of the living God. This was not revealed to you by man, but by my Father in heaven."
  },
  {
    category: "Understanding",
    source: "Bible (A) / Mk 8:17-21",
    text: "Do you still not see or understand? Are your hearts hardened? Do you have eyes but fail to see, and ears but fail to hear?"
  },
  {
    category: "Understanding",
    source: "Bible (A) / Lk 24:30-32",
    text: "Then their eyes were opened and they recognized him. Were not our hearts burning within us while he opened the Scriptures to us?"
  },
  {
    category: "Understanding",
    source: "Bible (A) / Dt 29:2-4",
    text: "With your own eyes you saw those great trials, those miraculous signs and great wonders. But to this day the LORD has not given you a mind that understands."
  },
  {
    category: "Understanding",
    source: "Bible (A) / Dn 12:9-10",
    text: "The words are closed up and sealed until the time of the end. None of the wicked will understand, but those who are wise will understand."
  },
  {
    category: "Understanding",
    source: "Bible (A) / Eph 4:14-18",
    text: "They are darkened in their understanding and separated from the life of God because of the ignorance that is in them."
  },
  {
    category: "Understanding",
    source: "Bible (A) / Hos 4:6",
    text: "My people are destroyed from lack of knowledge. Because you have rejected knowledge, I also reject you as my priests."
  },
  {
    category: "Understanding",
    source: "Bible (A) / Isa 5:13",
    text: "Therefore my people will go into exile for lack of understanding."
  },
  {
    category: "Understanding",
    source: "Bible (A) / Mt 22:29",
    text: "You are in error because you do not know the Scriptures or the power of God."
  },
  {
    category: "Understanding",
    source: "Bible (A) / Lk 19:41-44",
    text: "If you had only known on this day what would bring you peace, but now it is hidden from your eyes."
  },
  {
    category: "Baptism",
    source: "Bible (A) / Mt 3:11-12",
    text: "I baptize you with water for repentance. But after me will come one who is more powerful than I. He will baptize you with the Holy Spirit and with fire."
  },
  {
    category: "Baptism",
    source: "Bible (A) / 1 Pt 3:18-22",
    text: "This water symbolizes baptism that now saves you also, not the removal of dirt from the body but the pledge of a good conscience toward God."
  },
  {
    category: "Beatitudes",
    source: "Bible (A) / Mt 5:3-12",
    text: "Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are the pure in heart, for they will see God."
  },
  {
    category: "Beatitudes",
    source: "Bible (A) / Mt 5:6-10",
    text: "Blessed are those who hunger and thirst for righteousness, for they will be filled. Blessed are the peacemakers, for they will be called sons of God."
  }
]);

function quoteKey(quote) {
  return `${quote.category}:${quote.source}:${quote.text}`;
}

function sentencePieces(text) {
  const normalized = text.replace(/\s+/g, " ").trim();
  return (normalized.match(/[^.!?。]+[.!?。]?/g) || [normalized])
    .map((part) => part.trim())
    .filter((part) => part.length >= 28 && part.length <= 240);
}

function buildLargeQuotePool(items) {
  const seen = new Set(items.map(quoteKey));
  const excerpts = [];

  items.forEach((quote) => {
    const sentences = sentencePieces(quote.text);

    sentences.forEach((sentence, index) => {
      const excerpt = {
        category: quote.category,
        source: `${quote.source} / excerpt ${index + 1}`,
        text: sentence
      };
      const key = quoteKey(excerpt);

      if (!seen.has(key)) {
        seen.add(key);
        excerpts.push(excerpt);
      }
    });

    for (let index = 0; index < sentences.length - 1; index += 1) {
      const combined = `${sentences[index]} ${sentences[index + 1]}`;

      if (combined.length >= 80 && combined.length <= 280) {
        const excerpt = {
          category: quote.category,
          source: `${quote.source} / excerpt ${index + 1}-${index + 2}`,
          text: combined
        };
        const key = quoteKey(excerpt);

        if (!seen.has(key)) {
          seen.add(key);
          excerpts.push(excerpt);
        }
      }
    }
  });

  return items.concat(excerpts);
}

const jssQuoteLibrary = buildLargeQuotePool(expandedJssQuotes);
const heavenlyYeastQuoteLibrary = buildLargeQuotePool(expandedHeavenlyYeastQuotes);
const bibleQuoteLibrary = buildLargeQuotePool(completeBibleQuotes);

function cleanSourceTopic(source) {
  return source
    .replace(/ \/ excerpt .+$/, "")
    .replace(/^Heavenly Yeast \/ /, "")
    .replace(/^Bible \(A\) \/ /, "")
    .replace(/^JSS Category$/, "JSS")
    .trim();
}

function jssTheme(quote) {
  const rules = [
    ["새 언약", "New Covenant"],
    ["계시록", "Revelation"],
    ["12지파", "12 Tribes"],
    ["추수", "Harvest"],
    ["인치", "Sealing"],
    ["천국", "Heaven"],
    ["영생", "Eternal Life"],
    ["구원", "Salvation"],
    ["예수님의 피", "Jesus' Blood"],
    ["피", "Blood"],
    ["예수님", "Jesus"],
    ["말씀", "Word"],
    ["진리", "Truth"],
    ["거짓", "Lies"],
    ["마귀", "Devil"],
    ["전쟁", "War"],
    ["이긴", "Victory"],
    ["회개", "Repentance"],
    ["약속의 목자", "Promised Pastor"],
    ["새요한", "New John"],
    ["씨", "Seed"],
    ["빛", "Light"],
    ["생명", "Life"],
    ["재창조", "Recreation"],
    ["창조", "Creation"],
    ["심판", "Judgment"],
    ["신천지", "SCJ"],
    ["하나님", "God"]
  ];
  const match = rules.find(([keyword]) => quote.text.includes(keyword));

  return match ? match[1] : cleanSourceTopic(quote.source);
}

function bibleBook(quote) {
  return cleanSourceTopic(quote.source).replace(/\s+\d.*$/, "");
}

function heavenlyYeastTopic(quote) {
  const sourceTopic = cleanSourceTopic(quote.source);
  const sourceRules = [
    ["Worry, God will provide", "Provision"],
    ["Know yourself", "Know Yourself"],
    ["Important test question", "Faith Test"],
    ["Voyager Sailing Towards Heaven", "Voyager"],
    ["How can we do the will of God?", "God's Will"],
    ["How can we receive help from God?", "God's Help"],
    ["How to greet God", "Greet God"],
    ["Who has right to be God's child?", "God's Child"],
    ["What does it mean to go to our hometown?", "Hometown"],
    ["Is heaven and eternal life freely given?", "Eternal Life"],
    ["Thinking that no one will see", "Integrity"],
    ["Hating God, God hating", "Worldliness"],
    ["How not to get thrown out by God", "Staying in Word"],
    ["What does it mean to wash our robes?", "Washing Robes"],
    ["Why should the world know God?", "Know God"],
    ["Mindset of an appointed worker", "Appointed Worker"],
    ["What doing whatever you want means", "God's Will"],
    ["Highlights", "Highlights"],
    ["Important", "Important"]
  ];
  const sourceMatch = sourceRules.find(([source]) => sourceTopic === source);

  return sourceMatch ? sourceMatch[1] : sourceTopic;
}

function heavenlyYeastTheme(quote) {
  const text = quote.text.toLocaleLowerCase();
  const rules = [
    ["기도", "Prayer"],
    ["pray", "Prayer"],
    ["heaven", "Heaven"],
    ["천국", "Heaven"],
    ["eternal", "Eternal Life"],
    ["영생", "Eternal Life"],
    ["word", "Word"],
    ["말씀", "Word"],
    ["faith", "Faith"],
    ["믿", "Faith"],
    ["heart", "Heart"],
    ["마음", "Heart"],
    ["god", "God"],
    ["하나님", "God"],
    ["lord", "Lord"],
    ["예수", "Jesus"],
    ["truth", "Truth"],
    ["진리", "Truth"],
    ["world", "World"],
    ["세상", "World"],
    ["duty", "Duty"],
    ["사명", "Mission"],
    ["public", "Public Mind"],
    ["love", "Love"],
    ["사랑", "Love"],
    ["sin", "Sin"],
    ["죄", "Sin"],
    ["wisdom", "Wisdom"],
    ["지혜", "Wisdom"],
    ["create", "Creation"],
    ["창조", "Creation"]
  ];
  const match = rules.find(([keyword]) => text.includes(keyword));

  return match ? match[1] : quote.category;
}

function withDetailedCategories(items, collectionKey) {
  return items.map((quote) => {
    if (collectionKey === "jss") {
      return {
        ...quote,
        category: `${quote.category} / ${jssTheme(quote)}`
      };
    }

    if (collectionKey === "heavenlyYeast") {
      return {
        ...quote,
        category: `${heavenlyYeastTopic(quote)} / ${heavenlyYeastTheme(quote)}`
      };
    }

    return {
      ...quote,
      category: `${quote.category} / ${bibleBook(quote)}`
    };
  });
}

const categorizedJssQuoteLibrary = withDetailedCategories(jssQuoteLibrary, "jss");
const categorizedHeavenlyYeastQuoteLibrary = withDetailedCategories(heavenlyYeastQuoteLibrary, "heavenlyYeast");
const categorizedBibleQuoteLibrary = withDetailedCategories(bibleQuoteLibrary, "bible");

const collections = {
  jss: {
    copyLabel: "JSS Quotes",
    issueTitle: "Random JSS Quotes",
    sourceTitle: "JSS dashboard sources",
    storageKey: "jss-dispatch-shown-quotes-v6",
    sourceStorageKey: "jss-dispatch-shown-sources-v1",
    quotes: categorizedJssQuoteLibrary
  },
  heavenlyYeast: {
    copyLabel: "Heavenly Yeast Quotes",
    issueTitle: "Random Heavenly Yeast Quotes",
    sourceTitle: "Heavenly Yeast dashboard sources",
    storageKey: "heavenly-yeast-shown-quotes-v4",
    sourceStorageKey: "heavenly-yeast-shown-sources-v1",
    quotes: categorizedHeavenlyYeastQuoteLibrary
  },
  bible: {
    copyLabel: "Bible Quotes",
    issueTitle: "Random Bible Quotes",
    sourceTitle: "Bible (A) dashboard sources",
    storageKey: "bible-quotes-shown-v2",
    sourceStorageKey: "bible-quotes-shown-sources-v1",
    quotes: categorizedBibleQuoteLibrary
  }
};

const quoteGrid = document.querySelector("#quoteGrid");
const template = document.querySelector("#quoteTemplate");
const categoryPills = document.querySelector("#categoryPills");
const categoryCount = document.querySelector("#categoryCount");
const categoryStrip = document.querySelector("#categoryStrip");
const categoryToggle = document.querySelector("#categoryToggle");
const issueDate = document.querySelector("#issueDate");
const generateBtn = document.querySelector("#generateBtn");
const shuffleTop = document.querySelector("#shuffleTop");
const copyBtn = document.querySelector("#copyBtn");
const clearSavedBtn = document.querySelector("#clearSavedBtn");
const savedList = document.querySelector("#savedList");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const clearSearchBtn = document.querySelector("#clearSearchBtn");
const searchPanel = document.querySelector("#searchPanel");
const searchResults = document.querySelector("#searchResults");
const searchCount = document.querySelector("#searchCount");
const quotesView = document.querySelector("#quotesView");
const searchView = document.querySelector("#searchView");
const savedView = document.querySelector("#savedView");
const quotesViewBtn = document.querySelector("#quotesViewBtn");
const searchViewBtn = document.querySelector("#searchViewBtn");
const savedViewBtn = document.querySelector("#savedViewBtn");
const pageTitle = document.querySelector("#pageTitle");
const issueTitle = document.querySelector("#issueTitle");
const sourceTitle = document.querySelector("#sourceTitle");
const tabButtons = document.querySelectorAll("[data-collection]");
const savedQuotesStorageKey = "words-of-the-day-saved-quotes-v1";

let activeCollectionKey = "jss";
let activeView = "quotes";
let categoriesExpanded = false;

function activeCollection() {
  return collections[activeCollectionKey];
}

function uniqueCategories(items = activeCollection().quotes) {
  return [...new Set(items.map((quote) => quote.category))];
}

function pickIssue() {
  const collection = activeCollection();
  let shownIds = getShownQuoteIds(collection.storageKey);
  let shownSources = getShownQuoteIds(collection.sourceStorageKey);
  let availableQuotes = collection.quotes.filter(
    (quote) => !shownIds.includes(quoteId(quote)) && !shownSources.includes(baseSourceId(quote))
  );

  if (uniqueCategoryCount(availableQuotes) < 5) {
    shownSources = [];
    availableQuotes = collection.quotes.filter((quote) => !shownIds.includes(quoteId(quote)));
  }

  if (uniqueCategoryCount(availableQuotes) < 5) {
    shownIds = [];
    shownSources = [];
    availableQuotes = [...collection.quotes];
  }

  const selected = [];
  const categoryPool = shuffle(uniqueCategories(availableQuotes));

  categoryPool.slice(0, 5).forEach((category) => {
    const options = availableQuotes.filter((quote) => quote.category === category);
    selected.push(shuffle(options)[0]);
  });

  saveShownQuoteIds(collection.storageKey, [...shownIds, ...selected.map(quoteId)]);
  saveShownQuoteIds(collection.sourceStorageKey, [...shownSources, ...selected.map(baseSourceId)]);
  return selected;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function quoteId(quote) {
  return quoteKey(quote);
}

function baseSourceId(quote) {
  return quote.source.replace(/ \/ excerpt .+$/, "");
}

function getShownQuoteIds(storageKey) {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch {
    return [];
  }
}

function saveShownQuoteIds(storageKey, ids) {
  localStorage.setItem(storageKey, JSON.stringify([...new Set(ids)]));
}

function getSavedQuotes() {
  try {
    return JSON.parse(localStorage.getItem(savedQuotesStorageKey)) || [];
  } catch {
    return [];
  }
}

function saveSavedQuotes(savedQuotes) {
  localStorage.setItem(savedQuotesStorageKey, JSON.stringify(savedQuotes));
}

function isQuoteSaved(quote) {
  const id = quoteId(quote);
  return getSavedQuotes().some((savedQuote) => savedQuote.id === id);
}

function toggleSavedQuote(quote, collectionLabel = activeCollection().copyLabel) {
  const id = quoteId(quote);
  const savedQuotes = getSavedQuotes();
  const existingIndex = savedQuotes.findIndex((savedQuote) => savedQuote.id === id);

  if (existingIndex >= 0) {
    savedQuotes.splice(existingIndex, 1);
  } else {
    savedQuotes.unshift({
      id,
      collection: collectionLabel,
      category: quote.category,
      source: quote.source,
      text: quote.text,
      savedAt: new Date().toISOString()
    });
  }

  saveSavedQuotes(savedQuotes);
  renderSavedQuotes();
  renderQuotes(window.currentIssue || []);
  renderSearchResults(searchInput.value);
}

function uniqueCategoryCount(items) {
  return new Set(items.map((quote) => quote.category)).size;
}

function renderQuotes(selectedQuotes) {
  quoteGrid.replaceChildren();

  selectedQuotes.forEach((quote) => {
    const card = template.content.cloneNode(true);
    const saveButton = card.querySelector(".save-quote");
    card.querySelector(".category").textContent = quote.category;
    card.querySelector(".source").textContent = quote.source;
    card.querySelector("blockquote").textContent = quote.text;
    saveButton.textContent = isQuoteSaved(quote) ? "Saved" : "Save";
    saveButton.classList.toggle("saved", isQuoteSaved(quote));
    saveButton.setAttribute("aria-label", `${saveButton.textContent} quote`);
    saveButton.addEventListener("click", () => toggleSavedQuote(quote));
    quoteGrid.appendChild(card);
  });
}

function renderSavedQuotes() {
  const savedQuotes = getSavedQuotes();
  savedList.replaceChildren();

  if (savedQuotes.length === 0) {
    const empty = document.createElement("p");
    empty.className = "saved-empty";
    empty.textContent = "Saved quotes will appear here.";
    savedList.appendChild(empty);
    clearSavedBtn.hidden = true;
    return;
  }

  clearSavedBtn.hidden = false;
  savedQuotes.forEach((quote) => {
    const item = document.createElement("article");
    item.className = "saved-item";

    const top = document.createElement("div");
    top.className = "saved-item-top";

    const label = document.createElement("span");
    label.textContent = `${quote.collection} · ${quote.category}`;

    const removeButton = document.createElement("button");
    removeButton.className = "remove-saved";
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      saveSavedQuotes(getSavedQuotes().filter((savedQuote) => savedQuote.id !== quote.id));
      renderSavedQuotes();
      renderQuotes(window.currentIssue || []);
    });

    const text = document.createElement("p");
    text.textContent = quote.text;

    top.append(label, removeButton);
    item.append(top, text);
    savedList.appendChild(item);
  });
}

function allSearchableQuotes() {
  return Object.values(collections).flatMap((collection) =>
    collection.quotes.map((quote) => ({
      ...quote,
      collectionLabel: collection.copyLabel
    }))
  );
}

function normalizeSearchText(value) {
  return value.toLocaleLowerCase().replace(/\s+/g, " ").trim();
}

function quoteMatchesSearch(quote, query) {
  const normalizedQuery = normalizeSearchText(query);
  const terms = normalizedQuery.split(" ").filter(Boolean);
  const searchable = normalizeSearchText(
    `${quote.collectionLabel} ${quote.category} ${quote.source} ${quote.text}`
  );

  return searchable.includes(normalizedQuery) || terms.every((term) => searchable.includes(term));
}

function searchTerms(query) {
  const normalizedQuery = normalizeSearchText(query);
  const terms = normalizedQuery.split(" ").filter(Boolean);
  return [normalizedQuery, ...terms]
    .filter((term) => term.length > 1)
    .sort((a, b) => b.length - a.length);
}

function appendHighlightedText(element, text, terms) {
  element.replaceChildren();

  if (terms.length === 0) {
    element.textContent = text;
    return;
  }

  const normalizedText = text.toLocaleLowerCase();
  let cursor = 0;

  while (cursor < text.length) {
    let nextMatch = null;

    terms.forEach((term) => {
      const index = normalizedText.indexOf(term.toLocaleLowerCase(), cursor);
      if (index >= 0 && (!nextMatch || index < nextMatch.index || term.length > nextMatch.term.length)) {
        nextMatch = { index, term };
      }
    });

    if (!nextMatch) {
      element.appendChild(document.createTextNode(text.slice(cursor)));
      break;
    }

    if (nextMatch.index > cursor) {
      element.appendChild(document.createTextNode(text.slice(cursor, nextMatch.index)));
    }

    const mark = document.createElement("mark");
    mark.className = "search-highlight";
    mark.textContent = text.slice(nextMatch.index, nextMatch.index + nextMatch.term.length);
    element.appendChild(mark);
    cursor = nextMatch.index + nextMatch.term.length;
  }
}

function renderSearchResults(query) {
  const normalizedQuery = normalizeSearchText(query);
  const terms = searchTerms(query);
  searchResults.replaceChildren();

  if (!normalizedQuery) {
    searchResults.hidden = true;
    clearSearchBtn.hidden = true;
    searchCount.textContent = "0 matches";
    return;
  }

  const matches = allSearchableQuotes().filter((quote) => quoteMatchesSearch(quote, normalizedQuery));
  searchPanel.hidden = false;
  searchResults.hidden = false;
  clearSearchBtn.hidden = false;
  searchCount.textContent = `${matches.length} ${matches.length === 1 ? "match" : "matches"}`;

  if (matches.length === 0) {
    const empty = document.createElement("p");
    empty.className = "saved-empty";
    empty.textContent = "No matching quotes found.";
    searchResults.appendChild(empty);
    return;
  }

  matches.slice(0, 80).forEach((quote) => {
    const item = document.createElement("article");
    item.className = "saved-item";

    const top = document.createElement("div");
    top.className = "saved-item-top";

    const label = document.createElement("span");
    appendHighlightedText(label, `${quote.collectionLabel} · ${quote.category}`, terms);

    const source = document.createElement("small");
    appendHighlightedText(source, quote.source, terms);
    label.appendChild(source);

    const saveButton = document.createElement("button");
    saveButton.className = "remove-saved";
    saveButton.type = "button";
    saveButton.textContent = isQuoteSaved(quote) ? "Saved" : "Save";
    saveButton.addEventListener("click", () => toggleSavedQuote(quote, quote.collectionLabel));

    const text = document.createElement("p");
    appendHighlightedText(text, quote.text, terms);

    top.append(label, saveButton);
    item.append(top, text);
    searchResults.appendChild(item);
  });
}

function renderCategories() {
  const categories = uniqueCategories();
  categoryCount.textContent = `${categories.length} categories`;
  categoryToggle.textContent = categoriesExpanded
    ? "Hide categories"
    : `Show ${categories.length} categories`;
  categoryToggle.setAttribute("aria-expanded", String(categoriesExpanded));
  categoryStrip.classList.toggle("is-collapsed", !categoriesExpanded);
  categoryPills.replaceChildren(
    ...categories.map((category) => {
      const pill = document.createElement("span");
      pill.textContent = category;
      return pill;
    })
  );
}

function refreshIssue() {
  const selected = pickIssue();
  renderQuotes(selected);
  window.currentIssue = selected;
}

function renderCollectionFrame() {
  const collection = activeCollection();
  if (activeView === "quotes") {
    pageTitle.textContent = collection.copyLabel;
  }
  issueTitle.textContent = collection.issueTitle;
  sourceTitle.textContent = collection.sourceTitle;

  tabButtons.forEach((button) => {
    const isActive = button.dataset.collection === activeCollectionKey;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  renderCategories();
  renderSavedQuotes();
  refreshIssue();
}

function switchView(viewName) {
  activeView = viewName;
  const isQuotesView = activeView === "quotes";
  const isSearchView = activeView === "search";
  const isSavedView = activeView === "saved";

  quotesView.classList.toggle("active", isQuotesView);
  searchView.classList.toggle("active", isSearchView);
  savedView.classList.toggle("active", isSavedView);
  quotesViewBtn.classList.toggle("active", isQuotesView);
  searchViewBtn.classList.toggle("active", isSearchView);
  savedViewBtn.classList.toggle("active", isSavedView);
  shuffleTop.hidden = !isQuotesView;
  generateBtn.hidden = !isQuotesView;
  copyBtn.hidden = !isQuotesView;
  pageTitle.textContent = isSearchView ? "Search Quotes" : isSavedView ? "Saved Quotes" : activeCollection().copyLabel;

  renderSavedQuotes();
}

function switchCollection(collectionKey) {
  if (!collections[collectionKey] || collectionKey === activeCollectionKey) {
    return;
  }

  activeCollectionKey = collectionKey;
  categoriesExpanded = false;
  renderCollectionFrame();
}

async function copyIssue() {
  const selected = window.currentIssue || [];
  const text = selected
    .map((quote, index) => `${index + 1}. [${quote.category}] ${quote.text}\nSource: ${quote.source}`)
    .join("\n\n");

  try {
    if (!navigator.clipboard) {
      throw new Error("Clipboard API unavailable");
    }
    await navigator.clipboard.writeText(text);
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }

  copyBtn.textContent = "Copied";
  setTimeout(() => {
    copyBtn.textContent = "Copy issue";
  }, 1400);
}

function init() {
  issueDate.textContent = new Intl.DateTimeFormat("en", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date());

  renderCollectionFrame();
}

generateBtn.addEventListener("click", refreshIssue);
shuffleTop.addEventListener("click", refreshIssue);
copyBtn.addEventListener("click", copyIssue);
clearSavedBtn.addEventListener("click", () => {
  saveSavedQuotes([]);
  renderSavedQuotes();
  renderQuotes(window.currentIssue || []);
  renderSearchResults(searchInput.value);
});
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderSearchResults(searchInput.value);
});
searchInput.addEventListener("input", () => renderSearchResults(searchInput.value));
clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  renderSearchResults("");
  searchInput.focus();
});
quotesViewBtn.addEventListener("click", () => switchView("quotes"));
searchViewBtn.addEventListener("click", () => switchView("search"));
savedViewBtn.addEventListener("click", () => switchView("saved"));
categoryToggle.addEventListener("click", () => {
  categoriesExpanded = !categoriesExpanded;
  renderCategories();
});
tabButtons.forEach((button) => {
  button.addEventListener("click", () => switchCollection(button.dataset.collection));
});

window.resetQuoteHistory = () => {
  const collection = activeCollection();
  saveShownQuoteIds(collection.storageKey, []);
  saveShownQuoteIds(collection.sourceStorageKey, []);
  refreshIssue();
};

init();
