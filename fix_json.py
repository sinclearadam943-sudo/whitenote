import json
import re

with open('docs/data/artworks.json', 'r') as f:
    content = f.read()

# Replace Chinese quotes with regular quotes or remove them
content = content.replace('"', '「').replace('"', '」')

try:
    data = json.loads(content)
    print(f'Parsed OK, count: {len(data)}')
    for d in data:
        print(f"  {d['artist']}《{d['title']}》")
except json.JSONDecodeError as e:
    print(f'Still broken: {e}')
    # Find the problematic line
    lines = content.split('\n')
    for i, line in enumerate(lines, 1):
        if i >= e.lineno - 2 and i <= e.lineno + 2:
            print(f'Line {i}: {line[:120]}')
