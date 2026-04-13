#!/usr/bin/env python3
"""
WhiteNote Johnny Decimal 索引生成器
根据 metadata 生成结构化索引
"""

import os
import yaml
import json
from pathlib import Path
from dataclasses import dataclass, asdict
from typing import List, Optional

@dataclass
class Article:
    """文章数据类"""
    johnny_id: str
    title: str
    file_path: str
    quality: str
    depth: int
    literature: int
    difficulty: str
    time: str
    tags: List[str]
    url: str
    
    def to_dict(self):
        return asdict(self)

# Johnny Decimal 分类定义
AREAS = {
    "10": {"name": "道", "desc": "第一性原理", "color": "#8b0000"},
    "20": {"name": "法", "desc": "方法论", "color": "#1a3d36"},
    "30": {"name": "术", "desc": "具体技艺", "color": "#3d4f6b"},
    "40": {"name": "器", "desc": "产出物", "color": "#6b4c7a"},
    "50": {"name": "境", "desc": "语境维度", "color": "#b85c2e"},
    "60": {"name": "脉", "desc": "演变轨迹", "color": "#2d5a50"},
}

# 分类映射
CATEGORY_MAP = {
    # 10 道 - 哲学
    "10.10": {"name": "元认知", "articles": ["philosophy-05-epistemology", "philosophy-06-ontology"]},
    "10.40": {"name": "时间观", "articles": ["philosophy-08-time-philosophy"]},
    
    # 20 法 - 方法论
    "20.10": {"name": "分类学", "articles": ["metadata/tagging-system"]},
    "20.20": {"name": "思维模型", "articles": ["philosophy-07-system-thinking"]},
    "20.40": {"name": "评价体系", "articles": ["metadata/tagging-system"]},
    
    # 30 术 - 技艺
    "30.10": {"name": "创作术", "articles": []},
    "30.30": {"name": "修行术", "articles": ["essays/003-the-art-of-waiting"]},
    "30.40": {"name": "编程术", "articles": ["python-dharma", "byte-alaya"]},
    
    # 40 器 - 产出物
    "40.10": {"name": "科幻小说", "desc": "醒者联盟系列"},
    "40.10.10": {"name": "醒者联盟", "parent": "40.10"},
    "40.20": {"name": "哲学思辨", "desc": "时空与意识"},
    "40.30": {"name": "技术作品", "desc": "代码与佛学"},
    "40.40": {"name": "随笔作品", "desc": "读书笔记与观察"},
    "40.50": {"name": "艺术作品", "desc": "书法与鉴赏"},
    "40.60": {"name": "心法作品", "desc": "修行与心法"},
}

# 具体文章映射
ARTICLE_MAP = {
    # 40.10.10 醒者联盟
    "40.10.10.01": {"file": "novels/batch01/001-信号.md", "title": "信号"},
    "40.10.10.27": {"file": "novels/batch07/027-虚空中的声音.md", "title": "虚空中的声音"},
    "40.10.10.31": {"file": "novels/batch08/031-诗人的陨落.md", "title": "诗人的陨落"},
    "40.10.10.38": {"file": "novels/batch11/038-牺牲与选择.md", "title": "牺牲与选择"},
    
    # 40.30.10 代码与佛学
    "40.30.10.01": {"file": "byte-alaya.md", "title": "字节阿赖耶"},
    "40.30.10.02": {"file": "python-dharma.md", "title": "Python禅机"},
    "40.30.10.03": {"file": "ai-fairy-tale.md", "title": "AI童话"},
    
    # 40.40.10 随笔
    "40.40.10.03": {"file": "essays/003-the-art-of-waiting.md", "title": "The Art of Waiting"},
}

