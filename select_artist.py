#!/usr/bin/env python3
import random
import json

# 30位候选艺术家池
candidates = [
    {"name": "达芬奇", "en_name": "Leonardo da Vinci", "work": "蒙娜丽莎", "en_work": "Mona Lisa"},
    {"name": "米开朗基罗", "en_name": "Michelangelo", "work": "创世纪", "en_work": "The Creation of Adam"},
    {"name": "拉斐尔", "en_name": "Raphael", "work": "雅典学院", "en_work": "The School of Athens"},
    {"name": "伦勃朗", "en_name": "Rembrandt", "work": "夜巡", "en_work": "The Night Watch"},
    {"name": "维米尔", "en_name": "Johannes Vermeer", "work": "戴珍珠耳环的少女", "en_work": "Girl with a Pearl Earring"},
    {"name": "莫奈", "en_name": "Claude Monet", "work": "睡莲", "en_work": "Water Lilies"},
    {"name": "雷诺阿", "en_name": "Pierre-Auguste Renoir", "work": "煎饼磨坊的舞会", "en_work": "Bal du moulin de la Galette"},
    {"name": "塞尚", "en_name": "Paul Cézanne", "work": "圣维克多山", "en_work": "Mont Sainte-Victoire"},
    {"name": "高更", "en_name": "Paul Gauguin", "work": "我们从哪里来", "en_work": "Where Do We Come From"},
    {"name": "马蒂斯", "en_name": "Henri Matisse", "work": "舞蹈", "en_work": "The Dance"},
    {"name": "蒙克", "en_name": "Edvard Munch", "work": "呐喊", "en_work": "The Scream"},
    {"name": "康定斯基", "en_name": "Wassily Kandinsky", "work": "构成第八号", "en_work": "Composition VIII"},
    {"name": "达利", "en_name": "Salvador Dalí", "work": "记忆的永恒", "en_work": "The Persistence of Memory"},
    {"name": "弗里达", "en_name": "Frida Kahlo", "work": "两个弗里达", "en_work": "The Two Fridas"},
    {"name": "波洛克", "en_name": "Jackson Pollock", "work": "第5号", "en_work": "No. 5, 1948"},
    {"name": "安迪·沃霍尔", "en_name": "Andy Warhol", "work": "玛丽莲·梦露", "en_work": "Marilyn Diptych"},
    {"name": "吴道子", "en_name": "Wu Daozi", "work": "八十七神仙卷", "en_work": "Eighty-Seven Immortals"},
    {"name": "范宽", "en_name": "Fan Kuan", "work": "溪山行旅图", "en_work": "Travelers Among Mountains and Streams"},
    {"name": "张择端", "en_name": "Zhang Zeduan", "work": "清明上河图", "en_work": "Along the River During Qingming Festival"},
    {"name": "赵孟頫", "en_name": "Zhao Mengfu", "work": "鹊华秋色图", "en_work": "Autumn Colors on the Que and Hua Mountains"},
    {"name": "黄公望", "en_name": "Huang Gongwang", "work": "富春山居图", "en_work": "Dwelling in the Fuchun Mountains"},
    {"name": "倪瓒", "en_name": "Ni Zan", "work": "容膝斋图", "en_work": "The Rongxi Studio"},
    {"name": "沈周", "en_name": "Shen Zhou", "work": "庐山高图", "en_work": "Lofty Mount Lu"},
    {"name": "文徵明", "en_name": "Wen Zhengming", "work": "真赏斋图", "en_work": "The Zhenshang Studio"},
    {"name": "唐寅", "en_name": "Tang Yin", "work": "山路松声图", "en_work": "Whispering Pines on the Mountain Path"},
    {"name": "徐渭", "en_name": "Xu Wei", "work": "墨葡萄图", "en_work": "Ink Grapes"},
    {"name": "八大山人", "en_name": "Bada Shanren", "work": "荷石水禽图", "en_work": "Lotus and Ducks"},
    {"name": "郎世宁", "en_name": "Giuseppe Castiglione", "work": "百骏图", "en_work": "One Hundred Horses"},
    {"name": "任伯年", "en_name": "Ren Bonian", "work": "群仙祝寿图", "en_work": "Immortals Celebrating Birthday"},
    {"name": "林风眠", "en_name": "Lin Fengmian", "work": "秋鹜", "en_work": "Wild Geese in Autumn"},
]

# 已生成的艺术家（需要排除）
existing_artists = ["潘天寿", "张大千", "巴勃罗·毕加索", "毕加索", "齐白石", "文森特·梵高", "梵高"]

# 过滤掉已生成的艺术家
available = [c for c in candidates if c["name"] not in existing_artists]

# 随机选择一位
selected = random.choice(available)

print(json.dumps(selected, ensure_ascii=False))