def load_metadata(metadata_dir: str = "docs/metadata") -> List[Article]:
    """加载所有文章元数据"""
    articles = []
    base_path = Path(metadata_dir)
    
    if not base_path.exists():
        print(f"Warning: {metadata_dir} not found")
        return articles
    
    for yaml_file in base_path.rglob("*.yaml"):
        try:
            with open(yaml_file, 'r', encoding='utf-8') as f:
                data = yaml.safe_load(f)
                if data and 'id' in data:
                    # 构建 Johnny ID
                    johnny_id = get_johnny_id(data['id'])
                    
                    article = Article(
                        johnny_id=johnny_id,
                        title=data.get('title', ''),
                        file_path=data.get('file', ''),
                        quality=data.get('ratings', {}).get('quality', 'C'),
                        depth=data.get('ratings', {}).get('depth', 1),
                        literature=data.get('ratings', {}).get('literature', 1),
                        difficulty=data.get('ratings', {}).get('difficulty', '🟢'),
                        time=data.get('ratings', {}).get('time', '☕'),
                        tags=data.get('tags', {}).get('category', []) + 
                             data.get('tags', {}).get('themes', []) + 
                             data.get('tags', {}).get('features', []),
                        url=get_url_from_file(data.get('file', ''))
                    )
                    articles.append(article)
        except Exception as e:
            print(f"Error loading {yaml_file}: {e}")
    
    return articles

def get_johnny_id(original_id: str) -> str:
    """将原始ID转换为 Johnny Decimal ID"""
    # 根据已知的映射关系转换
    mapping = {
        "novels-batch11-038": "40.10.10.38",
        "novels-batch08-031": "40.10.10.31",
        "novels-batch07-027": "40.10.10.27",
        "byte-alaya": "40.30.10.01",
        "python-dharma": "40.30.10.02",
        "essays-003-waiting": "40.40.10.03",
    }
    return mapping.get(original_id, "40.99.99.99")

def get_url_from_file(file_path: str) -> str:
    """从文件路径生成URL"""
    if not file_path:
        return ""
    # 移除 docs/ 前缀和 .md 后缀
    url = file_path.replace("docs/", "").replace(".md", ".html")
    return f"/whitenote/{url}"

def generate_json_index(articles: List[Article], output_file: str = "docs/public/johnny-index.json"):
    """生成 JSON 格式的索引"""
    index = {
        "areas": AREAS,
        "categories": CATEGORY_MAP,
        "articles": [a.to_dict() for a in articles]
    }
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(index, f, ensure_ascii=False, indent=2)
    
    print(f"Generated: {output_file}")

def generate_markdown_index(articles: List[Article], output_file: str = "docs/system/johnny-index.md"):
    """生成 Markdown 格式的索引"""
    md = """# WhiteNote Johnny Decimal 索引

> 自动生成于系统  
> 器(40) 层级文章列表

---

"""
    
    # 按 Johnny ID 排序
    articles_sorted = sorted(articles, key=lambda x: x.johnny_id)
    
    # 按层级分组
    current_area = ""
    current_cat = ""
    
    for article in articles_sorted:
        area_code = article.johnny_id[:2]
        cat_code = article.johnny_id[:5] if len(article.johnny_id) >= 5 else article.johnny_id
        
        # 区域标题
        if area_code != current_area and area_code in AREAS:
            area = AREAS[area_code]
            md += f"\n## {area_code} {area['name']} - {area['desc']}\n\n"
            current_area = area_code
            current_cat = ""
        
        # 分类标题
        if cat_code != current_cat and cat_code in CATEGORY_MAP:
            cat = CATEGORY_MAP[cat_code]
            md += f"\n### {cat_code} {cat['name']}\n\n"
            if 'desc' in cat:
                md += f"> {cat['desc']}\n\n"
            current_cat = cat_code
        
        # 文章条目
        stars = "⭐" * article.depth
        md += f"- **{article.johnny_id}** [{article.title}]({article.url}) "
        md += f"`{article.quality}` {stars} {article.difficulty}{article.time}\n"
    
    md += "\n---\n\n*本索引由系统自动生成*\n"
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(md)
    
    print(f"Generated: {output_file}")

def main():
    """主函数"""
    print("WhiteNote Johnny Decimal 索引生成器")
    print("=" * 50)
    
    # 加载元数据
    articles = load_metadata()
    print(f"\nLoaded {len(articles)} articles")
    
    # 生成索引
    if articles:
        generate_json_index(articles)
        generate_markdown_index(articles)
        print("\n✅ 索引生成完成")
    else:
        print("\n⚠️ 未找到文章元数据")

if __name__ == "__main__":
    main()
