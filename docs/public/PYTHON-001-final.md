# Python 全栈开发完全指南

> 从基础语法到 LLM 应用 · 六章系统学习 · 代码模板即查即用

## 第一章：Python 基础精要

Python 诞生于1991年，由 Guido van Rossum 创造。经过三十余年的发展，它已经从一门脚本语言成长为全球最主流的编程语言之一。根据 TIOBE 指数和 Stack Overflow 调查，Python 长期占据编程语言排行榜的前列。它的成功并非偶然——Python 的设计哲学、优雅的语法和强大的生态系统共同铸就了它的辉煌。本章将带你深入 Python 的核心基础，为后续的高级主题和应用开发奠定坚实基础。

---

### 1.1 Python 哲学与设计美学

Python 的魅力首先源于其独特的设计哲学。要理解这种哲学，最直接的方式就是执行一句看似简单的代码：

```python
import this
```

输出结果是被称为 **The Zen of Python**（Python 之禅）的19条设计原则，由 Tim Peters 撰写。这些原则并非强制性的技术规范，而是 Python 社区长期形成的美学共识。让我们逐条解读其中的核心思想：

**1. 优美胜于丑陋（Beautiful is better than ugly）**

Python 代码应该看起来赏心悦目。缩进不仅是语法要求，更是视觉结构。相比其他语言的大括号，Python 的强制缩进让代码天然呈现出清晰的层次：

```python
# C 语言风格 - 虽然合法但丑陋
def calculate(x,y,z):if x>0:return y+z;else:return y-z

# Python 风格 - 优美且易读
def calculate(x, y, z):
    if x > 0:
        return y + z
    else:
        return y - z
```

**2. 明了胜于晦涩（Explicit is better than implicit）**

Python 拒绝隐藏太多细节。导入必须明确、变量必须赋值后才能使用、类型转换需要显式调用。这种"明了"让代码行为可预测：

```python
# Python 要求显式
result = "10" + str(5)  # "105"

# 而不像 JavaScript 那样隐式转换
# "10" + 5  在 JS 中等于 "105"，这种隐式行为往往导致 bug
```

**3. 简洁胜于复杂（Simple is better than complex）**

Python 之父 Guido 常说："如果有多种实现方式，选择最明显的一种。"列表推导式就是这一原则的完美体现——一行代码替代多行循环，但语义完全清晰：

```python
# 传统循环方式 - 5 行
squares = []
for x in range(10):
    if x % 2 == 0:
        squares.append(x ** 2)

# 列表推导式 - 1 行，同样清晰
squares = [x ** 2 for x in range(10) if x % 2 == 0]
```

**4. 扁平胜于嵌套（Flat is better than nested）**

过深的嵌套会让代码难以跟踪。Python 鼓励通过提前返回、函数分解等方式保持代码扁平：

```python
# 糟糕的深层嵌套
def process_user(user):
    if user:
        if user.is_active:
            if user.age >= 18:
                return "可以访问"
            else:
                return "年龄不足"
        else:
            return "用户未激活"
    else:
        return "用户不存在"

# 改进的扁平结构 - 卫语句模式
def process_user(user):
    if not user:
        return "用户不存在"
    if not user.is_active:
        return "用户未激活"
    if user.age < 18:
        return "年龄不足"
    return "可以访问"
```

**与其他语言的对比**

| 特性 | Python | C++ | Java |
|------|--------|-----|------|
| 语法简洁度 | ★★★★★ | ★★★ | ★★★ |
| 类型系统 | 动态强类型 | 静态强类型 | 静态强类型 |
| 内存管理 | 自动（GC） | 手动/智能指针 | 自动（GC） |
| 代码量（同功能） | 少 | 多 | 中等 |
| 执行速度 | 慢 | 快 | 中等 |
| 开发速度 | 快 | 慢 | 中等 |

C++ 以性能见长，但语法复杂、内存管理繁琐；Java 在性能和开发效率间取得平衡，但代码冗长；Python 牺牲了部分运行效率，换取了极致的开发效率和代码可读性。

**Python 2 与 Python 3 的演进**

Python 3 于2008年发布，是一次不兼容的重大升级。主要差异包括：

```python
# Python 2 vs Python 3 关键差异

# 1. print 语句 vs print() 函数
# Python 2: print "Hello"  
# Python 3: print("Hello")

# 2. 整数除法
# Python 2: 5 / 2  → 2  (整数除法)
# Python 3: 5 / 2  → 2.5  (真除法)

# 3. 字符串编码
# Python 2: str 是字节串，unicode 是 Unicode
# Python 3: str 是 Unicode，bytes 是字节串

text = "中文字符"  # Python 3 中这就是 Unicode
binary = text.encode('utf-8')  # 显式编码为字节

# 4. range 与 xrange
# Python 2: range 返回列表，xrange 返回迭代器
# Python 3: range 就是迭代器（相当于 Python 2 的 xrange）
```

Python 2 已于2020年1月1日正式停止维护。今天所有的 Python 学习和开发都应基于 Python 3（当前推荐 3.8+）。选择 Python 3 意味着：
- 更现代的语法特性（f-string、海象运算符、类型注解等）
- 持续的官方支持和安全更新
- 完整的生态支持（主流库已全面转向 Python 3）

Python 的设计美学总结为一句话：**代码首先是写给人看的，其次才是给机器执行的**。这种人文关怀使 Python 成为教育、科学计算、Web 开发、人工智能等领域的首选语言。

---

### 1.2 基础语法速览

Python 的语法设计遵循"约定优于配置"的原则，通过 PEP 8（Python Enhancement Proposal 8）这一官方风格指南，确保不同开发者写出的代码风格一致。

**变量命名规范（PEP 8）**

命名是编程中最具哲学意味的活动之一。好的命名应该"自解释"——看到名字就知道它的用途。PEP 8 给出了明确的指导：

```python
# 模块名：短小，全小写，可用下划线
# my_module.py, utils.py

# 包名：短小，全小写，不使用下划线
# mypackage, requests

# 类名：首字母大写的驼峰命名（CapWords）
class UserProfile:
    pass

class HttpRequest:
    pass

# 函数名、变量名：小写，用下划线分隔（snake_case）
def calculate_total_price(items):
    total_count = len(items)
    return total_count

# 常量：全大写，用下划线分隔
MAX_CONNECTIONS = 100
PI = 3.14159

# 私有变量/方法：单下划线前缀（约定俗成，非强制）
class BankAccount:
    def __init__(self):
        self._balance = 0  # 私有属性（内部使用）
    
    def _validate_amount(self, amount):  # 私有方法
        return amount > 0

# 强私有（名称改写）：双下划线前缀
class Secret:
    def __init__(self):
        self.__password = "secret123"  # 会被改写为 _Secret__password
```

**常见命名错误与正确写法：**

```python
# ❌ 错误示例
userName = "Alice"           # 驼峰命名用于变量
def GetUserData():           # 函数名大写
    x = 10                   # 无意义命名
    l = [1, 2, 3]            # 与数字1和字母l混淆
    O = 0                    # 与数字0混淆

# ✅ 正确示例
user_name = "Alice"          # snake_case
def get_user_data():         # 小写
    max_retries = 10         # 描述性命名
    numbers = [1, 2, 3]      # 清晰的复数命名
    zero_value = 0           # 避免歧义
```

**基本数据类型详解**

Python 拥有丰富而直观的数据类型系统：

```python
# 1. 整数 int - 任意精度，无溢出限制
positive = 42
negative = -17
big_number = 10 ** 100  # 100位的整数，轻松存储
print(type(big_number))  # <class 'int'>

# 进制表示
binary = 0b1010      # 10（二进制）
octal = 0o17         # 15（八进制）
hexadecimal = 0xFF   # 255（十六进制）

# 2. 浮点数 float - IEEE 754 双精度
pi = 3.14159
scientific = 1.5e-3  # 0.0015

# ⚠️ 浮点数精度陷阱
print(0.1 + 0.2)  # 0.30000000000000004，不是 0.3！

# 解决方案：使用 decimal 模块或整数运算
from decimal import Decimal
price = Decimal('0.1') + Decimal('0.2')
print(price)  # 0.3（精确）

# 3. 字符串 str - Unicode 字符序列
single = 'Hello'
double = "World"
multi_line = """
这是
多行字符串
"""

# 原始字符串（不转义）
path = r"C:\Users\name"  # 注意：不是 C:\Users
ame

# 4. 布尔值 bool - True/False（注意大小写！）
is_valid = True
is_empty = False

# 布尔上下文中的"假值"
falsy_values = [0, 0.0, "", [], {}, None, False]

# 5. NoneType - 表示"无"或"空"
result = None

def do_nothing():
    pass  # 隐式返回 None

print(do_nothing())  # None
```

**类型转换与常见陷阱**

```python
# 显式类型转换
int_from_float = int(3.14)       # 3（截断小数部分）
float_from_int = float(42)       # 42.0
str_from_int = str(42)           # "42"
bool_from_int = bool(0)          # False

# ⚠️ 常见陷阱
# 1. 字符串转数字失败
# age = int("twenty")  # ValueError!

# 2. 浮点数转整数是截断，不是四舍五入
print(int(3.9))   # 3，不是 4
print(round(3.9)) # 4

# 3. 空字符串转 bool
print(bool(""))      # False
print(bool(" "))     # True！空格也是字符

# 安全的类型转换
def safe_int(value, default=0):
    """安全地将值转为整数"""
    try:
        return int(value)
    except (ValueError, TypeError):
        return default

print(safe_int("42"))      # 42
print(safe_int("abc"))     # 0
print(safe_int(None))      # 0
```

**输入输出与字符串格式化**

```python
# 基础输入输出
name = input("请输入你的名字: ")  # 返回字符串
age = int(input("请输入年龄: "))  # 需要显式转换

# print() 的多种用法
print("Hello", "World")           # Hello World（自动加空格）
print("Hello", "World", sep="-")  # Hello-World（自定义分隔符）
print("第一行", end="")           # 不换行
print("第二行")                   # 继续在同一行

# f-string 格式化（Python 3.6+，推荐方式）
name = "Alice"
age = 25
score = 95.5

# 基础用法
print(f"姓名: {name}, 年龄: {age}")

# 表达式
print(f"十年后年龄: {age + 10}")

# 格式控制
print(f"成绩: {score:.2f}")       # 95.50（保留2位小数）
print(f"二进制: {age:b}")         # 11001
print(f"居中: {name:^10}")        # "  Alice   "（宽度10，居中）
print(f"千分位: {1000000:,}")     # 1,000,000

# 多行 f-string
info = f"""
用户详情:
    姓名: {name}
    年龄: {age} 岁
    成绩: {score:.1f} 分
"""
print(info)

# 其他格式化方式（了解即可）
# % 格式化（老旧风格）
print("姓名: %s, 年龄: %d" % (name, age))

# str.format() 方法
print("姓名: {}, 年龄: {}".format(name, age))
print("姓名: {n}, 年龄: {a}".format(n=name, a=age))
```

掌握这些基础语法是编写 Python 代码的第一步。它们看似简单，却是构建复杂系统的基石。熟练运用这些语法，能让你的代码既符合 Python 的审美，又具备出色的可读性。

---

### 1.3 数据结构深度解析

如果说基础语法是 Python 的骨架，那么数据结构就是血肉。Python 提供了五种核心内置数据结构：列表（List）、元组（Tuple）、字典（Dict）、集合（Set）和字符串（String）。每一种都有其独特的特性和适用场景，理解它们是成为 Python 高手的关键。

**列表 List —— 可变序列的王者**

列表是 Python 中最常用、最灵活的数据结构。它是一个有序的、可变的数据集合，可以容纳任意类型的元素。

```python
# 创建列表的多种方式
empty = []
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True, None]
nested = [[1, 2], [3, 4], [5, 6]]

# 使用 list() 构造函数
chars = list("hello")  # ['h', 'e', 'l', 'l', 'o']
range_list = list(range(5))  # [0, 1, 2, 3, 4]

# 索引与切片
fruits = ["苹果", "香蕉", "橙子", "葡萄", "西瓜"]

# 索引
print(fruits[0])    # 苹果（第一个）
print(fruits[-1])   # 西瓜（最后一个）
print(fruits[-2])   # 葡萄（倒数第二个）

# 切片 [start:stop:step]
print(fruits[1:4])      # ['香蕉', '橙子', '葡萄']（左闭右开）
print(fruits[:3])       # ['苹果', '香蕉', '橙子']（从头开始）
print(fruits[2:])       # ['橙子', '葡萄', '西瓜']（到末尾）
print(fruits[::2])      # ['苹果', '橙子', '西瓜']（步长为2）
print(fruits[::-1])     # ['西瓜', '葡萄', '橙子', '香蕉', '苹果']（反转）

# ⚠️ 切片是浅拷贝
original = [[1, 2], [3, 4]]
copied = original[:]
copied[0][0] = 100
print(original)  # [[100, 2], [3, 4]] - 原始数据也被修改了！
```

**列表常用方法实战：**

```python
# 增
items = ["a", "b"]
items.append("c")           # 末尾添加 ['a', 'b', 'c']
items.extend(["d", "e"])    # 扩展多个元素 ['a', 'b', 'c', 'd', 'e']
items.insert(1, "x")        # 指定位置插入 ['a', 'x', 'b', 'c', 'd', 'e']

# 删
items.pop()                 # 删除并返回最后一个元素
items.pop(1)                # 删除并返回索引1的元素
items.remove("a")           # 删除第一个匹配的元素（值匹配）
# items.remove("z")         # ValueError: 不存在会报错

del items[0]                # 按索引删除
del items[1:3]              # 按切片删除

# 改
items = [3, 1, 4, 1, 5]
items.sort()                # 原地排序 [1, 1, 3, 4, 5]
items.sort(reverse=True)    # 降序 [5, 4, 3, 1, 1]
items.reverse()             # 原地反转

# 查
print(items.index(4))       # 查找元素索引
print(items.count(1))       # 统计出现次数
print(5 in items)           # 成员检测 True

# 排序的高级用法
words = ["banana", "apple", "cherry", "date"]
words.sort(key=len)         # 按长度排序
print(words)  # ['date', 'apple', 'banana', 'cherry']

# sorted() 返回新列表，不修改原列表
original = [3, 1, 4, 1, 5]
sorted_new = sorted(original, reverse=True)
print(original)    # [3, 1, 4, 1, 5] - 不变
print(sorted_new)  # [5, 4, 3, 1, 1]
```

**列表推导式 —— Python 的优雅利器：**

```python
# 基础形式
squares = [x**2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# 带条件的列表推导式
evens = [x for x in range(20) if x % 2 == 0]
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# 多重循环 - 笛卡尔积
coordinates = [(x, y) for x in range(3) for y in range(3)]
# [(0,0), (0,1), (0,2), (1,0), (1,1), (1,2), (2,0), (2,1), (2,2)]

# 矩阵转置
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
transposed = [[row[i] for row in matrix] for i in range(3)]
# [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

# 嵌套推导式 - 扁平化
nested = [[1, 2], [3, 4], [5, 6]]
flat = [x for sublist in nested for x in sublist]
# [1, 2, 3, 4, 5, 6]

# 实际应用：筛选和转换
data = ["  Alice  ", "BOB", "", "  Charlie  ", None]
clean_names = [name.strip().title() for name in data if name and name.strip()]
# ['Alice', 'Bob', 'Charlie']
```

**元组 Tuple —— 不可变的安全屏障**

元组与列表类似，但一旦创建就不能修改。这种"不可变性"在函数式编程和多线程环境中尤为重要。

```python
# 创建元组
empty = ()
single = (1,)  # 注意：单元素元组必须有逗号！
not_tuple = (1)  # 这只是整数 1
numbers = (1, 2, 3)
no_parens = 1, 2, 3  # 括号可省略

# 元组的基本操作（与列表相同）
print(numbers[0])       # 1
print(numbers[1:])      # (2, 3)
print(len(numbers))     # 3
print(2 in numbers)     # True

# ⚠️ 不可变性
try:
    numbers[0] = 100  # TypeError!
except TypeError as e:
    print(f"错误: {e}")

# 但元组内的可变元素可以修改
mutable_in_tuple = ([1, 2], [3, 4])
mutable_in_tuple[0].append(5)  # 合法！
print(mutable_in_tuple)  # ([1, 2, 5], [3, 4])
```

**元组解包与打包：**

```python
# 解包
point = (3, 4)
x, y = point
print(x, y)  # 3 4

# 交换变量的 Pythonic 写法
a, b = 10, 20
a, b = b, a  # 交换完成！
print(a, b)  # 20 10

# 扩展解包（Python 3+）
numbers = (1, 2, 3, 4, 5)
first, *middle, last = numbers
print(first)    # 1
print(middle)   # [2, 3, 4] - 注意是列表
print(last)     # 5

# 忽略值
x, _, y = (1, 2, 3)  # _ 常用于忽略

# 多返回值本质就是元组
def get_min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = get_min_max([3, 1, 4, 1, 5])
```

**命名元组 collections.namedtuple：**

```python
from collections import namedtuple

# 定义命名元组类型
Point = namedtuple('Point', ['x', 'y'])
Person = namedtuple('Person', 'name age city')  # 空格分隔也可

# 创建实例
p = Point(11, y=22)
print(p.x, p.y)     # 11 22
print(p[0], p[1])   # 也可以用索引

person = Person(name="Alice", age=30, city="Beijing")
print(f"{person.name} 住在 {person.city}")

# 不可变性
try:
    person.age = 31
except AttributeError:
    print("命名元组不可变！")

# 转换
person_dict = person._asdict()
print(person_dict)  # {'name': 'Alice', 'age': 30, 'city': 'Beijing'}

# 替换（返回新实例）
new_person = person._replace(age=31)
```

**字典 Dict —— 键值映射的王者**

字典是 Python 中最重要的数据结构之一，基于哈希表实现，提供 O(1) 的平均查找时间复杂度。

```python
# 创建字典
empty = {}
empty2 = dict()
person = {"name": "Alice", "age": 25, "city": "Beijing"}

# 多种创建方式
from_keys = dict.fromkeys(["a", "b", "c"], 0)  # {'a': 0, 'b': 0, 'c': 0}
zip_dict = dict(zip(["a", "b"], [1, 2]))       # {'a': 1, 'b': 2}
keyword_dict = dict(name="Bob", age=30)        # {'name': 'Bob', 'age': 30}

# 常用操作
print(person["name"])           # Alice
# print(person["gender"])       # KeyError!
print(person.get("gender"))     # None（不会报错）
print(person.get("gender", "未知"))  # "未知"（默认值）

# 增删改查
person["email"] = "alice@example.com"  # 新增
person["age"] = 26                      # 修改

# 删除
del person["email"]
age = person.pop("age")  # 删除并返回值
last = person.popitem()  # 删除并返回最后一个键值对（LIFO，Python 3.7+）

# 批量更新
person.update({"age": 25, "gender": "female"})

# 遍历
for key in person:
    print(key, person[key])

for key, value in person.items():
    print(f"{key}: {value}")

for key in person.keys():
    print(key)

for value in person.values():
    print(value)

# 字典推导式
squares = {x: x**2 for x in range(6)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# 过滤
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}

# 字符串长度映射
words = ["apple", "banana", "cherry"]
length_map = {word: len(word) for word in words}
# {'apple': 5, 'banana': 6, 'cherry': 6}
```

**defaultdict 与 Counter 实用工具：**

```python
from collections import defaultdict, Counter

# defaultdict - 自动提供默认值
word_count = defaultdict(int)  # 默认值为 0
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]

for word in words:
    word_count[word] += 1  # 不需要检查键是否存在

print(word_count)  # defaultdict({'apple': 3, 'banana': 2, 'cherry': 1})
print(dict(word_count))  # 转回普通字典

# 按长度分组
groups = defaultdict(list)
for word in words:
    groups[len(word)].append(word)
print(dict(groups))  # {5: ['apple'], 6: ['banana', 'banana', 'cherry']}

# Counter - 计数神器
counter = Counter(words)
print(counter)              # Counter({'apple': 3, 'banana': 2, 'cherry': 1})
print(counter.most_common(2))  # [('apple', 3), ('banana', 2)]
print(counter["apple"])      # 3
print(counter["orange"])     # 0（不报错）

# Counter 的数学运算
c1 = Counter(a=3, b=1)
c2 = Counter(a=1, b=2)
print(c1 + c2)  # Counter({'a': 4, 'b': 3})
print(c1 - c2)  # Counter({'a': 2})
print(c1 & c2)  # Counter({'a': 1, 'b': 1})  # 交集（最小值）
print(c1 | c2)  # Counter({'a': 3, 'b': 2})  # 并集（最大值）
```

**集合 Set —— 数学集合的完美实现**

集合是无序的、不重复的元素集合，非常适合去重和成员检测。

```python
# 创建集合
empty = set()  # 注意：{} 会创建空字典，不是集合！
numbers = {1, 2, 3, 4, 5}
from_list = set([1, 2, 2, 3, 3, 3])  # {1, 2, 3} - 自动去重

# 增删改
numbers.add(6)
numbers.remove(1)       # 元素必须存在，否则 KeyError
numbers.discard(100)    # 元素不存在也不会报错
popped = numbers.pop()  # 随机移除并返回一个元素
numbers.clear()         # 清空

# 数学集合运算
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)   # 并集 {1, 2, 3, 4, 5, 6}
print(a & b)   # 交集 {3, 4}
print(a - b)   # 差集 {1, 2}（在a中但不在b中）
print(b - a)   # 差集 {5, 6}
print(a ^ b)   # 对称差集 {1, 2, 5, 6}（异或）

# 方法形式
print(a.union(b))
print(a.intersection(b))
print(a.difference(b))
print(a.symmetric_difference(b))

# 子集与超集
print({1, 2} < {1, 2, 3})     # True（真子集）
print({1, 2, 3} <= {1, 2, 3}) # True（子集）
print({1, 2, 3} > {1, 2})     # True（真超集）

# 集合推导式
evens = {x for x in range(20) if x % 2 == 0}
print(evens)  # {0, 2, 4, 6, 8, 10, 12, 14, 16, 18}
```

**实际应用：去重与关系运算**

```python
# 列表去重（保持顺序）
def unique_ordered(seq):
    """保持原顺序的去重"""
    seen = set()
    result = []
    for item in seq:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

# Python 3.7+ 的更简洁写法（利用字典有序特性）
def unique_ordered_v2(seq):
    return list(dict.fromkeys(seq))

# 查找共同好友
def common_friends(user1_friends, user2_friends):
    return set(user1_friends) & set(user2_friends)

alice = ["Bob", "Charlie", "David"]
bob = ["Charlie", "David", "Eve"]
print(common_friends(alice, bob))  # {'Charlie', 'David'}

# 查找独有关注
def unique_follows(follows_a, follows_b):
    """只关注A而不关注B的用户"""
    return set(follows_a) - set(follows_b)
```

**字符串 String —— 不可变的字符序列**

字符串是 Python 中最基础的数据类型之一，理解其特性对高效编程至关重要。

```python
# 字符串是不可变的
text = "hello"
# text[0] = "H"  # TypeError!

# 创建新字符串
new_text = "H" + text[1:]  # "Hello"

# 字符串驻留（Interning）机制
a = "hello"
b = "hello"
print(a is b)  # True（小字符串会被驻留）

# 运行时创建的字符串不会被自动驻留
c = "".join(["h", "e", "l", "l", "o"])
print(a is c)  # False
print(a == c)  # True（值相等）

# 常用方法
text = "  Hello, World!  "
print(text.strip())       # "Hello, World!"
print(text.lower())       # "  hello, world!  "
print(text.upper())       # "  HELLO, WORLD!  "
print(text.title())       # "  Hello, World!  "

# 查找与替换
text = "banana"
print(text.find("na"))    # 2（第一个出现位置）
print(text.rfind("na"))   # 4（最后一个出现位置）
print(text.count("na"))   # 2
print(text.replace("na", "xx"))  # "bxxxa"

# 分割与连接
sentence = "apple,banana,cherry"
fruits = sentence.split(",")  # ['apple', 'banana', 'cherry']
print(" | ".join(fruits))      # "apple | banana | cherry"

# 多行分割
multiline = "line1\nline2\nline3"
lines = multiline.splitlines()  # ['line1', 'line2', 'line3']

# 检查方法
print("123".isdigit())    # True
print("abc".isalpha())    # True
print("abc123".isalnum()) # True
print("  ".isspace())     # True
print("Title".istitle())  # True
print("HELLO".isupper())  # True

# 前缀后缀检查
url = "https://example.com"
print(url.startswith("https"))  # True
print(url.endswith(".com"))     # True
```

**正则表达式入门：**

```python
import re

text = "我的邮箱是 alice@example.com，电话是 138-1234-5678"

# 基础匹配
email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
emails = re.findall(email_pattern, text)
print(emails)  # ['alice@example.com']

# 替换
new_text = re.sub(r'\d{3}-\d{4}-\d{4}', '***-****-****', text)
print(new_text)  # "我的邮箱是 alice@example.com，电话是 ***-****-****"

# 分割
mixed = "apple123banana456cherry"
items = re.split(r'\d+', mixed)
print(items)  # ['apple', 'banana', 'cherry']

# 分组匹配
pattern = r'(\w+)@(\w+)\.com'
match = re.search(pattern, "contact@test.com")
if match:
    print(match.group(0))  # 完整匹配 "contact@test.com"
    print(match.group(1))  # 第一组 "contact"
    print(match.group(2))  # 第二组 "test"

# 编译正则（重复使用时的性能优化）
email_regex = re.compile(email_pattern)
all_emails = email_regex.findall("alice@test.com bob@demo.com")
```

掌握这些数据结构，你就拥有了 Python 编程的核心武器。列表提供灵活性，元组提供安全性，字典提供高效查找，集合提供数学运算能力，字符串处理文本数据。它们是 Python " batteries included " 哲学的完美体现。

---

### 1.4 控制流与逻辑

程序的真正力量在于能够根据条件执行不同的代码路径，以及重复执行特定操作。Python 的控制流结构清晰、简洁，充分体现了语言的设计美学。

**条件语句：if-elif-else**

条件语句是程序决策的基础。Python 使用缩进来定义代码块，使结构一目了然。

```python
age = 25

# 基础 if-else
if age >= 18:
    print("成年人")
else:
    print("未成年人")

# if-elif-else 多分支
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"
print(f"成绩等级: {grade}")

# 嵌套条件（应尽量避免过深嵌套）
is_member = True
purchase_amount = 200

if is_member:
    if purchase_amount >= 100:
        discount = 0.2
    else:
        discount = 0.1
else:
    discount = 0

# 改进：扁平化结构
def get_discount(is_member, amount):
    if not is_member:
        return 0
    if amount >= 100:
        return 0.2
    return 0.1
```

**条件表达式的边界情况：**

```python
# 真值判断（Truthy/Falsy）
def check_value(value):
    if value:
        print(f"{value!r} 是真值")
    else:
        print(f"{value!r} 是假值")

check_value(0)          # 假值
check_value("")         # 假值
check_value([])         # 假值
check_value({})         # 假值
check_value(None)       # 假值
check_value(0.0)        # 假值

check_value(1)          # 真值
check_value("hello")    # 真值
check_value([0])        # 真值（非空列表）
check_value({"a": 1})   # 真值

# 区分 None 和空值的正确做法
data = None  # 或 "", [], {}

# ❌ 错误：无法区分 None 和空值
if not data:
    print("没有数据")

# ✅ 正确：显式检查 None
if data is None:
    print("数据未初始化")
elif len(data) == 0:
    print("数据为空")
else:
    print("有数据")
```

**三元表达式（条件表达式）**

三元表达式提供了一种简洁的赋值条件选择方式：

```python
age = 20
# 表达式 if 条件 else 表达式
status = "成年人" if age >= 18 else "未成年人"

# 对比传统写法
if age >= 18:
    status = "成年人"
else:
    status = "未成年人"

# 嵌套三元表达式（谨慎使用，可读性降低）
score = 75
result = "优秀" if score >= 90 else "良好" if score >= 80 else "及格" if score >= 60 else "不及格"

# 实际应用：列表推导式中的条件
numbers = [1, 2, 3, 4, 5]
labels = ["even" if n % 2 == 0 else "odd" for n in numbers]
print(labels)  # ['odd', 'even', 'odd', 'even', 'odd']
```

**循环：for 与 while**

Python 提供了两种循环结构：`for` 用于遍历序列，`while` 用于条件循环。

```python
# for 循环遍历序列
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# 使用 range()
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

for i in range(2, 10, 2):  # 从2开始，步长为2
    print(i)  # 2, 4, 6, 8

# 遍历字符串
for char in "hello":
    print(char)

# 遍历字典
user = {"name": "Alice", "age": 25}
for key in user:
    print(key, user[key])

for key, value in user.items():
    print(f"{key}: {value}")

# enumerate() - 获取索引和值
names = ["Alice", "Bob", "Charlie"]
for index, name in enumerate(names):
    print(f"{index}: {name}")

# 指定起始索引
for index, name in enumerate(names, start=1):
    print(f"{index}. {name}")

# zip() - 并行遍历多个序列
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
cities = ["北京", "上海", "深圳"]

for name, age, city in zip(names, ages, cities):
    print(f"{name}, {age}岁, 来自{city}")

# zip 的最短序列原则
short = [1, 2]
long = ["a", "b", "c", "d"]
for s, l in zip(short, long):
    print(s, l)  # 只输出 2 对

# zip_longest（需要 itertools）
from itertools import zip_longest
for s, l in zip_longest(short, long, fillvalue="-"):
    print(s, l)  # 输出 4 对，缺失的用 fillvalue 填充
```

**while 循环：**

```python
# 基础 while
count = 0
while count < 5:
    print(count)
    count += 1

# 无限循环与 break
while True:
    user_input = input("输入 'quit' 退出: ")
    if user_input.lower() == "quit":
        break
    print(f"你输入了: {user_input}")

# 模拟 do-while（先执行后检查）
while True:
    password = input("设置密码（至少6位）: ")
    if len(password) >= 6:
        print("密码设置成功")
        break
    print("密码太短，请重新输入")
```

**循环控制：break, continue, else**

```python
# break - 立即退出循环
for num in range(10):
    if num == 5:
        break
    print(num)  # 输出 0-4

# continue - 跳过当前迭代
for num in range(10):
    if num % 2 == 0:
        continue
    print(num)  # 输出奇数 1, 3, 5, 7, 9

# for-else 结构（很多人不知道的用法）
# else 在循环正常完成（没有被 break）时执行

def is_prime(n):
    """检查是否为素数"""
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            print(f"{n} = {i} × {n//i}")
            break
    else:  # 没有找到因数
        print(f"{n} 是素数")
        return True
    return False

is_prime(17)   # 17 是素数
is_prime(100)  # 100 = 2 × 50

# 搜索示例
def find_item(items, target):
    for item in items:
        if item == target:
            print(f"找到: {target}")
            break
    else:
        print(f"未找到: {target}")

find_item(["apple", "banana", "cherry"], "banana")  # 找到
find_item(["apple", "banana", "cherry"], "orange")  # 未找到
```

**异常处理：try-except-finally**

异常处理让程序能够优雅地处理错误，而不是崩溃。

```python
# 基础异常处理
try:
    result = 10 / 0
except ZeroDivisionError:
    print("不能除以零！")
    result = float('inf')

# 捕获多种异常
try:
    num = int(input("输入一个数字: "))
    result = 100 / num
except ValueError:
    print("输入不是有效的数字")
except ZeroDivisionError:
    print("不能除以零")

# 捕获所有异常（不推荐，除非你清楚在做什么）
try:
    risky_operation()
except Exception as e:
    print(f"发生错误: {e}")

# 获取异常信息
try:
    file = open("不存在的文件.txt")
except FileNotFoundError as e:
    print(f"错误类型: {type(e).__name__}")
    print(f"错误信息: {e}")

# else 子句（没有异常时执行）
try:
    num = int(input("输入数字: "))
except ValueError:
    print("输入无效")
else:
    print(f"输入有效，数字是: {num}")

# finally 子句（无论如何都会执行）
file = None
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("文件不存在")
finally:
    print("清理资源...")
    if file:
        file.close()

# 使用 with 语句（更优雅的资源管理）
try:
    with open("data.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("文件不存在")
```

**自定义异常：**

```python
# 定义自定义异常
class ValidationError(Exception):
    """数据验证错误"""
    pass

class AgeError(ValidationError):
    """年龄验证错误"""
    def __init__(self, age, message="年龄无效"):
        self.age = age
        self.message = message
        super().__init__(f"{message}: {age}")

class EmailError(ValidationError):
    """邮箱验证错误"""
    pass

# 使用自定义异常
def validate_user(age, email):
    if not (0 <= age <= 150):
        raise AgeError(age, "年龄必须在0-150之间")
    if "@" not in email:
        raise EmailError("邮箱格式不正确")
    print("验证通过")

# 捕获自定义异常
try:
    validate_user(200, "test@example.com")
except AgeError as e:
    print(f"年龄错误: {e}")
except EmailError as e:
    print(f"邮箱错误: {e}")

# 异常链（保留原始异常信息）
def read_config(file_path):
    try:
        with open(file_path) as f:
            return f.read()
    except FileNotFoundError as e:
        raise ConfigError(f"无法加载配置文件") from e
```

控制流是程序的逻辑骨架。Python 的 `for-else` 结构、上下文管理器（with 语句）以及清晰的异常体系，让代码既简洁又健壮。掌握这些结构，你就能编写出逻辑清晰、易于维护的程序。

---

### 1.5 函数定义与使用

函数是代码复用的基本单元，也是构建大型程序的基石。Python 的函数系统灵活而强大，支持多种参数形式、闭包、装饰器等高级特性。

**函数定义基础：**

```python
# 基础函数定义
def greet(name):
    """向用户问好（这是文档字符串 docstring）"""
    return f"你好，{name}!"

# 调用函数
message = greet("Alice")
print(message)

# 文档字符串标准格式
def calculate_area(length, width):
    """
    计算矩形面积。
    
    Args:
        length (float): 矩形的长度
        width (float): 矩形的宽度
    
    Returns:
        float: 矩形的面积
    
    Raises:
        ValueError: 如果长度或宽度为负数
    
    Examples:
        >>> calculate_area(5, 3)
        15.0
    """
    if length < 0 or width < 0:
        raise ValueError("长度和宽度必须非负")
    return length * width

# 查看文档
print(calculate_area.__doc__)
help(calculate_area)
```

**参数类型详解：**

```python
# 1. 位置参数（必需参数）
def power(base, exponent):
    return base ** exponent

print(power(2, 3))  # 8
# power(2)  # TypeError: 缺少参数

# 2. 关键字参数
def create_user(name, age, city):
    return {"name": name, "age": age, "city": city}

# 关键字参数可以任意顺序
user = create_user(age=25, city="北京", name="Alice")
print(user)

# 3. 默认参数
def greet(name, greeting="你好", punctuation="!"):
    return f"{greeting}, {name}{punctuation}"

print(greet("Alice"))                           # 你好, Alice!
print(greet("Bob", "Hello"))                    # Hello, Bob!
print(greet("Carol", punctuation="?"))          # 你好, Carol?

# ⚠️ 可变默认参数陷阱
def add_item_wrong(item, items=[]):
    """❌ 错误：默认参数在函数定义时求值"""
    items.append(item)
    return items

print(add_item_wrong("a"))   # ['a']
print(add_item_wrong("b"))   # ['a', 'b'] - 列表被共享了！

# ✅ 正确做法：使用 None 作为默认值
def add_item_correct(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_item_correct("a"))   # ['a']
print(add_item_correct("b"))   # ['b'] - 正确！
```

**可变参数：*args 和 **kwargs：**

```python
# *args - 接收任意数量的位置参数
def sum_all(*numbers):
    """计算所有参数的和"""
    return sum(numbers)

print(sum_all())           # 0
print(sum_all(1, 2, 3))    # 6
print(sum_all(1, 2, 3, 4, 5))  # 15

# *args 的本质是一个元组
def print_args(*args):
    print(f"args 类型: {type(args)}")
    print(f"args 内容: {args}")
    for i, arg in enumerate(args):
        print(f"  参数 {i}: {arg}")

print_args("a", "b", "c")

# **kwargs - 接收任意数量的关键字参数
def print_info(**kwargs):
    """打印所有关键字参数"""
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="北京")

# **kwargs 的本质是一个字典
def print_kwargs(**kwargs):
    print(f"kwargs 类型: {type(kwargs)}")
    print(f"kwargs 内容: {kwargs}")

print_kwargs(a=1, b=2)

# 组合使用
def flexible_function(required, default="value", *args, **kwargs):
    print(f"必需参数: {required}")
    print(f"默认参数: {default}")
    print(f"可变位置参数: {args}")
    print(f"可变关键字参数: {kwargs}")

flexible_function("必须", "可选", 1, 2, 3, extra="附加")

# 解包调用
def add(a, b, c):
    return a + b + c

numbers = [1, 2, 3]
print(add(*numbers))  # 解包列表，等同于 add(1, 2, 3)

data = {"a": 1, "b": 2, "c": 3}
print(add(**data))    # 解包字典，等同于 add(a=1, b=2, c=3)
```

**仅限关键字参数（Keyword-Only Arguments）：**

```python
# Python 3 引入的语法
def safe_divide(numerator, denominator, *, verbose=False):
    """
    安全除法
    * 后面的参数必须用关键字传递
    """
    if denominator == 0:
        if verbose:
            print("警告：除以零，返回 None")
        return None
    return numerator / denominator

# 调用
print(safe_divide(10, 2))           # 5.0
print(safe_divide(10, 2, verbose=True))  # 5.0
# safe_divide(10, 2, True)  # TypeError!

# 仅限位置参数（Python 3.8+）
def greet(name, /, greeting="你好"):
    """
    / 前面的参数必须是位置参数
    """
    return f"{greeting}, {name}"

print(greet("Alice"))           # 你好, Alice
print(greet("Bob", "Hello"))    # Hello, Bob
print(greet("Carol", greeting="Hi"))  # Hi, Carol
# greet(name="Dave")  # TypeError!

# 完整参数顺序
def full_example(pos1, pos2, /, pos_or_kwd, *, kwd1, kwd2):
    """
    pos1, pos2: 仅限位置
    pos_or_kwd: 位置或关键字
    kwd1, kwd2: 仅限关键字
    """
    pass
```

**返回值：**

```python
# 单一返回值
def square(x):
    return x ** 2

# 多值返回（实际是返回元组）
def get_stats(numbers):
    """返回最小值、最大值、平均值"""
    return min(numbers), max(numbers), sum(numbers) / len(numbers)

min_val, max_val, avg = get_stats([1, 2, 3, 4, 5])
print(f"最小: {min_val}, 最大: {max_val}, 平均: {avg:.2f}")

# 返回字典
def get_user_info(user_id):
    # 模拟数据库查询
    return {
        "id": user_id,
        "name": f"User_{user_id}",
        "status": "active"
    }

# 可选返回值
def find_user(users, name):
    for user in users:
        if user["name"] == name:
            return user
    return None  # 未找到

users = [{"name": "Alice"}, {"name": "Bob"}]
result = find_user(users, "Charlie")
if result is None:
    print("用户不存在")
```

**作用域：LEGB 规则：**

```python
# LEGB 规则：Local -> Enclosing -> Global -> Built-in

x = "global"  # Global 作用域

def outer():
    x = "enclosing"  # Enclosing 作用域
    
    def inner():
        x = "local"  # Local 作用域
        print(f"inner: {x}")  # local
    
    inner()
    print(f"outer: {x}")  # enclosing

outer()
print(f"global: {x}")  # global

# global 关键字
counter = 0

def increment():
    global counter
    counter += 1
    return counter

print(increment())  # 1
print(increment())  # 2

# nonlocal 关键字（修改闭包中的变量）
def make_counter():
    count = 0
    
    def increment():
        nonlocal count  # 声明使用外部（非全局）变量
        count += 1
        return count
    
    def decrement():
        nonlocal count
        count -= 1
        return count
    
    return increment, decrement

inc, dec = make_counter()
print(inc())  # 1
print(inc())  # 2
print(dec())  # 1
```

**闭包概念与延迟绑定问题：**

```python
# 闭包：函数记住其创建时的环境
def make_multiplier(factor):
    """创建一个乘法器函数"""
    def multiply(x):
        return x * factor  # factor 被"记住"了
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)

print(double(5))   # 10
print(triple(5))   # 15

# ⚠️ 延迟绑定陷阱
def make_functions_wrong():
    """❌ 常见错误：所有函数返回相同值"""
    functions = []
    for i in range(5):
        def func():
            return i  # i 是延迟绑定的
        functions.append(func)
    return functions

funcs = make_functions_wrong()
print([f() for f in funcs])  # [4, 4, 4, 4, 4] - 都是4！

# ✅ 解决方案1：默认参数
def make_functions_fixed():
    functions = []
    for i in range(5):
        def func(i=i):  # 默认参数在定义时求值
            return i
        functions.append(func)
    return functions

funcs = make_functions_fixed()
print([f() for f in funcs])  # [0, 1, 2, 3, 4]

# ✅ 解决方案2：工厂函数
def make_function(i):
    def func():
        return i
    return func

def make_functions_factory():
    return [make_function(i) for i in range(5)]

funcs = make_functions_factory()
print([f() for f in funcs])  # [0, 1, 2, 3, 4]
```

**Lambda 表达式：**

```python
# 基础 lambda
square = lambda x: x ** 2
print(square(5))  # 25

# 多参数 lambda
add = lambda x, y: x + y
print(add(3, 4))  # 7

# Lambda 适用场景1：排序 key
students = [
    {"name": "Alice", "score": 85},
    {"name": "Bob", "score": 92},
    {"name": "Charlie", "score": 78}
]
students.sort(key=lambda s: s["score"], reverse=True)
print(students)

# Lambda 适用场景2：map/filter
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(squared)  # [1, 4, 9, 16, 25]
print(evens)    # [2, 4]

# ⚠️ Lambda 的局限性 - 只能包含一个表达式
# 复杂逻辑应使用普通函数
def process_data(data):
    # 可以包含多条语句
    cleaned = data.strip()
    validated = cleaned.lower()
    return validated

# 不要这样写 - 可读性差
# process = lambda data: data.strip().lower()
```

函数是 Python 编程的核心。理解参数传递机制、作用域规则和闭包原理，是编写高质量 Python 代码的基础。函数的灵活性让你能够以声明式的方式表达复杂的逻辑，同时保持代码的清晰和可维护。

---

### 1.6 模块与包管理

随着项目规模增长，将代码组织成模块和包是必不可少的。Python 的模块化系统让代码复用、团队协作和版本管理变得更加容易。

**import 机制详解：**

```python
# 1. 导入整个模块
import math
print(math.sqrt(16))    # 4.0
print(math.pi)          # 3.14159...

# 2. 从模块导入特定函数/类
from math import sqrt, pow
print(sqrt(16))  # 不需要 math. 前缀

# 3. 使用别名
import numpy as np
from datetime import datetime as dt

# 4. 导入所有（不推荐，会污染命名空间）
from math import *
print(sin(pi/2))  # 可以直接使用，但容易与其他模块冲突

# 5. 相对导入（在包内部使用）
# from . import module      # 同级目录
# from .. import module     # 上级目录
# from .subpackage import func  # 子包
```

**模块搜索路径：**

```python
import sys
print(sys.path)  # 查看模块搜索路径

# 添加自定义路径
# sys.path.append('/path/to/my/modules')

# PYTHONPATH 环境变量也会影响搜索路径
```

**创建自定义模块：**

假设有文件 `mymath.py`：

```python
# mymath.py
"""自定义数学工具模块"""

PI = 3.14159

def add(a, b):
    """两数相加"""
    return a + b

def multiply(a, b):
    """两数相乘"""
    return a * b

# 这个类只在直接运行此文件时执行
class _InternalHelper:
    """内部辅助类（单下划线表示私有）"""
    pass

# __name__ 检查
if __name__ == "__main__":
    # 这部分只在直接运行 mymath.py 时执行
    # 用于测试模块功能
    print("测试 add:", add(2, 3))
    print("测试 multiply:", multiply(4, 5))
```

使用模块：

```python
import mymath
print(mymath.add(2, 3))       # 5
print(mymath.PI)              # 3.14159

from mymath import multiply
print(multiply(4, 5))         # 20
```

**`__name__ == "__main__"` 的意义：**

```python
# calculator.py

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

# 当直接运行此文件时，__name__ 是 "__main__"
# 当作为模块导入时，__name__ 是 "calculator"
if __name__ == "__main__":
    # 这些代码只在直接运行文件时执行
    print("计算器模块测试")
    print(f"2 + 3 = {add(2, 3)}")
    print(f"5 - 2 = {subtract(5, 2)}")
```

**包（Package）结构：**

```
mypackage/
    __init__.py      # 包初始化文件（Python 3.3+ 可选但推荐保留）
    module1.py
    module2.py
    subpackage/
        __init__.py
        module3.py
```

```python
# mypackage/__init__.py
"""我的包"""

# 控制 from mypackage import * 时导入的内容
__all__ = ['function1', 'Class1']

from .module1 import function1
from .module2 import Class1

# 包级别的初始化代码
print("mypackage 已加载")
```

**pip 包管理：**

```python
# 常用 pip 命令（在终端执行）

# 安装包
# pip install requests
# pip install numpy pandas matplotlib  # 同时安装多个

# 指定版本
# pip install requests==2.28.1
# pip install "requests>=2.28,<3.0"

# 升级包
# pip install --upgrade requests

# 卸载包
# pip uninstall requests

# 列出已安装包
# pip list

# 显示包信息
# pip show requests

# 导出依赖
# pip freeze > requirements.txt

# 安装依赖
# pip install -r requirements.txt
```

**requirements.txt 示例：**

```
# 生产依赖
requests>=2.28.0
numpy>=1.21.0
pandas>=1.3.0

# 开发依赖
pytest>=7.0.0
black>=22.0.0
flake8>=5.0.0

# 特定版本
Django==4.1.0

# 可选依赖
# opencv-python; platform_system != "Darwin"
```

**虚拟环境：**

```python
# venv（Python 3.3+ 内置）
# python -m venv myenv

# 激活虚拟环境
# Windows: myenv\Scripts\activate
# macOS/Linux: source myenv/bin/activate

# 退出虚拟环境
# deactivate
```

**三种虚拟环境工具对比：**

| 特性 | venv | virtualenv | conda |
|------|------|------------|-------|
| 安装 | 内置 | pip install | Anaconda/Miniconda |
| 速度 | 快 | 快 | 较慢（但功能更强）|
| 跨平台 | 是 | 是 | 是 |
| 非 Python 依赖 | 不支持 | 不支持 | 支持（C库等）|
| 适用场景 | 标准项目 | 兼容旧版 Python | 数据科学/复杂依赖 |

```python
# conda 常用命令
# conda create -n myenv python=3.10
# conda activate myenv
# conda deactivate
# conda install numpy pandas
# conda list
# conda env export > environment.yml
# conda env create -f environment.yml
```

**实际项目结构示例：**

```
myproject/
├── README.md
├── requirements.txt
├── setup.py              # 包安装配置
├── .gitignore
├── venv/                 # 虚拟环境（不提交到git）
├── docs/                 # 文档
├── tests/                # 测试代码
│   ├── __init__.py
│   ├── test_core.py
│   └── test_utils.py
├── src/                  # 源代码
│   └── myproject/
│       ├── __init__.py
│       ├── core.py
│       ├── utils.py
│       └── cli.py
└── scripts/              # 工具脚本
    └── setup_db.py
```

模块化和包管理是专业 Python 开发的必备技能。合理使用虚拟环境可以避免依赖冲突，清晰的包结构让项目易于维护，而掌握 pip 和 requirements.txt 是团队协作的基础。

---

### 1.7 里程碑书籍推荐

学习 Python 的过程离不开优秀的参考书籍。以下三本经典之作分别适合不同阶段的读者，构成了完整的学习路径。

**《Python 编程：从入门到实践》（Python Crash Course）**

*作者：Eric Matthes | 适合人群：零基础初学者*

这本书被誉为 Python 入门领域的"圣经"，全球销量超过百万册。作者 Eric Matthes 是一位高中计算机科学教师，深谙初学者的困惑和难点。

**核心特点：**
- **双轨结构**：第一部分讲解基础语法（变量、列表、字典、函数、类），第二部分通过三个实战项目巩固所学——游戏开发（Pygame 外星人入侵）、数据可视化（Matplotlib）和 Web 应用（Django）
- **项目驱动**：每个概念都配有可运行的代码示例，读者可以立即看到效果
- **循序渐进**：从打印 "Hello World" 到构建完整 Web 应用，难度曲线平滑

**适用场景：** 如果你是完全的编程新手，或者想系统性地重新学习 Python 基础，这本书是最佳选择。建议配合书中项目边学边做，完成所有练习后，你将具备独立开发小型项目的能力。

---

**《流畅的 Python》（Fluent Python）**

*作者：Luciano Ramalho | 适合人群：有基础的开发者*

如果说入门书籍教你"怎么用 Python"，那么这本书教你"如何用好 Python"。作者 Luciano Ramalho 是 PSF（Python Software Foundation）成员，拥有二十余年 Python 开发经验。

**核心特点：**
- **深度剖析**：详细讲解 Python 的数据模型、序列、字典、集合、对象、函数、类等核心概念
- **Pythonic 之道**：教你写出地道的 Python 代码，而不是把 Java/C++ 风格硬套到 Python 上
- **原理导向**：不仅告诉你要怎么做，还解释为什么要这样做

**精彩章节：**
- 第1章：Python 数据模型（理解 `__len__`、`__getitem__` 等魔术方法）
- 第3章：字典和集合（哈希表原理、集合运算实战）
- 第5章：一等函数（函数作为对象、闭包、装饰器）
- 第7章：函数装饰器和闭包
- 第14章：可迭代的对象、迭代器和生成器

**适用场景：** 当你已经能用 Python 完成日常任务，但希望写出更优雅、更高效的代码时，阅读这本书。它能帮你理解 Python 的设计哲学，掌握列表推导式、生成器表达式、上下文管理器等高级特性的精髓。

---

**《Python Cookbook》**

*作者：David Beazley, Brian K. Jones | 适合人群：中高级开发者、架构师*

这是一本"问题-解决方案-讨论"形式的实战手册，汇集了 Python 社区的最佳实践。

**核心特点：**
- **问题导向**：涵盖 200+ 个实际编程问题的解决方案
- **现代 Python**：基于 Python 3，充分利用新版本特性
- **广度与深度**：从字符串处理、数据结构到元编程、C 扩展，覆盖面极广

**精彩章节：**
- 第1章：数据结构和算法（字典多键排序、优先级队列）
- 第4章：迭代器与生成器（扁平化嵌套序列、合并有序序列）
- 第8章：类与对象（创建托管属性、实现状态对象）
- 第12章：并发编程（启动线程池、事件驱动 IO）
- 第15章：C 扩展（用 ctypes 和 Cython 扩展 Python）

**适用场景：** 当你在工作中遇到具体问题需要查找解决方案，或者想了解某个领域的最佳实践时，这本书是案头必备的参考书。它不适合从头读到尾，而应作为工具书按需查阅。

**阅读建议：** 建议按顺序阅读这三本书——先用《Python 编程：从入门到实践》打好基础，再通过《流畅的 Python》深入理解语言特性，最后以《Python Cookbook》作为日常参考。这样的学习路径能让你从入门者成长为真正的 Python 专家。

---

### 1.8 推荐 GitHub 项目

阅读优秀开源项目的源码是提升编程能力的最佳途径之一。以下两个项目不仅代码质量极高，而且具有明确的学习价值，适合不同层次的 Python 开发者研究。

**python/cpython —— Python 解释器源码**

*Star 数：60k+ | 语言：Python + C*

这是 Python 语言的官方实现仓库，包含了 Python 解释器的完整源码。研究 CPython 源码能让你深入理解 Python 的运行机制，解答许多"为什么"的问题。

**学习价值：**

1. **理解 Python 对象模型**：`Objects/` 目录下的源码展示了 Python 中一切皆为对象的实现原理。你可以看到 `int`、`list`、`dict` 等内置类型的 C 语言实现，理解引用计数、垃圾回收等机制。

2. **探索字节码编译**：`Python/compile.c` 和 `Python/ceval.c` 展示了 Python 代码如何被编译为字节码，以及字节码虚拟机如何执行指令。研究这些源码能让你理解装饰器、闭包等高级特性的底层实现。

3. **学习 C 语言扩展**：`Modules/` 目录包含了标准库模块的实现，展示了如何用 C 语言编写 Python 扩展模块。这对性能敏感场景的开发很有帮助。

**如何阅读：**

```python
# 在源码中查找 list 的 append 方法实现
# Objects/listobject.c 中的 listappend 函数

# 了解 GIL（全局解释器锁）的实现
# Python/ceval.c 中的 gil 相关代码
```

**建议从以下路径开始：**
- `Include/`：头文件，定义了 Python C API
- `Objects/listobject.c`：列表的实现
- `Objects/dictobject.c`：字典的实现
- `Python/ceval.c`：字节码执行引擎

**适合人群：** 对 Python 底层原理感兴趣的中高级开发者。不需要完全读懂所有 C 代码，即使是 Python 部分（如标准库的实现）也足够有价值。

---

**psf/requests —— HTTP 请求库**

*Star 数：50k+ | 语言：Python*

requests 是 Python 生态中最著名的 HTTP 库之一，以其"为人类设计的 HTTP 库"的理念闻名。尽管 urllib 是标准库的一部分，但 requests 的 API 设计如此优雅，以至于 Kenneth Reitz（作者）的代码成为了 Python API 设计的典范。

**学习价值：**

1. **API 设计艺术**：requests 的 API 简洁到令人惊艳。对比一下：

```python
# 标准库 urllib（繁琐）
import urllib.request
import json
req = urllib.request.Request('https://api.example.com/data')
req.add_header('User-Agent', 'MyApp')
with urllib.request.urlopen(req) as response:
    data = json.loads(response.read().decode())

# requests（优雅）
import requests
response = requests.get('https://api.example.com/data', 
                       headers={'User-Agent': 'MyApp'})
data = response.json()
```

2. **代码组织**：requests 的模块划分清晰——`api.py` 暴露主要接口、`sessions.py` 管理会话、`models.py` 定义响应对象、`adapters.py` 处理底层连接。这种结构是中型 Python 项目的典范。

3. **错误处理**：requests 对 HTTP 错误的处理堪称教科书级别。它区分了连接错误（`ConnectionError`）、超时（`Timeout`）和 HTTP 错误状态码（`HTTPError`），让用户能够精确地处理不同场景。

4. **文档即代码**：requests 的文档（README 和源码中的 docstring）写得极好，值得学习如何写技术文档。

**推荐阅读路径：**
- `src/requests/__init__.py`：了解包的组织和公开 API
- `src/requests/api.py`：核心 API 实现（get、post、put、delete 等）
- `src/requests/sessions.py`：Session 类的实现（保持 cookies、连接池）
- `src/requests/models.py`：Request 和 Response 对象的定义

**适合人群：** 所有层次的 Python 开发者。初学者可以学习优雅的 API 设计和代码组织，中高级开发者可以研究会话管理、连接池、SSL 验证等高级功能的实现。

---

**结语**

第一章涵盖了 Python 编程的核心基础。从 Python 的设计哲学到具体的数据结构，从控制流到函数定义，从模块管理到学习资源——这些知识构成了你 Python 编程能力的基石。

记住 Python 之禅的启示：**简单胜于复杂，可读性至关重要**。在后续章节中，我们将基于这些基础，探索面向对象编程、装饰器、异步编程等高级特性，以及在数据科学、游戏开发和 AI 领域的实际应用。

掌握基础，保持好奇，持续实践——这就是 Python 开发者成长的必经之路。

---

## 第二章：高级特性与工程实践

第一章我们夯实了 Python 的基础，从变量、数据结构到函数和模块。但 Python 的真正魅力在于其高级特性——那些让代码更加优雅、高效、可维护的语言机制。本章将深入探讨面向对象编程、装饰器、生成器、异步编程等核心高级特性，并介绍工程化实践中的测试、部署等关键环节。

掌握这些高级特性，是区分"会写 Python"和"精通 Python"的分水岭。

---

### 2.1 面向对象编程精要（OOP）

面向对象编程（Object-Oriented Programming，OOP）是 Python 的核心编程范式之一。理解类与对象的概念，是掌握 Python 高级特性的第一步。

#### 类与对象的概念

类（Class）是对象的蓝图，定义了对象应该具有的属性和方法；对象（Object）是类的实例，是内存中真实存在的数据结构。

```python
class Dog:
    """狗的类定义"""
    species = "Canis familiaris"  # 类属性
    
    def __init__(self, name, age):
        self.name = name  # 实例属性
        self.age = age
    
    def bark(self):
        return f"{self.name} says woof!"
    
    def description(self):
        return f"{self.name} is {self.age} years old"

# 创建对象（实例化）
buddy = Dog("Buddy", 3)
miles = Dog("Miles", 5)

print(buddy.description())  # Buddy is 3 years old
print(miles.bark())         # Miles says woof!
```

#### `__init__` 构造方法与 self

`__init__` 是构造方法，在创建对象时自动调用。`self` 代表实例本身，是类方法的第一参数，用于访问实例的属性和方法。没有 `self`，方法无法知道它在操作哪个对象。

```python
class Person:
    population = 0  # 类属性：追踪总人口
    
    def __init__(self, name, age):
        self.name = name
        self._age = age  # 约定：受保护属性
        Person.population += 1
    
    def have_birthday(self):
        self._age += 1
        return f"Happy {self._age}th birthday, {self.name}!"

# 创建实例
alice = Person("Alice", 25)
bob = Person("Bob", 30)
print(Person.population)  # 2
```

#### 类属性 vs 实例属性

类属性属于类本身，所有实例共享；实例属性属于各个实例，互不干扰。

```python
class Configuration:
    # 类属性：所有实例共享
    debug_mode = False
    version = "1.0.0"
    
    def __init__(self, env):
        # 实例属性：每个实例独立
        self.environment = env
        self.settings = {}

config1 = Configuration("production")
config2 = Configuration("development")

# 修改实例属性
config1.environment = "staging"
print(config2.environment)  # development（不受影响）

# 修改类属性
Configuration.debug_mode = True
print(config1.debug_mode)   # True（共享变化）
print(config2.debug_mode)   # True
```

#### 继承：单继承、多继承、MRO

继承允许子类获得父类的属性和方法，并可以扩展或重写。

```python
# 单继承
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        raise NotImplementedError("子类必须实现此方法")

class Cat(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # 调用父类构造方法
        self.breed = breed
    
    def speak(self):  # 重写父类方法
        return f"{self.name} says meow!"

# 多继承
class Flying:
    def fly(self):
        return f"{self.name} is flying"

class Swimming:
    def swim(self):
        return f"{self.name} is swimming"

class Duck(Animal, Flying, Swimming):
    def speak(self):
        return f"{self.name} says quack!"

donald = Duck("Donald")
print(donald.speak())  # Donald says quack!
print(donald.fly())    # Donald is flying
print(donald.swim())   # Donald is swimming
```

**方法解析顺序（MRO）**：当多继承出现方法冲突时，Python 使用 C3 线性化算法确定调用顺序。

```python
class A:
    def method(self):
        return "A"

class B(A):
    def method(self):
        return "B"

class C(A):
    def method(self):
        return "C"

class D(B, C):  # 菱形继承
    pass

d = D()
print(d.method())  # B（按 MRO 顺序）
print(D.__mro__)   # (<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)
```

#### 多态与鸭子类型

Python 是多态的，但遵循"鸭子类型"哲学：不关注对象类型，只关注对象是否有所需的方法。

```python
class Dog:
    def speak(self):
        return "Woof!"
    
    def __str__(self):
        return "Dog"

class Cat:
    def speak(self):
        return "Meow!"
    
    def __str__(self):
        return "Cat"

class Robot:
    def speak(self):  # 不需要继承任何类
        return "Beep boop!"

# 多态函数
def animal_sound(animal):
    """不关心具体类型，只关心是否有 speak 方法"""
    return animal.speak()

# 使用
pets = [Dog(), Cat(), Robot()]
for pet in pets:
    print(f"{pet}: {animal_sound(pet)}")
# Dog: Woof!
# Cat: Meow!
# Robot: Beep boop!
```

#### 封装：私有属性

Python 通过命名约定实现封装，而非严格的访问控制。

```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self._balance = balance      # 单下划线：约定为内部使用
        self.__transaction_log = []  # 双下划线：名称修饰（name mangling）
    
    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            self.__log_transaction(f"Deposit: +{amount}")
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
            self.__log_transaction(f"Withdraw: -{amount}")
            return True
        return False
    
    def __log_transaction(self, message):
        """真正的私有方法（名称修饰）"""
        from datetime import datetime
        self.__transaction_log.append(f"{datetime.now()}: {message}")
    
    def get_balance(self):
        return self._balance

account = BankAccount("Alice", 1000)
account.deposit(500)
print(account.get_balance())   # 1500

# 访问规则
print(account._balance)        # 1500（可以访问，但不建议）
# print(account.__transaction_log)  # AttributeError
print(account._BankAccount__transaction_log)  # 可以访问（但不应当）
```

#### 魔术方法大全

魔术方法（Magic Methods）以双下划线开头和结尾，让自定义类拥有与内置类型相似的行为。

```python
from functools import total_ordering

@total_ordering
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    # 字符串表示
    def __str__(self):       # 用户友好表示
        return f"Vector({self.x}, {self.y})"
    
    def __repr__(self):      # 开发者表示，应当能 eval
        return f"Vector({self.x!r}, {self.y!r})"
    
    # 相等性比较
    def __eq__(self, other):
        if not isinstance(other, Vector):
            return NotImplemented
        return self.x == other.x and self.y == other.y
    
    # 哈希（用于 dict/set）
    def __hash__(self):
        return hash((self.x, self.y))
    
    # 大小比较
    def __lt__(self, other):
        if not isinstance(other, Vector):
            return NotImplemented
        return (self.x**2 + self.y**2) < (other.x**2 + other.y**2)
    
    # 算术运算
    def __add__(self, other):
        if isinstance(other, Vector):
            return Vector(self.x + other.x, self.y + other.y)
        elif isinstance(other, (int, float)):
            return Vector(self.x + other, self.y + other)
        return NotImplemented
    
    def __sub__(self, other):
        if isinstance(other, Vector):
            return Vector(self.x - other.x, self.y - other.y)
        return NotImplemented
    
    def __mul__(self, scalar):
        if isinstance(scalar, (int, float)):
            return Vector(self.x * scalar, self.y * scalar)
        return NotImplemented
    
    def __rmul__(self, scalar):  # 右乘
        return self.__mul__(scalar)
    
    # 容器协议
    def __len__(self):
        return 2
    
    def __getitem__(self, index):
        if index == 0:
            return self.x
        elif index == 1:
            return self.y
        raise IndexError("Vector index out of range")
    
    def __iter__(self):
        yield self.x
        yield self.y
    
    # 上下文管理器（后面详细讲）
    def __enter__(self):
        print("Entering context")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Exiting context")
        return False  # 不抑制异常

# 使用示例
v1 = Vector(3, 4)
v2 = Vector(1, 2)

print(str(v1))       # Vector(3, 4)
print(repr(v1))      # Vector(3, 4)
print(v1 + v2)       # Vector(4, 6)
print(v1 * 2)        # Vector(6, 8)
print(3 * v1)        # Vector(9, 12)（__rmul__）
print(len(v1))       # 2
print(v1[0])         # 3
print(list(v1))      # [3, 4]
print(v1 == v2)      # False
print(v1 > v2)       # True

# 作为 dict 的 key
vectors = {v1: "first", v2: "second"}
print(vectors[Vector(3, 4)])  # first（因为 __hash__ 和 __eq__）
```

#### @property 装饰器

`@property` 让方法像属性一样访问，实现计算属性和受控访问。

```python
class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius
    
    @property
    def celsius(self):
        """摄氏度（getter）"""
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        """摄氏度（setter）"""
        if value < -273.15:
            raise ValueError("Temperature cannot be below absolute zero")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        """华氏度（只读计算属性）"""
        return self._celsius * 9/5 + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        """华氏度 setter"""
        self._celsius = (value - 32) * 5/9
    
    @property
    def kelvin(self):
        """开尔文（只读）"""
        return self._celsius + 273.15

temp = Temperature(25)
print(temp.celsius)     # 25
print(temp.fahrenheit)  # 77.0
print(temp.kelvin)      # 298.15

temp.celsius = 100
print(temp.fahrenheit)  # 212.0

temp.fahrenheit = 32
print(temp.celsius)     # 0

# temp.kelvin = 300  # AttributeError: can't set attribute
```

#### @staticmethod 与 @classmethod

```python
class DateUtil:
    """日期工具类"""
    
    default_format = "%Y-%m-%d"
    
    def __init__(self, date_string):
        from datetime import datetime
        self.date = datetime.strptime(date_string, self.default_format)
    
    @staticmethod
    def is_leap_year(year):
        """静态方法：不需要访问类或实例"""
        return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)
    
    @classmethod
    def today(cls):
        """类方法：可访问类属性，常用于替代构造方法"""
        from datetime import datetime
        instance = cls.__new__(cls)
        instance.date = datetime.now()
        return instance
    
    @classmethod
    def from_timestamp(cls, timestamp):
        """替代构造方法"""
        from datetime import datetime
        instance = cls.__new__(cls)
        instance.date = datetime.fromtimestamp(timestamp)
        return instance
    
    def __str__(self):
        return self.date.strftime(self.default_format)

# 使用
print(DateUtil.is_leap_year(2024))  # True
print(DateUtil.is_leap_year(1900))  # False

today = DateUtil.today()
print(today)  # 2024-01-15

ts_date = DateUtil.from_timestamp(1700000000)
print(ts_date)  # 2023-11-14
```

#### 抽象基类：abc 模块

抽象基类定义接口规范，子类必须实现抽象方法。

```python
from abc import ABC, abstractmethod
from typing import List

class DataSource(ABC):
    """数据源抽象基类"""
    
    def __init__(self, connection_string: str):
        self.connection_string = connection_string
        self._connected = False
    
    @abstractmethod
    def connect(self) -> None:
        """建立连接"""
        pass
    
    @abstractmethod
    def fetch(self, query: str) -> List[dict]:
        """执行查询"""
        pass
    
    @abstractmethod
    def close(self) -> None:
        """关闭连接"""
        pass
    
    def is_connected(self) -> bool:
        """具体方法：子类可直接使用"""
        return self._connected

class PostgreSQLSource(DataSource):
    """PostgreSQL 数据源实现"""
    
    def connect(self) -> None:
        print(f"Connecting to PostgreSQL: {self.connection_string}")
        self._connected = True
    
    def fetch(self, query: str) -> List[dict]:
        if not self._connected:
            raise ConnectionError("Not connected")
        print(f"Executing: {query}")
        return [{"id": 1, "name": "test"}]
    
    def close(self) -> None:
        print("Closing PostgreSQL connection")
        self._connected = False

class MongoDBSource(DataSource):
    """MongoDB 数据源实现"""
    
    def connect(self) -> None:
        print(f"Connecting to MongoDB: {self.connection_string}")
        self._connected = True
    
    def fetch(self, query: str) -> List[dict]:
        if not self._connected:
            raise ConnectionError("Not connected")
        print(f"Finding: {query}")
        return [{"_id": 1, "name": "test"}]
    
    def close(self) -> None:
        print("Closing MongoDB connection")
        self._connected = False

# 使用（多态）
def process_data(source: DataSource, query: str):
    """处理数据：不关心具体数据源类型"""
    source.connect()
    data = source.fetch(query)
    source.close()
    return data

pg = PostgreSQLSource("postgresql://localhost/db")
mongo = MongoDBSource("mongodb://localhost/db")

process_data(pg, "SELECT * FROM users")
process_data(mongo, "{}")

# source = DataSource("test")  # TypeError: Can't instantiate abstract class
```

#### dataclass：Python 3.7+ 的数据类

`@dataclass` 自动生成 `__init__`、`__repr__`、`__eq__` 等方法，让数据容器类更简洁。

```python
from dataclasses import dataclass, field, asdict, astuple
from typing import List, Optional
from datetime import datetime

@dataclass
class User:
    """用户数据类"""
    name: str
    email: str
    age: int
    is_active: bool = True           # 默认值
    tags: List[str] = field(default_factory=list)  # 可变默认值
    created_at: datetime = field(default_factory=datetime.now)
    _password_hash: Optional[str] = field(default=None, repr=False)  # 不显示在 repr 中
    
    def __post_init__(self):
        """初始化后处理"""
        if self.age < 0:
            raise ValueError("Age cannot be negative")
    
    def to_dict(self):
        return asdict(self)

@dataclass(frozen=True)  # 不可变数据类
class Point:
    """二维点（不可变）"""
    x: float
    y: float
    
    def distance_from_origin(self) -> float:
        return (self.x ** 2 + self.y ** 2) ** 0.5

# 使用
user = User("Alice", "alice@example.com", 30, tags=["developer", "python"])
print(user)
# User(name='Alice', email='alice@example.com', age=30, is_active=True, 
#      tags=['developer', 'python'], created_at=datetime(...))

print(asdict(user))
print(astuple(user))

p1 = Point(3, 4)
p2 = Point(3, 4)
print(p1 == p2)  # True
print(p1.distance_from_origin())  # 5.0

# p1.x = 5  # FrozenInstanceError

# 继承
dataclass
class AdminUser(User):
    """管理员用户"""
    permissions: List[str] = field(default_factory=lambda: ["read", "write"])
    is_superuser: bool = False

admin = AdminUser("Bob", "bob@example.com", 35, is_superuser=True)
print(admin)
```

---

### 2.2 装饰器与元编程

装饰器是 Python 最强大的特性之一，它允许你在不修改函数源代码的情况下，扩展函数的功能。

#### 函数装饰器原理详解

装饰器本质上是一个高阶函数——接收函数作为参数并返回函数的函数。

```python
# 最简装饰器
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} finished")
        return result
    return wrapper

@my_decorator
def say_hello(name):
    print(f"Hello, {name}!")
    return "Done"

# 等价于: say_hello = my_decorator(say_hello)

result = say_hello("Alice")
# Calling say_hello
# Hello, Alice!
# say_hello finished
```

#### 带参数的装饰器

当装饰器本身需要参数时，需要嵌套三层函数。

```python
def repeat(times):
    """重复执行指定次数的装饰器"""
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

def timer(prefix="Execution time"):
    """计时装饰器"""
    def decorator(func):
        import time
        def wrapper(*args, **kwargs):
            start = time.time()
            result = func(*args, **kwargs)
            elapsed = time.time() - start
            print(f"{prefix}: {elapsed:.4f}s")
            return result
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hi {name}")

@timer("Slow function took")
def slow_function():
    import time
    time.sleep(0.1)
    return "Done"

greet("Bob")
# Hi Bob
# Hi Bob
# Hi Bob

slow_function()  # Slow function took: 0.1012s
```

#### 类装饰器

装饰器也可以应用于类，用于修改类的行为或添加功能。

```python
def singleton(cls):
    """单例模式装饰器"""
    instances = {}
    def wrapper(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    return wrapper

def add_method(method_name, method):
    """动态添加方法的装饰器"""
    def decorator(cls):
        setattr(cls, method_name, method)
        return cls
    return decorator

def log_methods(cls):
    """为所有方法添加日志的装饰器"""
    for attr_name in dir(cls):
        attr = getattr(cls, attr_name)
        if callable(attr) and not attr_name.startswith('_'):
            def make_logger(method):
                def wrapper(*args, **kwargs):
                    print(f"[LOG] Calling {method.__name__}")
                    return method(*args, **kwargs)
                return wrapper
            setattr(cls, attr_name, make_logger(attr))
    return cls

@singleton
class Database:
    def __init__(self, url):
        self.url = url
        print(f"Connecting to {url}")

db1 = Database("postgresql://localhost")
db2 = Database("postgresql://remote")
print(db1 is db2)  # True

@log_methods
class Calculator:
    def add(self, a, b):
        return a + b
    
    def multiply(self, a, b):
        return a * b

calc = Calculator()
calc.add(2, 3)  # [LOG] Calling add
```

#### functools.wraps 保留元信息

使用装饰器会导致原函数的 `__name__`、`__doc__` 等元信息丢失，`@wraps` 用于解决这个问题。

```python
from functools import wraps

def deprecated(func):
    """标记废弃函数的装饰器"""
    @wraps(func)  # 保留原函数元信息
    def wrapper(*args, **kwargs):
        import warnings
        warnings.warn(
            f"{func.__name__} is deprecated",
            DeprecationWarning,
            stacklevel=2
        )
        return func(*args, **kwargs)
    return wrapper

def cache_result(func):
    """简单缓存装饰器"""
    cache = {}
    @wraps(func)
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    wrapper.cache = cache  # 暴露缓存用于调试
    return wrapper

@deprecated
def old_function():
    """这是一个旧函数"""
    return "old"

@cache_result
def fibonacci(n):
    """计算斐波那契数"""
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# 验证元信息
print(old_function.__name__)  # old_function（不是 wrapper）
print(old_function.__doc__)   # 这是一个旧函数

# 缓存效果
print(fibonacci(30))  # 832040
print(f"Cache size: {len(fibonacci.cache)}")
```

#### 常用内置装饰器原理剖析

```python
# @staticmethod 和 @classmethod 的原理（简化版）
class MyStaticMethod:
    def __init__(self, func):
        self.func = func
    
    def __get__(self, obj, objtype=None):
        return self.func

class MyClassMethod:
    def __init__(self, func):
        self.func = func
    
    def __get__(self, obj, objtype=None):
        if objtype is None:
            objtype = type(obj)
        return lambda *args, **kwargs: self.func(objtype, *args, **kwargs)

# @property 的原理（简化版）
class MyProperty:
    def __init__(self, fget=None, fset=None, fdel=None, doc=None):
        self.fget = fget
        self.fset = fset
        self.fdel = fdel
        self.__doc__ = doc
    
    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        if self.fget is None:
            raise AttributeError("unreadable attribute")
        return self.fget(obj)
    
    def __set__(self, obj, value):
        if self.fset is None:
            raise AttributeError("can't set attribute")
        self.fset(obj, value)
    
    def getter(self, fget):
        return type(self)(fget, self.fset, self.fdel, self.__doc__)
    
    def setter(self, fset):
        return type(self)(self.fget, fset, self.fdel, self.__doc__)

# 使用自定义实现
class Example:
    def __init__(self, value):
        self._value = value
    
    @MyProperty
    def value(self):
        return self._value
    
    @value.setter
    def value(self, v):
        self._value = v
```

#### 装饰器模式的应用场景

```python
from functools import wraps
import time
from typing import Callable

# 1. 权限验证
def require_login(func: Callable) -> Callable:
    """要求用户登录的装饰器"""
    @wraps(func)
    def wrapper(user, *args, **kwargs):
        if not user.get('is_authenticated'):
            raise PermissionError("Login required")
        return func(user, *args, **kwargs)
    return wrapper

# 2. 限流器
def rate_limit(max_calls: int, period: int):
    """限流装饰器"""
    def decorator(func):
        calls = []
        @wraps(func)
        def wrapper(*args, **kwargs):
            now = time.time()
            # 清理过期调用记录
            calls[:] = [c for c in calls if now - c < period]
            if len(calls) >= max_calls:
                raise RuntimeError("Rate limit exceeded")
            calls.append(now)
            return func(*args, **kwargs)
        return wrapper
    return decorator

# 3. 重试机制
def retry(max_attempts: int = 3, delay: float = 1.0, exceptions=(Exception,)):
    """自动重试装饰器"""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except exceptions as e:
                    if attempt == max_attempts - 1:
                        raise
                    time.sleep(delay * (2 ** attempt))  # 指数退避
                    print(f"Retry {attempt + 1}/{max_attempts} after error: {e}")
        return wrapper
    return decorator

# 4. 参数验证
def validate_types(**types):
    """参数类型验证装饰器"""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            # 简化版：仅验证关键字参数
            for arg_name, expected_type in types.items():
                if arg_name in kwargs:
                    if not isinstance(kwargs[arg_name], expected_type):
                        raise TypeError(
                            f"{arg_name} must be {expected_type.__name__}, "
                            f"got {type(kwargs[arg_name]).__name__}"
                        )
            return func(*args, **kwargs)
        return wrapper
    return decorator

# 实际应用
class UserService:
    def __init__(self):
        self.users = {}
    
    @require_login
    def get_profile(self, user):
        return self.users.get(user['id'], {})
    
    @rate_limit(max_calls=5, period=60)
    def send_message(self, message):
        print(f"Sending: {message}")
        return True
    
    @retry(max_attempts=3, delay=0.5, exceptions=(ConnectionError,))
    def fetch_remote_data(self):
        import random
        if random.random() < 0.7:
            raise ConnectionError("Network error")
        return "Remote data"

# 使用
service = UserService()
service.users = {1: {'name': 'Alice'}}

# 登录用户
authenticated_user = {'id': 1, 'is_authenticated': True}
print(service.get_profile(authenticated_user))

# 限流测试
for i in range(7):
    try:
        service.send_message(f"Message {i}")
    except RuntimeError as e:
        print(e)

# 重试测试
print(service.fetch_remote_data())
```

---

### 2.3 迭代器与生成器

迭代器是 Python 中处理序列数据的核心抽象，而生成器则是创建迭代器的优雅方式。理解它们对于编写高效、内存友好的 Python 代码至关重要。

#### 迭代器协议：`__iter__`, `__next__`

迭代器协议要求对象实现 `__iter__()` 返回自身，和 `__next__()` 返回下一个值，没有元素时抛出 `StopIteration`。

```python
class Countdown:
    """倒计时迭代器"""
    def __init__(self, start):
        self.start = start
        self.current = start
    
    def __iter__(self):
        # 返回迭代器对象自身
        self.current = self.start  # 重置计数器
        return self
    
    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        num = self.current
        self.current -= 1
        return num

# 使用
countdown = Countdown(5)
for num in countdown:
    print(num, end=' ')  # 5 4 3 2 1

# 手动迭代
countdown2 = Countdown(3)
iterator = iter(countdown2)
print(next(iterator))  # 3
print(next(iterator))  # 2
```

#### 生成器函数与 yield

生成器函数使用 `yield` 关键字，可以暂停执行并保存状态，下次从暂停处继续。

```python
def fibonacci_generator(n):
    """生成前 n 个斐波那契数"""
    a, b = 0, 1
    count = 0
    while count < n:
        yield a
        a, b = b, a + b
        count += 1

def infinite_counter(start=0, step=1):
    """无限计数器生成器"""
    while True:
        yield start
        start += step

def read_large_file(file_path, chunk_size=1024):
    """逐块读取大文件"""
    with open(file_path, 'r') as f:
        while chunk := f.read(chunk_size):
            yield chunk

# 使用生成器
fib = fibonacci_generator(10)
print(list(fib))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# 无限序列
counter = infinite_counter(100, 5)
for _ in range(5):
    print(next(counter), end=' ')  # 100 105 110 115 120
```

#### 生成器表达式 vs 列表推导式

生成器表达式与列表推导式语法类似，但使用圆括号，且是惰性求值的。

```python
import sys

# 列表推导式：立即计算，占用内存
numbers = [x**2 for x in range(1000000)]
print(f"List size: {sys.getsizeof(numbers)} bytes")  # 约 8MB

# 生成器表达式：惰性求值，内存友好
numbers_gen = (x**2 for x in range(1000000))
print(f"Generator size: {sys.getsizeof(numbers_gen)} bytes")  # 约 112 bytes

# 实际应用对比
def process_data_list(data):
    """使用列表：中间结果全部存储"""
    filtered = [x for x in data if x > 0]
    transformed = [x * 2 for x in filtered]
    result = [x for x in transformed if x > 10]
    return sum(result)

def process_data_generator(data):
    """使用生成器：流水线处理，无中间存储"""
    filtered = (x for x in data if x > 0)
    transformed = (x * 2 for x in filtered)
    result = (x for x in transformed if x > 10)
    return sum(result)  # 每个元素按需计算

# 性能测试
import random
data = [random.randint(-100, 100) for _ in range(1000000)]

import time

start = time.time()
result1 = process_data_list(data)
list_time = time.time() - start

start = time.time()
result2 = process_data_generator(data)
gen_time = time.time() - start

print(f"\nList result: {result1}, time: {list_time:.4f}s")
print(f"Generator result: {result2}, time: {gen_time:.4f}s")
print(f"Generator is {list_time/gen_time:.1f}x faster, uses much less memory")

# 生成器表达式的限制：只能迭代一次
squared = (x**2 for x in range(5))
print(list(squared))  # [0, 1, 4, 9, 16]
print(list(squared))  # []（已耗尽）
```

#### yield from 与协程基础

`yield from` 用于在生成器中委托给子生成器，Python 3.5+ 的 `async/await` 就是基于此。

```python
def sub_generator():
    """子生成器"""
    yield 1
    yield 2
    yield 3

def main_generator():
    """主生成器"""
    yield 'A'
    yield from sub_generator()  # 委托给子生成器
    yield 'B'
    yield from range(3)         # 委托给任何可迭代对象
    yield 'C'

print(list(main_generator()))  # ['A', 1, 2, 3, 'B', 0, 1, 2, 'C']

# 双向通信：协程基础
def averager():
    """计算移动平均值"""
    total = 0.0
    count = 0
    average = None
    while True:
        term = yield average  # 接收发送的值，返回平均值
        if term is None:
            break
        total += term
        count += 1
        average = total / count
    return count, average

# 使用协程
avg = averager()
next(avg)  # 预激（prime）协程
print(avg.send(10))   # 10.0
print(avg.send(20))   # 15.0
print(avg.send(30))   # 20.0

try:
    avg.send(None)  # 发送 None 结束协程
except StopIteration as e:
    print(f"Result: count={e.value[0]}, average={e.value[1]}")

# yield from 处理子生成器的返回值
def delegator():
    result = yield from averager()
    return result

delg = delegator()
next(delg)
delg.send(10)
delg.send(20)
delg.send(30)
try:
    delg.send(None)
except StopIteration as e:
    print(f"Delegator got: {e.value}")  # (3, 20.0)
```

#### itertools 模块常用工具

`itertools` 提供了高效的迭代器工具，用于创建和操作迭代器。

```python
import itertools

# 1. 无限迭代器
print("count:", list(itertools.islice(itertools.count(10, 2), 5)))
# [10, 12, 14, 16, 18]

print("cycle:", list(itertools.islice(itertools.cycle('AB'), 5)))
# ['A', 'B', 'A', 'B', 'A']

print("repeat:", list(itertools.repeat('X', 3)))
# ['X', 'X', 'X']

# 2. 组合迭代器
data = ['A', 'B', 'C']

print("permutations:", list(itertools.permutations(data, 2)))
# [('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'C'), ('C', 'A'), ('C', 'B')]

print("combinations:", list(itertools.combinations(data, 2)))
# [('A', 'B'), ('A', 'C'), ('B', 'C')]

print("combinations_with_replacement:", 
      list(itertools.combinations_with_replacement('AB', 2)))
# [('A', 'A'), ('A', 'B'), ('B', 'B')]

# 3. 组合多个迭代器
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c', 'd']

print("chain:", list(itertools.chain(list1, list2)))
# [1, 2, 3, 'a', 'b', 'c', 'd']

print("zip_longest:", list(itertools.zip_longest(list1, list2, fillvalue='-')))
# [(1, 'a'), (2, 'b'), (3, 'c'), ('-', 'd')]

# 4. 分组
data = [
    ('Alice', 'Engineering'),
    ('Bob', 'Engineering'),
    ('Charlie', 'Sales'),
    ('David', 'Sales'),
    ('Eve', 'Engineering'),
]
# 需要先按分组键排序
data.sort(key=lambda x: x[1])

for department, people in itertools.groupby(data, key=lambda x: x[1]):
    print(f"{department}: {list(people)}")
# Engineering: [('Alice', 'Engineering'), ('Bob', 'Engineering'), ('Eve', 'Engineering')]
# Sales: [('Charlie', 'Sales'), ('David', 'Sales')]

# 5. 实用工具
print("islice:", list(itertools.islice(range(100), 5, 15, 2)))
# [5, 7, 9, 11, 13]

def tail(filename, n=10):
    """返回文件最后 n 行"""
    with open(filename, 'r') as f:
        return list(itertools.islice(itertools.deque(f, maxlen=n), n))

# 6. 累积和 reduce 操作
print("accumulate:", list(itertools.accumulate([1, 2, 3, 4, 5])))
# [1, 3, 6, 10, 15]

print("accumulate with mul:", 
      list(itertools.accumulate([1, 2, 3, 4, 5], lambda x, y: x * y)))
# [1, 2, 6, 24, 120]

# 7. 笛卡尔积
colors = ['red', 'blue']
sizes = ['S', 'M', 'L']
print("product:", list(itertools.product(colors, sizes)))
# [('red', 'S'), ('red', 'M'), ('red', 'L'), ('blue', 'S'), ('blue', 'M'), ('blue', 'L')]

# 实际应用：生成所有测试用例
browsers = ['Chrome', 'Firefox', 'Safari']
os_list = ['Windows', 'macOS', 'Linux']
resolutions = ['1920x1080', '1366x768']

test_cases = list(itertools.product(browsers, os_list, resolutions))
print(f"\nTotal test cases: {len(test_cases)}")
for case in test_cases[:5]:
    print(f"  {case[0]} on {case[1]} at {case[2]}")
```

---

### 2.4 上下文管理器

上下文管理器（Context Manager）是管理资源（文件、锁、连接等）的优雅方式，`with` 语句确保资源正确获取和释放。

#### with 语句的原理

```python
# 传统方式：需要手动关闭
f = open('file.txt', 'w')
try:
    f.write('hello')
finally:
    f.close()  # 确保关闭，即使发生异常

# with 语句：自动管理
with open('file.txt', 'w') as f:
    f.write('hello')  # 自动关闭，即使发生异常

# 等价于
f = open('file.txt', 'w')
exit_method = type(f).__exit__
value = type(f).__enter__(f)
exc = True
try:
    try:
        f.write('hello')
    except:
        exc = False
        if not exit_method(f, *sys.exc_info()):
            raise
finally:
    if exc:
        exit_method(f, None, None, None)
```

#### 自定义上下文管理器

通过实现 `__enter__` 和 `__exit__` 方法创建自定义上下文管理器。

```python
import time
from typing import Optional

class Timer:
    """计时上下文管理器"""
    def __init__(self, name: str = "Operation"):
        self.name = name
        self.start_time: Optional[float] = None
        self.elapsed: Optional[float] = None
    
    def __enter__(self):
        self.start_time = time.time()
        print(f"[{self.name}] Started...")
        return self  # 返回自身，允许 as 获取
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.elapsed = time.time() - self.start_time
        if exc_type is None:
            print(f"[{self.name}] Completed in {self.elapsed:.4f}s")
        else:
            print(f"[{self.name}] Failed after {self.elapsed:.4f}s: {exc_val}")
        return False  # 不抑制异常

class DatabaseConnection:
    """数据库连接上下文管理器"""
    def __init__(self, connection_string: str):
        self.connection_string = connection_string
        self.connection = None
    
    def __enter__(self):
        print(f"Connecting to: {self.connection_string}")
        # 模拟连接
        self.connection = {"connected": True, "id": id(self)}
        return self.connection
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"Closing connection {self.connection['id']}")
        self.connection = None
        return False

class Transaction:
    """事务上下文管理器：支持提交和回滚"""
    def __init__(self, db_connection):
        self.db = db_connection
        self.committed = False
    
    def __enter__(self):
        print("BEGIN TRANSACTION")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is None:
            print("COMMIT")
            self.committed = True
        else:
            print(f"ROLLBACK due to: {exc_val}")
        return False  # 不抑制异常
    
    def execute(self, query):
        print(f"  EXECUTE: {query}")

# 使用示例
with Timer("Heavy computation") as timer:
    time.sleep(0.1)
    # 可以通过 timer 访问上下文对象
    print(f"  Running... elapsed so far: {time.time() - timer.start_time:.4f}s")

with DatabaseConnection("postgresql://localhost/db") as conn:
    print(f"  Using connection: {conn}")

# 事务示例
try:
    with Transaction("db") as tx:
        tx.execute("INSERT INTO users VALUES ('Alice')")
        tx.execute("INSERT INTO accounts VALUES ('Alice', 100)")
        raise ValueError("Simulated error")
except ValueError:
    print("Caught expected error\n")

with Transaction("db") as tx:
    tx.execute("INSERT INTO users VALUES ('Bob')")
    print("Success!")
```

#### contextlib 工具

`contextlib` 模块提供了创建上下文管理器的便捷工具。

```python
from contextlib import contextmanager, closing, suppress, redirect_stdout
import sys
from io import StringIO

# 1. @contextmanager 装饰器
@contextmanager
def managed_file(filename, mode='r'):
    """文件上下文管理器（使用装饰器简化）"""
    print(f"Opening {filename}")
    f = open(filename, mode)
    try:
        yield f  # yield 之前的代码是 __enter__，之后是 __exit__
    finally:
        print(f"Closing {filename}")
        f.close()

@contextmanager
def temporary_attribute(obj, attr, value):
    """临时修改对象属性"""
    old_value = getattr(obj, attr, None)
    setattr(obj, attr, value)
    try:
        yield
    finally:
        if old_value is None:
            delattr(obj, attr)
        else:
            setattr(obj, attr, old_value)

@contextmanager 
def managed_list():
    """管理列表生命周期"""
    items = []
    try:
        yield items
    finally:
        print(f"Cleaned up {len(items)} items")
        items.clear()

# 2. closing 上下文管理器
from urllib.request import urlopen

with closing(urlopen('https://www.example.com')) as response:
    # urlopen 返回的对象没有 __enter__/__exit__，但有 close() 方法
    data = response.read(100)
    print(f"Read {len(data)} bytes")

# 3. suppress 上下文管理器
with suppress(FileNotFoundError):
    # 忽略特定的异常
    with open('nonexistent_file.txt') as f:
        content = f.read()
print("Continued after suppressed exception")

# 4. redirect_stdout 上下文管理器
captured = StringIO()
with redirect_stdout(captured):
    print("This goes to captured string")
    print("This too")
print(f"Captured: {captured.getvalue()}")

# 实际应用：嵌套上下文管理器
from contextlib import ExitStack

@contextmanager
def managed_resource(name):
    print(f"Acquiring {name}")
    yield f"Resource-{name}"
    print(f"Releasing {name}")

# ExitStack 动态管理多个上下文
with ExitStack() as stack:
    resources = []
    for name in ['A', 'B', 'C']:
        resource = stack.enter_context(managed_resource(name))
        resources.append(resource)
    print(f"Using resources: {resources}")
# 所有资源按相反顺序释放

# 实际案例：临时修改系统配置
import os

@contextmanager
def temporary_env_var(key, value):
    """临时设置环境变量"""
    old_value = os.environ.get(key)
    os.environ[key] = value
    try:
        yield
    finally:
        if old_value is None:
            del os.environ[key]
        else:
            os.environ[key] = old_value

with temporary_env_var('API_KEY', 'secret123'):
    print(f"Inside: API_KEY = {os.environ.get('API_KEY')}")
print(f"Outside: API_KEY = {os.environ.get('API_KEY', 'Not set')}")
```

#### 实际应用场景

```python
from contextlib import contextmanager
import threading
import logging

# 场景1：线程锁
lock = threading.Lock()

@contextmanager
def acquire_lock(timeout=None):
    """带超时的锁上下文管理器"""
    if lock.acquire(timeout=timeout):
        try:
            yield True
        finally:
            lock.release()
    else:
        yield False

# 场景2：日志上下文
@contextmanager
def log_context(operation_name, logger=None):
    """自动记录操作开始和结束的上下文"""
    logger = logger or logging.getLogger(__name__)
    logger.info(f"[START] {operation_name}")
    try:
        yield logger
        logger.info(f"[SUCCESS] {operation_name}")
    except Exception as e:
        logger.error(f"[FAILED] {operation_name}: {e}")
        raise

# 场景3：数据库连接池
class ConnectionPool:
    def __init__(self, max_connections=5):
        self.max_connections = max_connections
        self.available = []
        self.in_use = set()
    
    @contextmanager
    def get_connection(self):
        if self.available:
            conn = self.available.pop()
        elif len(self.in_use) < self.max_connections:
            conn = f"Connection-{id(self)}-{len(self.in_use)}"
        else:
            raise RuntimeError("Connection pool exhausted")
        
        self.in_use.add(conn)
        try:
            yield conn
        finally:
            self.in_use.remove(conn)
            self.available.append(conn)

# 场景4：性能分析器
import time
from collections import defaultdict

class PerformanceProfiler:
    def __init__(self):
        self.timings = defaultdict(list)
    
    @contextmanager
    def profile(self, operation):
        start = time.perf_counter()
        try:
            yield
        finally:
            elapsed = time.perf_counter() - start
            self.timings[operation].append(elapsed)
    
    def report(self):
        for op, times in self.timings.items():
            avg = sum(times) / len(times)
            total = sum(times)
            print(f"{op}: {len(times)} calls, avg={avg:.4f}s, total={total:.4f}s")

# 使用示例
profiler = PerformanceProfiler()

for i in range(5):
    with profiler.profile("sleep"):
        time.sleep(0.01)
    
    with profiler.profile("compute"):
        sum(range(10000))

profiler.report()
```

---

### 2.5 并发与异步编程

Python 提供了多种并发编程模型：多线程、多进程和异步编程。理解它们的适用场景和限制，是编写高性能 Python 程序的关键。

#### GIL（全局解释器锁）详解与影响

```python
"""
GIL（Global Interpreter Lock）是 CPython 解释器的机制，它确保同一时刻
只有一个线程执行 Python 字节码。这意味着：

1. 多线程不能并行执行 CPU 密集型任务
2. 多线程适用于 I/O 密集型任务（等待期间释放 GIL）
3. 多进程可以绕过 GIL，实现真正的并行

GIL 存在的原因：
- 简化 C 扩展开发
- 避免多线程内存管理的复杂性
- 单线程程序性能更好

nogil Python（3.13+ 实验性）正在开发中，未来可能会改变这一状况。
"""

import threading
import multiprocessing
import time

def cpu_bound_task(n):
    """CPU 密集型任务"""
    count = 0
    for i in range(n):
        count += i ** 2
    return count

def io_bound_task(duration):
    """I/O 密集型任务"""
    time.sleep(duration)
    return f"Slept for {duration}s"

# 演示 GIL 的影响
N = 10_000_000

# 单线程
start = time.time()
cpu_bound_task(N)
cpu_bound_task(N)
single_thread_time = time.time() - start
print(f"Single thread: {single_thread_time:.2f}s")

# 多线程（GIL 限制，不会更快）
start = time.time()
t1 = threading.Thread(target=cpu_bound_task, args=(N,))
t2 = threading.Thread(target=cpu_bound_task, args=(N,))
t1.start()
t2.start()
t1.join()
t2.join()
multi_thread_time = time.time() - start
print(f"Multi thread (CPU bound): {multi_thread_time:.2f}s")
print(f"Speedup: {single_thread_time/multi_thread_time:.2f}x (ideally ~1.0 due to GIL)")

# 多进程（真正并行）
start = time.time()
p1 = multiprocessing.Process(target=cpu_bound_task, args=(N,))
p2 = multiprocessing.Process(target=cpu_bound_task, args=(N,))
p1.start()
p2.start()
p1.join()
p2.join()
multi_process_time = time.time() - start
print(f"Multi process: {multi_process_time:.2f}s")
print(f"Speedup: {single_thread_time/multi_process_time:.2f}x")
```

#### threading 多线程：适用场景与限制

```python
import threading
import time
import queue
from concurrent.futures import ThreadPoolExecutor, as_completed

# 1. 基础线程创建
def worker(name, duration):
    print(f"Thread {name} starting")
    time.sleep(duration)
    print(f"Thread {name} finished")

# 方式1：直接使用 Thread 类
thread1 = threading.Thread(target=worker, args=("A", 0.5))
thread2 = threading.Thread(target=worker, args=("B", 0.3))
thread1.start()
thread2.start()
thread1.join()
thread2.join()

# 方式2：继承 Thread 类
class MyThread(threading.Thread):
    def __init__(self, name, duration):
        super().__init__()
        self.name = name
        self.duration = duration
        self.result = None
    
    def run(self):
        self.result = worker(self.name, self.duration)

# 2. 线程同步：Lock
class BankAccount:
    def __init__(self, balance=0):
        self.balance = balance
        self._lock = threading.Lock()
    
    def deposit(self, amount):
        with self._lock:  # 自动获取和释放锁
            new_balance = self.balance + amount
            time.sleep(0.001)  # 模拟处理时间
            self.balance = new_balance
    
    def withdraw(self, amount):
        with self._lock:
            if self.balance >= amount:
                new_balance = self.balance - amount
                time.sleep(0.001)
                self.balance = new_balance
                return True
            return False

# 测试线程安全
account = BankAccount(1000)

def make_transactions(account, deposit_count, withdraw_count):
    for _ in range(deposit_count):
        account.deposit(1)
    for _ in range(withdraw_count):
        account.withdraw(1)

threads = []
for _ in range(10):
    t = threading.Thread(target=make_transactions, args=(account, 100, 100))
    threads.append(t)
    t.start()

for t in threads:
    t.join()

print(f"Final balance: {account.balance}")  # 应该是 1000

# 3. 其他同步原语
# RLock: 可重入锁（同一线程可以多次获取）
rlock = threading.RLock()

# Semaphore: 信号量，限制并发数量
semaphore = threading.Semaphore(3)  # 最多3个线程同时执行

def limited_resource(id):
    with semaphore:
        print(f"Thread {id} accessing limited resource")
        time.sleep(0.5)

# Event: 事件通知
event = threading.Event()

def waiter():
    print("Waiting for event...")
    event.wait()
    print("Event received!")

def setter():
    time.sleep(1)
    event.set()
    print("Event set")

# Condition: 条件变量
condition = threading.Condition()
shared_data = []

def producer():
    for i in range(5):
        with condition:
            shared_data.append(i)
            print(f"Produced: {i}")
            condition.notify()
        time.sleep(0.1)

def consumer():
    for _ in range(5):
        with condition:
            while not shared_data:
                condition.wait()
            item = shared_data.pop(0)
            print(f"Consumed: {item}")

# 4. ThreadPoolExecutor（推荐）
def fetch_url(url):
    """模拟 HTTP 请求"""
    time.sleep(0.5)
    return f"Data from {url}"

urls = ["url1", "url2", "url3", "url4", "url5"]

# 串行执行
start = time.time()
results = [fetch_url(url) for url in urls]
print(f"Serial: {time.time() - start:.2f}s")

# 并行执行
start = time.time()
with ThreadPoolExecutor(max_workers=3) as executor:
    # 方式1：map
    results = list(executor.map(fetch_url, urls))
    
    # 方式2：submit + as_completed
    futures = {executor.submit(fetch_url, url): url for url in urls}
    for future in as_completed(futures):
        url = futures[future]
        try:
            result = future.result()
            print(f"{url}: {result}")
        except Exception as e:
            print(f"{url} generated an exception: {e}")

print(f"Parallel: {time.time() - start:.2f}s")

# 5. 线程本地存储
thread_local = threading.local()

def process_request(request_id):
    thread_local.request_id = request_id
    print(f"Processing request {thread_local.request_id} in thread {threading.current_thread().name}")

with ThreadPoolExecutor(max_workers=3) as executor:
    executor.map(process_request, range(10))
```

#### multiprocessing 多进程

```python
import multiprocessing as mp
import time
import os

# 1. 基础进程创建
def worker_process(name, data):
    print(f"Process {name} (PID: {os.getpid()}) working on {data}")
    time.sleep(0.5)
    return f"Result from {name}"

if __name__ == "__main__":
    # 方式1：直接使用 Process
    process1 = mp.Process(target=worker_process, args=("P1", "data1"))
    process2 = mp.Process(target=worker_process, args=("P2", "data2"))
    
    process1.start()
    process2.start()
    process1.join()
    process2.join()
    
    # 2. 进程间通信
    # Queue: 进程安全队列
    def producer(queue):
        for i in range(5):
            queue.put(f"Item {i}")
            time.sleep(0.1)
        queue.put(None)  # 结束信号
    
    def consumer(queue):
        while True:
            item = queue.get()
            if item is None:
                break
            print(f"Consumed: {item}")
    
    queue = mp.Queue()
    p = mp.Process(target=producer, args=(queue,))
    c = mp.Process(target=consumer, args=(queue,))
    p.start()
    c.start()
    p.join()
    c.join()
    
    # Pipe: 双向通信
    def send_data(conn, data):
        conn.send(data)
        conn.close()
    
    parent_conn, child_conn = mp.Pipe()
    p = mp.Process(target=send_data, args=(child_conn, "Hello from child"))
    p.start()
    print(parent_conn.recv())  # Hello from child
    p.join()
    
    # 3. 共享内存
    def increment_shared(counter, lock):
        for _ in range(1000):
            with lock:
                counter.value += 1
    
    counter = mp.Value('i', 0)  # 'i' 表示整数
    lock = mp.Lock()
    
    processes = []
    for _ in range(10):
        p = mp.Process(target=increment_shared, args=(counter, lock))
        processes.append(p)
        p.start()
    
    for p in processes:
        p.join()
    
    print(f"Counter value: {counter.value}")  # 应该是 10000
    
    # Array: 共享数组
    shared_array = mp.Array('d', [1.0, 2.0, 3.0])  # 'd' 表示双精度浮点
    
    # 4. 进程池
    def cpu_task(n):
        """CPU 密集型任务"""
        total = 0
        for i in range(n):
            total += i * i
        return total
    
    numbers = [1000000, 2000000, 1500000, 3000000]
    
    # 串行
    start = time.time()
    serial_results = [cpu_task(n) for n in numbers]
    print(f"Serial: {time.time() - start:.2f}s")
    
    # 并行（进程池）
    start = time.time()
    with mp.Pool(processes=mp.cpu_count()) as pool:
        # 方式1：map
        parallel_results = pool.map(cpu_task, numbers)
        
        # 方式2：apply_async（非阻塞）
        async_results = [pool.apply_async(cpu_task, (n,)) for n in numbers]
        async_results = [r.get() for r in async_results]
        
        # 方式3：imap（迭代器，结果按输入顺序）
        for result in pool.imap(cpu_task, numbers):
            print(f"Result: {result}")
        
        # 方式4：imap_unordered（迭代器，结果按完成顺序）
        for result in pool.imap_unordered(cpu_task, numbers):
            print(f"Result: {result}")
    
    print(f"Parallel: {time.time() - start:.2f}s")
    
    # 5. Manager: 更灵活的共享状态
    with mp.Manager() as manager:
        shared_list = manager.list()
        shared_dict = manager.dict()
        
        def modify_shared(shared_list, shared_dict, id):
            shared_list.append(f"Item from {id}")
            shared_dict[id] = f"Value from {id}"
        
        processes = []
        for i in range(5):
            p = mp.Process(target=modify_shared, args=(shared_list, shared_dict, i))
            processes.append(p)
            p.start()
        
        for p in processes:
            p.join()
        
        print(f"List: {list(shared_list)}")
        print(f"Dict: {dict(shared_dict)}")
```

#### concurrent.futures

```python
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor, as_completed
import time
import requests

def cpu_intensive(n):
    """CPU 密集型"""
    count = 0
    for i in range(n):
        count += i ** 2
    return count

def io_intensive(url):
    """I/O 密集型"""
    try:
        response = requests.get(url, timeout=5)
        return f"{url}: {response.status_code}"
    except Exception as e:
        return f"{url}: Error {e}"

# 统一接口，简化并发编程
# CPU 密集型 -> ProcessPoolExecutor
# I/O 密集型 -> ThreadPoolExecutor

# 示例：统一处理不同任务类型
class TaskScheduler:
    def __init__(self, max_workers=None):
        self.max_workers = max_workers
    
    def map_cpu_tasks(self, func, items):
        """CPU 密集型任务使用进程池"""
        with ProcessPoolExecutor(max_workers=self.max_workers) as executor:
            return list(executor.map(func, items))
    
    def map_io_tasks(self, func, items):
        """I/O 密集型任务使用线程池"""
        with ThreadPoolExecutor(max_workers=self.max_workers) as executor:
            return list(executor.map(func, items))
    
    def submit_tasks(self, func, items, use_processes=False):
        """提交任务并获取结果"""
        Executor = ProcessPoolExecutor if use_processes else ThreadPoolExecutor
        results = []
        with Executor(max_workers=self.max_workers) as executor:
            futures = [executor.submit(func, item) for item in items]
            for future in as_completed(futures):
                try:
                    results.append(future.result())
                except Exception as e:
                    results.append(f"Error: {e}")
        return results

# 使用示例
scheduler = TaskScheduler(max_workers=4)

# CPU 任务
numbers = [1000000, 1500000, 2000000]
results = scheduler.map_cpu_tasks(cpu_intensive, numbers)
print(f"CPU results: {results}")

# I/O 任务（需要 requests 库）
# urls = ["https://api.github.com", "https://httpbin.org/get"]
# results = scheduler.map_io_tasks(io_intensive, urls)
# print(f"IO results: {results}")

# 带超时的执行
with ThreadPoolExecutor(max_workers=2) as executor:
    future = executor.submit(time.sleep, 5)
    try:
        result = future.result(timeout=1)  # 1秒超时
    except TimeoutError:
        print("Task timed out")
```

#### asyncio 异步编程

```python
import asyncio
import aiohttp
import time

# 1. 基础协程
async def say_hello(name, delay):
    print(f"Hello {name}, sleeping for {delay}s")
    await asyncio.sleep(delay)  # 非阻塞等待
    print(f"Goodbye {name}")
    return f"Result for {name}"

async def main():
    # 方式1：顺序执行
    result1 = await say_hello("Alice", 1)
    result2 = await say_hello("Bob", 1)
    print(f"Sequential results: {result1}, {result2}")
    
    # 方式2：并发执行
    task1 = asyncio.create_task(say_hello("Carol", 1))
    task2 = asyncio.create_task(say_hello("David", 1))
    results = await asyncio.gather(task1, task2)
    print(f"Concurrent results: {results}")
    
    # 方式3：gather（推荐）
    results = await asyncio.gather(
        say_hello("Eve", 1),
        say_hello("Frank", 1),
        say_hello("Grace", 1)
    )
    print(f"Gather results: {results}")

# 运行
# asyncio.run(main())

# 2. 事件循环详解
loop = asyncio.new_event_loop()
asyncio.set_event_loop(loop)

try:
    result = loop.run_until_complete(say_hello("Test", 0.1))
    print(f"Result: {result}")
finally:
    loop.close()

# 3. Task 与 Future
task = asyncio.create_task(say_hello("Task", 0.5))
# task.cancel()  # 取消任务
# task.done()    # 检查是否完成
# task.result()  # 获取结果

# 4. 异步 HTTP 请求
async def fetch_url(session, url):
    async with session.get(url) as response:
        return {
            'url': url,
            'status': response.status,
            'content_length': len(await response.text())
        }

async def fetch_all(urls):
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_url(session, url) for url in urls]
        return await asyncio.gather(*tasks)

# 使用
urls = [
    "https://api.github.com",
    "https://httpbin.org/get",
    "https://jsonplaceholder.typicode.com/posts/1"
]

# 同步版本（对比）
def fetch_sync(urls):
    import requests
    results = []
    for url in urls:
        response = requests.get(url, timeout=5)
        results.append({
            'url': url,
            'status': response.status_code,
            'content_length': len(response.text)
        })
    return results

# 性能对比（模拟）
print("\nPerformance comparison:")

# 模拟异步 fetch
async def mock_fetch_all(n):
    async def mock_fetch(i):
        await asyncio.sleep(0.1)
        return i
    return await asyncio.gather(*[mock_fetch(i) for i in range(n)])

start = time.time()
asyncio.run(mock_fetch_all(10))
async_time = time.time() - start
print(f"Async (10 concurrent requests): {async_time:.2f}s")

start = time.time()
for i in range(10):
    time.sleep(0.1)
sync_time = time.time() - start
print(f"Sync (10 sequential requests): {sync_time:.2f}s")
print(f"Speedup: {sync_time/async_time:.1f}x")

# 5. 异步上下文管理器
class AsyncDatabase:
    async def connect(self):
        await asyncio.sleep(0.1)
        print("Connected to database")
        return self
    
    async def disconnect(self):
        await asyncio.sleep(0.1)
        print("Disconnected from database")
    
    async def query(self, sql):
        await asyncio.sleep(0.1)
        return f"Result of: {sql}"
    
    async def __aenter__(self):
        await self.connect()
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        await self.disconnect()

async def use_db():
    async with AsyncDatabase() as db:
        result = await db.query("SELECT * FROM users")
        print(result)

# asyncio.run(use_db())

# 6. 异步迭代器
class AsyncCounter:
    def __init__(self, limit):
        self.limit = limit
        self.current = 0
    
    def __aiter__(self):
        return self
    
    async def __anext__(self):
        if self.current >= self.limit:
            raise StopAsyncIteration
        await asyncio.sleep(0.01)
        self.current += 1
        return self.current

async def iterate():
    async for num in AsyncCounter(5):
        print(f"Got: {num}")

# asyncio.run(iterate())

# 7. 异步生成器
async def async_range(n):
    for i in range(n):
        await asyncio.sleep(0.01)
        yield i

async def use_async_generator():
    async for num in async_range(5):
        print(f"Generated: {num}")

# asyncio.run(use_async_generator())

# 8. 竞争条件和同步
asyncio_lock = asyncio.Lock()
asyncio_event = asyncio.Event()
asyncio_condition = asyncio.Condition()
asyncio_semaphore = asyncio.Semaphore(3)

shared_counter = 0

async def increment_with_lock():
    global shared_counter
    async with asyncio_lock:
        current = shared_counter
        await asyncio.sleep(0.001)  # 模拟处理
        shared_counter = current + 1

async def run_concurrent_increments():
    global shared_counter
    shared_counter = 0
    await asyncio.gather(*[increment_with_lock() for _ in range(100)])
    print(f"Final counter: {shared_counter}")  # 应该是 100

# asyncio.run(run_concurrent_increments())
```

#### 并发模型对比与选择指南

```python
"""
并发模型选择决策树：

1. CPU 密集型任务（计算、数据处理）
   └─> multiprocessing / ProcessPoolExecutor
   └─> 绕过 GIL，实现真正并行
   
2. I/O 密集型任务（网络、文件）
   ├─> 大量连接，高并发 -> asyncio
   ├─> 中等并发，简单场景 -> threading / ThreadPoolExecutor
   └─> 阻塞 I/O 库 -> threading

3. 混合任务
   └─> asyncio + run_in_executor（线程/进程池）

性能对比示例：
"""

import time
import multiprocessing as mp
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor
import asyncio

def benchmark(func, *args):
    start = time.time()
    result = func(*args)
    return result, time.time() - start

# 测试任务
def cpu_task(n):
    """CPU 密集型"""
    return sum(i * i for i in range(n))

def io_task(duration):
    """I/O 密集型（模拟）"""
    time.sleep(duration)
    return "done"

# 1. CPU 密集型对比
def serial_cpu(tasks):
    return [cpu_task(t) for t in tasks]

def threaded_cpu(tasks):
    with ThreadPoolExecutor() as executor:
        return list(executor.map(cpu_task, tasks))

def processed_cpu(tasks):
    with ProcessPoolExecutor() as executor:
        return list(executor.map(cpu_task, tasks))

tasks = [500000] * 4
print("CPU Intensive Task Comparison:")
print(f"  Serial:   {benchmark(serial_cpu, tasks)[1]:.3f}s")
print(f"  Threaded: {benchmark(threaded_cpu, tasks)[1]:.3f}s (GIL limited)")
print(f"  Process:  {benchmark(processed_cpu, tasks)[1]:.3f}s")

# 2. I/O 密集型对比
def serial_io(tasks):
    return [io_task(t) for t in tasks]

def threaded_io(tasks):
    with ThreadPoolExecutor(max_workers=len(tasks)) as executor:
        return list(executor.map(io_task, tasks))

async def async_io_task(duration):
    await asyncio.sleep(duration)
    return "done"

async def async_io(tasks):
    return await asyncio.gather(*[async_io_task(t) for t in tasks])

tasks = [0.1] * 10
print("\nI/O Intensive Task Comparison:")
print(f"  Serial:   {benchmark(serial_io, tasks)[1]:.3f}s")
print(f"  Threaded: {benchmark(threaded_io, tasks)[1]:.3f}s")
print(f"  Asyncio:  {benchmark(asyncio.run, async_io(tasks))[1]:.3f}s")
```

---

### 2.6 类型提示与静态检查

类型提示（Type Hints）是 Python 3.5+ 引入的特性，它允许开发者为变量、函数参数和返回值添加类型注解。虽然 Python 仍然是动态类型语言，但类型提示能显著提高代码可读性和可维护性，并支持静态类型检查工具如 mypy。

#### 类型注解基础

```python
from typing import List, Dict, Set, Tuple, Optional, Union, Any, Callable

# 基础类型
age: int = 25
name: str = "Alice"
pi: float = 3.14159
is_valid: bool = True
nothing: None = None

# 容器类型
numbers: List[int] = [1, 2, 3]
scores: Dict[str, float] = {"Alice": 95.5, "Bob": 87.0}
unique_tags: Set[str] = {"python", "typing", "mypy"}
coordinates: Tuple[float, float] = (10.5, 20.3)

# 可选类型（可能为 None）
def find_user(user_id: int) -> Optional[str]:
    users = {1: "Alice", 2: "Bob"}
    return users.get(user_id)  # 可能返回 None

# 联合类型（多种可能）
def parse_value(value: Union[str, int, float]) -> float:
    return float(value)

# Python 3.10+ 语法
# def parse_value(value: str | int | float) -> float:
#     return float(value)

# 任意类型（尽量少用）
def log_message(message: Any) -> None:
    print(f"LOG: {message}")

# 函数类型
def executor(
    callback: Callable[[int, int], int],
    a: int,
    b: int
) -> int:
    return callback(a, b)

result = executor(lambda x, y: x + y, 1, 2)

# 返回多个值
def get_user_info() -> Tuple[str, int, bool]:
    return "Alice", 25, True

name, age, active = get_user_info()
```

#### typing 模块详解

```python
from typing import (
    List, Dict, Set, Tuple, Optional, Union, Any,
    Callable, TypeVar, Generic, Protocol,
    Iterator, Iterable, Sequence, Mapping,
    NamedTuple, TypedDict, Final, Literal
)

# TypeVar: 泛型类型变量
T = TypeVar('T')  # 任意类型
K = TypeVar('K')  # 键类型
V = TypeVar('V')  # 值类型
Number = TypeVar('Number', int, float)  # 限制为特定类型

# 泛型函数
def first(container: List[T]) -> Optional[T]:
    return container[0] if container else None

def identity(value: T) -> T:
    return value

# 泛型类
class Stack(Generic[T]):
    def __init__(self) -> None:
        self._items: List[T] = []
    
    def push(self, item: T) -> None:
        self._items.append(item)
    
    def pop(self) -> Optional[T]:
        return self._items.pop() if self._items else None
    
    def peek(self) -> Optional[T]:
        return self._items[-1] if self._items else None

# 使用
int_stack: Stack[int] = Stack()
int_stack.push(1)
int_stack.push(2)
# int_stack.push("three")  # mypy 报错

# Protocol（结构化子类型/鸭子类型）
class Drawable(Protocol):
    """任何实现了 draw 方法的对象"""
    def draw(self) -> None:
        ...

class Circle:
    def draw(self) -> None:
        print("Drawing circle")

class Square:
    def draw(self) -> None:
        print("Drawing square")

def render_all(items: List[Drawable]) -> None:
    for item in items:
        item.draw()

render_all([Circle(), Square()])  # 不需要显式继承

# 更多容器类型
from collections.abc import Iterator, Iterable

def process_items(items: Iterable[int]) -> Iterator[str]:
    for item in items:
        yield str(item)

def get_first_n(items: Sequence[T], n: int) -> List[T]:
    """Sequence: 支持索引和长度"""
    return list(items[:n])

def lookup_value(mapping: Mapping[str, int], key: str) -> Optional[int]:
    """Mapping: 只读字典接口"""
    return mapping.get(key)

# NamedTuple
class Point(NamedTuple):
    x: float
    y: float
    
    def distance_from_origin(self) -> float:
        return (self.x ** 2 + self.y ** 2) ** 0.5

p = Point(3, 4)
print(p.x, p.y)  # 3 4

# TypedDict（3.8+）
class UserDict(TypedDict):
    name: str
    age: int
    email: Optional[str]

user: UserDict = {"name": "Alice", "age": 30, "email": None}

# Final: 不可变
MAX_SIZE: Final = 100
# MAX_SIZE = 200  # mypy 报错

# Literal: 字面量类型
def set_alignment(align: Literal["left", "center", "right"]) -> None:
    print(f"Align: {align}")

set_alignment("left")    # OK
# set_alignment("top")   # mypy 报错

# 重载（函数根据参数类型返回不同类型）
from typing import overload

@overload
def process(value: int) -> str:
    ...

@overload
def process(value: str) -> int:
    ...

def process(value: Union[int, str]) -> Union[str, int]:
    if isinstance(value, int):
        return str(value)
    return len(value)

reveal_type(process(42))    # mypy 推断为 str
reveal_type(process("hi"))  # mypy 推断为 int
```

#### mypy 静态类型检查器使用

```python
# 安装: pip install mypy
# 使用: mypy script.py

# mypy.ini 配置示例
"""
[mypy]
python_version = 3.10
warn_return_any = True
warn_unused_configs = True
disallow_untyped_defs = True
disallow_incomplete_defs = True
check_untyped_defs = True
disallow_untyped_decorators = False
no_implicit_optional = True
warn_redundant_casts = True
warn_unused_ignores = True
warn_no_return = True
warn_unreachable = True
strict_equality = True

[mypy-requests.*]
ignore_missing_imports = True
"""

# 常见类型检查场景

# 1. 类型推断
from typing import reveal_type

x = 1  # mypy 推断为 int
y = "hello"  # mypy 推断为 str

# reveal_type(x)  # 显示推断类型（实际代码中注释掉）

# 2. 类型忽略
import some_untyped_library  # type: ignore

# 3. 显式类型声明
def problematic_function() -> Any:
    # 尽量避免返回 Any
    return get_unknown_data()

# 4. 类型守卫
from typing import TypeGuard

def is_str_list(val: List[Any]) -> TypeGuard[List[str]]:
    """类型守卫函数"""
    return all(isinstance(x, str) for x in val)

def process_list(items: List[Any]) -> None:
    if is_str_list(items):
        # mypy 知道这里是 List[str]
        print(items[0].upper())

# 5. 运行时类型检查（用于调试）
from typing import get_type_hints

def get_hints(func):
    return get_type_hints(func)

print(get_hints(first))
```

#### 类型提示的最佳实践

```python
"""
类型提示最佳实践：

1. 渐进式采用
   - 从核心模块开始
   - 公共 API 优先
   - 使用 mypy --strict 逐步收紧

2. 常见模式
   - 使用 Optional[X] 而非 Union[X, None]
   - 优先使用具体类型（List vs Sequence）
   - 避免过度使用 Any
   - 利用 TypeVar 创建泛型代码

3. 与文档结合
   - 类型提示是文档的一部分
   - 复杂逻辑仍需 docstring
"""

from typing import TypeVar, Generic, Callable
from functools import wraps

T = TypeVar('T')
R = TypeVar('R')

# 泛型装饰器示例
def cache_with_ttl(seconds: int) -> Callable[[Callable[..., R]], Callable[..., R]]:
    def decorator(func: Callable[..., R]) -> Callable[..., R]:
        cache: Dict[str, Tuple[R, float]] = {}
        
        @wraps(func)
        def wrapper(*args: Any, **kwargs: Any) -> R:
            key = str(args) + str(sorted(kwargs.items()))
            if key in cache:
                result, timestamp = cache[key]
                if time.time() - timestamp < seconds:
                    return result
            
            result = func(*args, **kwargs)
            cache[key] = (result, time.time())
            return result
        
        return wrapper
    return decorator

# 完整的类型注解示例
from dataclasses import dataclass
from datetime import datetime
from typing import List, Optional

@dataclass
class User:
    id: int
    username: str
    email: str
    created_at: datetime
    is_active: bool = True
    
    def deactivate(self) -> None:
        self.is_active = False

class UserRepository:
    def __init__(self) -> None:
        self._users: Dict[int, User] = {}
        self._next_id: int = 1
    
    def create(self, username: str, email: str) -> User:
        user = User(
            id=self._next_id,
            username=username,
            email=email,
            created_at=datetime.now()
        )
        self._users[user.id] = user
        self._next_id += 1
        return user
    
    def get_by_id(self, user_id: int) -> Optional[User]:
        return self._users.get(user_id)
    
    def get_all(self) -> List[User]:
        return list(self._users.values())
    
    def update(self, user_id: int, **kwargs: Any) -> Optional[User]:
        user = self._users.get(user_id)
        if user:
            for key, value in kwargs.items():
                if hasattr(user, key):
                    setattr(user, key, value)
        return user

# 使用
repo = UserRepository()
user = repo.create("alice", "alice@example.com")
print(user)
```

---

### 2.7 测试与调试

测试是软件工程的核心实践。Python 提供了丰富的测试工具和框架，从标准库的 `unittest` 到现代测试框架 `pytest`，再到调试工具和 Mock 技术。

#### unittest 框架基础

```python
import unittest
from typing import List

class Calculator:
    def add(self, a: float, b: float) -> float:
        return a + b
    
    def divide(self, a: float, b: float) -> float:
        if b == 0:
            raise ValueError("Cannot divide by zero")
        return a / b
    
    def average(self, numbers: List[float]) -> float:
        if not numbers:
            raise ValueError("Empty list")
        return sum(numbers) / len(numbers)

class TestCalculator(unittest.TestCase):
    """Calculator 测试类"""
    
    def setUp(self):
        """每个测试方法前执行"""
        self.calc = Calculator()
    
    def tearDown(self):
        """每个测试方法后执行"""
        pass
    
    @classmethod
    def setUpClass(cls):
        """测试类开始前执行一次"""
        print("Setting up test class")
    
    @classmethod
    def tearDownClass(cls):
        """测试类结束后执行一次"""
        print("Tearing down test class")
    
    def test_add(self):
        """测试加法"""
        self.assertEqual(self.calc.add(2, 3), 5)
        self.assertEqual(self.calc.add(-1, 1), 0)
        self.assertAlmostEqual(self.calc.add(0.1, 0.2), 0.3, places=7)
    
    def test_divide(self):
        """测试除法"""
        self.assertEqual(self.calc.divide(6, 2), 3)
        self.assertAlmostEqual(self.calc.divide(1, 3), 0.333333, places=5)
    
    def test_divide_by_zero(self):
        """测试除以零异常"""
        with self.assertRaises(ValueError) as context:
            self.calc.divide(5, 0)
        self.assertEqual(str(context.exception), "Cannot divide by zero")
    
    def test_average(self):
        """测试平均值"""
        self.assertEqual(self.calc.average([1, 2, 3, 4, 5]), 3)
        self.assertEqual(self.calc.average([10]), 10)
    
    def test_average_empty(self):
        """测试空列表"""
        with self.assertRaises(ValueError):
            self.calc.average([])
    
    def test_truthiness(self):
        """测试各种断言方法"""
        self.assertTrue(True)
        self.assertFalse(False)
        self.assertIsNone(None)
        self.assertIsNotNone("not none")
        self.assertIn(2, [1, 2, 3])
        self.assertNotIn(4, [1, 2, 3])
        self.assertIsInstance("hello", str)
        self.assertGreater(5, 3)
        self.assertLess(3, 5)
        self.assertAlmostEqual(3.14159, 3.14, places=2)

# 运行测试
# python -m unittest test_calculator.py
# python -m unittest test_calculator.TestCalculator
# python -m unittest test_calculator.TestCalculator.test_add

if __name__ == '__main__':
    unittest.main()
```

#### pytest 现代测试框架

```python
"""
pytest 是 Python 最流行的测试框架，比 unittest 更简洁强大。

安装: pip install pytest pytest-cov pytest-xdist

运行:
  pytest                    # 运行所有测试
  pytest -v                 # 详细输出
  pytest -x                 # 遇到失败立即停止
  pytest -k "test_add"      # 按名称过滤
  pytest --cov=src          # 覆盖率报告
  pytest -n auto            # 并行执行
"""

import pytest
from typing import List

# pytest 使用普通函数，无需继承
class TestWithPytest:
    @pytest.fixture
    def calculator(self):
        """夹具（fixture）：提供测试资源"""
        return Calculator()
    
    @pytest.fixture(scope="class")
    def shared_resource(self):
        """类级别的夹具"""
        print("Creating shared resource")
        yield "resource"
        print("Cleaning up shared resource")
    
    def test_add(self, calculator):
        assert calculator.add(2, 3) == 5
        assert calculator.add(-1, 1) == 0
    
    def test_divide(self, calculator):
        assert calculator.divide(6, 2) == 3
    
    def test_divide_by_zero(self, calculator):
        with pytest.raises(ValueError, match="Cannot divide by zero"):
            calculator.divide(5, 0)

# 参数化测试
@pytest.mark.parametrize("a,b,expected", [
    (2, 3, 5),
    (-1, 1, 0),
    (0, 0, 0),
    (100, 200, 300),
])
def test_add_parametrized(a, b, expected):
    calc = Calculator()
    assert calc.add(a, b) == expected

@pytest.mark.parametrize("numbers,expected", [
    ([1, 2, 3], 2),
    ([10, 20, 30], 20),
    ([5], 5),
])
def test_average_parametrized(numbers, expected):
    calc = Calculator()
    assert calc.average(numbers) == expected

# 标记与跳过
@pytest.mark.slow
def test_slow_operation():
    """标记为慢测试"""
    import time
    time.sleep(1)
    assert True

@pytest.mark.skip(reason="功能尚未实现")
def test_future_feature():
    pass

@pytest.mark.skipif(
    sys.platform == "win32",
    reason="Windows 不支持此功能"
)
def test_unix_only():
    pass

@pytest.mark.xfail(reason="已知缺陷，暂时允许失败")
def test_known_bug():
    assert 1 == 2

# 夹具进阶
@pytest.fixture
def temp_file(tmp_path):
    """使用内置 tmp_path 夹具"""
    file_path = tmp_path / "test.txt"
    file_path.write_text("Hello, World!")
    return file_path

def test_file_content(temp_file):
    content = temp_file.read_text()
    assert content == "Hello, World!"

# 夹具工厂
@pytest.fixture
def make_user():
    def _make_user(name: str, age: int = 25):
        return {"name": name, "age": age}
    return _make_user

def test_user_factory(make_user):
    user1 = make_user("Alice")
    user2 = make_user("Bob", 30)
    assert user1["age"] == 25
    assert user2["age"] == 30

# conftest.py - 共享夹具
# 放在测试目录根目录，所有测试都可使用其中的夹具
"""
# conftest.py 内容示例:
import pytest

@pytest.fixture(scope="session")
def database():
    db = create_test_database()
    yield db
    db.cleanup()
"""

# 插件：pytest-cov 覆盖率
"""
pytest --cov=src --cov-report=html --cov-report=term-missing
"""
```

#### 测试覆盖率

```python
"""
测试覆盖率是衡量测试完整性的指标。

工具:
- coverage.py: 基础覆盖率工具
- pytest-cov: pytest 集成

指标:
- 语句覆盖率 (Statement Coverage)
- 分支覆盖率 (Branch Coverage)
- 条件覆盖率 (Condition Coverage)
"""

# 安装: pip install coverage pytest-cov

# 使用 coverage.py
"""
coverage run -m pytest
coverage report
coverage html  # 生成 HTML 报告
"""

# 使用 pytest-cov
"""
pytest --cov=src --cov-report=term-missing
pytest --cov=src --cov-report=html --cov-fail-under=80
"""

# .coveragerc 配置
"""
[run]
source = src
omit = 
    */tests/*
    */venv/*
    setup.py

[report]
exclude_lines =
    pragma: no cover
    def __repr__
    raise AssertionError
    raise NotImplementedError
    if __name__ == .__main__.:
"""
```

#### 调试技巧

```python
"""
调试是开发中不可避免的环节，掌握高效的调试技巧能大幅提升开发效率。
"""

# 1. print 调试的艺术

def debug_print(value, label="DEBUG"):
    """增强版 print 调试"""
    import inspect
    caller = inspect.currentframe().f_back
    filename = caller.f_code.co_filename.split('/')[-1]
    line_no = caller.f_lineno
    print(f"[{label}] {filename}:{line_no} -> {value!r}")

# 2. 日志调试
import logging

# 配置日志
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('app.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

def complex_operation():
    logger.debug("Starting complex operation")
    try:
        result = 1 / 0
    except ZeroDivisionError:
        logger.exception("Division by zero occurred")
    logger.info("Operation completed")

# 3. pdb 交互式调试
"""
在代码中插入断点:
import pdb; pdb.set_trace()

Python 3.7+ 使用:
breakpoint()

常用命令:
- n(ext): 执行下一行
- s(tep): 进入函数
- c(ontinue): 继续执行
- l(ist): 显示代码
- p(rint): 打印变量
- pp: 美观打印
- w(here): 显示调用栈
- q(uit): 退出
"""

def buggy_function():
    x = 10
    y = 0
    # breakpoint()  # Python 3.7+
    result = x / y  # 这里会报错
    return result

# 4. 增强型调试器: ipdb, pdb++
"""
pip install ipdb

import ipdb; ipdb.set_trace()
"""

# 5. 事后调试
import sys

def post_mortem_debug(exc_type, exc_value, traceback):
    """异常发生后自动进入 pdb"""
    import pdb
    print(f"Exception occurred: {exc_value}")
    pdb.post_mortem(traceback)

# 在程序入口设置
# sys.excepthook = post_mortem_debug

# 6. 条件断点
def process_items(items):
    for i, item in enumerate(items):
        # 当 i == 5 时进入调试器
        # if i == 5:
        #     breakpoint()
        print(f"Processing {item}")
```

#### Mock 与 Patch

```python
"""
Mock 用于隔离测试，模拟外部依赖。
"""

from unittest.mock import Mock, MagicMock, patch, mock_open
import unittest
from datetime import datetime

class PaymentGateway:
    def charge(self, amount: float, card_number: str) -> dict:
        # 真实实现会调用外部 API
        raise NotImplementedError("External API call")

class OrderProcessor:
    def __init__(self, gateway: PaymentGateway):
        self.gateway = gateway
    
    def process_order(self, order: dict) -> dict:
        total = sum(item['price'] * item['quantity'] for item in order['items'])
        result = self.gateway.charge(total, order['card_number'])
        return {
            'order_id': order['id'],
            'amount': total,
            'transaction_id': result['transaction_id'],
            'status': 'success' if result['success'] else 'failed'
        }

class TestOrderProcessor(unittest.TestCase):
    def test_process_order_success(self):
        # 创建 Mock 对象
        mock_gateway = Mock(spec=PaymentGateway)
        mock_gateway.charge.return_value = {
            'success': True,
            'transaction_id': 'txn_12345'
        }
        
        processor = OrderProcessor(mock_gateway)
        order = {
            'id': 'order_1',
            'items': [
                {'price': 10.0, 'quantity': 2},
                {'price': 5.0, 'quantity': 1}
            ],
            'card_number': '1234-5678-9012-3456'
        }
        
        result = processor.process_order(order)
        
        # 验证结果
        self.assertEqual(result['order_id'], 'order_1')
        self.assertEqual(result['amount'], 25.0)
        self.assertEqual(result['status'], 'success')
        
        # 验证 mock 被正确调用
        mock_gateway.charge.assert_called_once_with(25.0, '1234-5678-9012-3456')
    
    def test_process_order_failure(self):
        mock_gateway = Mock()
        mock_gateway.charge.return_value = {
            'success': False,
            'error': 'Insufficient funds'
        }
        
        processor = OrderProcessor(mock_gateway)
        order = {'id': 'order_2', 'items': [], 'card_number': '0000'}
        
        result = processor.process_order(order)
        self.assertEqual(result['status'], 'failed')

# 使用 patch
class TestWithPatch(unittest.TestCase):
    @patch('builtins.open', mock_open(read_data='file content'))
    def test_file_read(self):
        with open('test.txt', 'r') as f:
            content = f.read()
        self.assertEqual(content, 'file content')
    
    @patch('datetime.datetime')
    def test_time_dependent(self, mock_datetime):
        mock_datetime.now.return_value = datetime(2024, 1, 15, 10, 30, 0)
        
        # 测试时间相关的代码
        current_time = datetime.now()
        self.assertEqual(current_time.year, 2024)
    
    @patch('requests.get')
    def test_api_call(self, mock_get):
        mock_get.return_value.status_code = 200
        mock_get.return_value.json.return_value = {'data': 'test'}
        
        import requests
        response = requests.get('https://api.example.com')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {'data': 'test'})

# 多个 patch
@patch('module.ClassName1')
@patch('module.ClassName2')
def test_multiple_patches(MockClass2, MockClass1):
    pass

# patch.object
class MyClass:
    def method(self):
        return 'original'

with patch.object(MyClass, 'method', return_value='mocked'):
    obj = MyClass()
    assert obj.method() == 'mocked'

# MagicMock 自动创建属性
mock = MagicMock()
mock.any_attribute.any_method.return_value = 42
print(mock.any_attribute.any_method())  # 42

# 副作用
def side_effect(*args, **kwargs):
    if args[0] < 0:
        raise ValueError("Negative value")
    return args[0] * 2

mock = Mock(side_effect=side_effect)
print(mock(5))   # 10
# print(mock(-1))  # ValueError

# 调用断言
mock = Mock()
mock(1, 2, foo='bar')
mock.assert_called_with(1, 2, foo='bar')
mock.assert_called_once()
print(mock.call_count)  # 1
print(mock.call_args)   # call(1, 2, foo='bar')
```

---

### 2.8 工程化与部署

将 Python 项目从原型推向生产环境，需要遵循工程化最佳实践，包括项目结构、代码质量、依赖管理和部署流程。

#### Python 项目结构最佳实践

```
my_project/                    # 项目根目录
├── README.md                  # 项目说明
├── LICENSE                    # 许可证
├── .gitignore                 # Git 忽略规则
├── .python-version            # pyenv 版本
├── Makefile                   # 常用命令
├── requirements.txt           # 生产依赖
├── requirements-dev.txt       # 开发依赖
├── pyproject.toml            # 现代 Python 项目配置
├── setup.py                  # 包安装配置（可选）
├── setup.cfg                 # 额外配置（可选）
├── src/                      # 源代码目录
│   └── my_project/           # 主包目录
│       ├── __init__.py
│       ├── __main__.py       # 入口点
│       ├── core/             # 核心模块
│       │   ├── __init__.py
│       │   └── module1.py
│       ├── utils/            # 工具模块
│       │   ├── __init__.py
│       │   └── helpers.py
│       └── cli.py            # 命令行接口
├── tests/                    # 测试目录
│   ├── __init__.py
│   ├── conftest.py           # pytest 配置
│   ├── unit/                 # 单元测试
│   └── integration/          # 集成测试
├── docs/                     # 文档
├── scripts/                  # 脚本
├── docker/                   # Docker 配置
└── .github/                  # GitHub 配置
    └── workflows/            # CI/CD 工作流
```

```python
# pyproject.toml 示例
"""
[build-system]
requires = ["setuptools>=45", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "my-project"
version = "0.1.0"
description = "A sample Python project"
readme = "README.md"
license = {text = "MIT"}
authors = [
    {name = "Your Name", email = "your.email@example.com"}
]
classifiers = [
    "Development Status :: 3 - Alpha",
    "Intended Audience :: Developers",
    "License :: OSI Approved :: MIT License",
    "Programming Language :: Python :: 3",
    "Programming Language :: Python :: 3.10",
    "Programming Language :: Python :: 3.11",
]
requires-python = ">=3.10"
dependencies = [
    "requests>=2.28.0",
    "pydantic>=2.0.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=7.0.0",
    "pytest-cov>=4.0.0",
    "black>=23.0.0",
    "isort>=5.12.0",
    "flake8>=6.0.0",
    "mypy>=1.0.0",
]
docs = [
    "sphinx>=6.0.0",
    "sphinx-rtd-theme>=1.2.0",
]

[project.scripts]
my-project = "my_project.cli:main"

[tool.black]
line-length = 88
target-version = ['py310']

[tool.isort]
profile = "black"
line_length = 88

[tool.mypy]
python_version = "3.10"
warn_return_any = true
warn_unused_configs = true
disallow_untyped_defs = true

[tool.pytest.ini_options]
testpaths = ["tests"]
python_files = "test_*.py"
python_classes = "Test*"
python_functions = "test_*"
addopts = "-v --cov=src --cov-report=term-missing"
"""

# src/my_project/__init__.py
"""My Project - A sample Python project."""

__version__ = "0.1.0"
__all__ = ["CoreClass"]

from my_project.core.module1 import CoreClass

# src/my_project/__main__.py
"""入口点，支持 python -m my_project"""

from my_project.cli import main

if __name__ == "__main__":
    main()

# src/my_project/cli.py
import argparse
import sys
from my_project.core.module1 import CoreClass

def main() -> int:
    """CLI entry point."""
    parser = argparse.ArgumentParser(description="My Project CLI")
    parser.add_argument("--version", action="version", version="%(prog)s 0.1.0")
    parser.add_argument("command", choices=["run", "status", "config"])
    
    args = parser.parse_args()
    
    core = CoreClass()
    
    if args.command == "run":
        result = core.run()
        print(result)
    elif args.command == "status":
        print(core.status())
    
    return 0

if __name__ == "__main__":
    sys.exit(main())
```

#### 代码质量工具

```python
"""
代码质量工具链：

1. black - 代码格式化
   pip install black
   black src/ tests/

2. isort - 导入排序
   pip install isort
   isort src/ tests/

3. flake8 - 风格检查
   pip install flake8
   flake8 src/ tests/

4. mypy - 类型检查
   pip install mypy
   mypy src/

5. bandit - 安全扫描
   pip install bandit
   bandit -r src/
"""

# .pre-commit-config.yaml
"""
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.4.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-added-large-files

  - repo: https://github.com/psf/black
    rev: 23.7.0
    hooks:
      - id: black
        language_version: python3.11

  - repo: https://github.com/pycqa/isort
    rev: 5.12.0
    hooks:
      - id: isort

  - repo: https://github.com/pycqa/flake8
    rev: 6.1.0
    hooks:
      - id: flake8
        additional_dependencies: [flake8-docstrings]

  - repo: https://github.com/pre-commit/mirrors-mypy
    rev: v1.5.1
    hooks:
      - id: mypy
        additional_dependencies: [types-requests]
"""

# Makefile 示例
"""
.PHONY: install test lint format clean

install:
	pip install -e ".[dev]"

test:
	pytest --cov=src --cov-report=term-missing

lint:
	flake8 src/ tests/
	mypy src/
	black --check src/ tests/
	isort --check-only src/ tests/

format:
	black src/ tests/
	isort src/ tests/

clean:
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	rm -rf .pytest_cache .mypy_cache htmlcov dist build *.egg-info
"""
```

#### 依赖管理

```python
"""
Python 依赖管理方式对比：

1. requirements.txt
   - 简单直接
   - 适合小型项目
   - pip freeze > requirements.txt

2. setup.py / setup.cfg
   - 传统包管理
   - 支持 extras_require

3. pyproject.toml (推荐)
   - PEP 517/518 标准
   - 统一配置
   - 现代工具支持

4. poetry
   - 依赖解析更智能
   - 锁定版本
   - 内置虚拟环境管理

5. pipenv
   - Pipfile 替代 requirements.txt
   - 自动管理虚拟环境
"""

# requirements.txt 示例
"""
# 生产依赖
requests>=2.28.0,<3.0.0
pydantic>=2.0.0
sqlalchemy>=2.0.0

# 开发依赖 (requirements-dev.txt)
pytest>=7.0.0
pytest-cov>=4.0.0
black>=23.0.0
isort>=5.12.0
flake8>=6.0.0
mypy>=1.0.0
"""

# Poetry pyproject.toml
"""
[tool.poetry]
name = "my-project"
version = "0.1.0"
description = "A sample project"
authors = ["Your Name <your.email@example.com>"]

[tool.poetry.dependencies]
python = "^3.10"
requests = "^2.28.0"
pydantic = "^2.0.0"

[tool.poetry.group.dev.dependencies]
pytest = "^7.0.0"
black = "^23.0.0"
mypy = "^1.0.0"

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"
"""

# poetry 命令
"""
poetry init              # 初始化项目
poetry add requests      # 添加依赖
poetry add --group dev pytest  # 添加开发依赖
poetry install           # 安装依赖
poetry update            # 更新依赖
poetry lock              # 更新锁定文件
poetry shell             # 进入虚拟环境
poetry run pytest        # 在虚拟环境中运行命令
"""
```

#### Docker 容器化部署

```dockerfile
# Dockerfile
# 多阶段构建，减小镜像体积

# 阶段1：构建
FROM python:3.11-slim as builder

WORKDIR /app

# 安装构建依赖
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# 安装 Python 依赖
COPY requirements.txt .
RUN pip install --user --no-cache-dir -r requirements.txt

# 阶段2：运行
FROM python:3.11-slim

WORKDIR /app

# 创建非 root 用户
RUN useradd -m -u 1000 appuser && chown -R appuser:appuser /app
USER appuser

# 从构建阶段复制依赖
COPY --from=builder /root/.local /home/appuser/.local
ENV PATH=/home/appuser/.local/bin:$PATH

# 复制应用代码
COPY --chown=appuser:appuser src/ ./src/

# 健康检查
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD python -c "import sys; sys.exit(0)"

# 暴露端口
EXPOSE 8000

# 启动命令
CMD ["python", "-m", "src.my_project"]

# docker-compose.yml
"""
version: '3.8'

services:
  app:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DEBUG=false
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
    depends_on:
      - db
    volumes:
      - ./logs:/app/logs
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
"""

# .dockerignore
"""
__pycache__
*.pyc
*.pyo
*.pyd
.Python
env/
venv/
.venv/
pip-log.txt
pip-delete-this-directory.txt
.tox/
.coverage
.coverage.*
.pytest_cache/
*.log
.git/
.github/
.gitignore
*.md
!README.md
Dockerfile
docker-compose.yml
.dockerignore
.env
.env.local
.vscode/
.idea/
"""
```

#### CI/CD 基础：GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ['3.10', '3.11', '3.12']

    steps:
    - uses: actions/checkout@v4

    - name: Set up Python ${{ matrix.python-version }}
      uses: actions/setup-python@v5
      with:
        python-version: ${{ matrix.python-version }}

    - name: Cache pip packages
      uses: actions/cache@v3
      with:
        path: ~/.cache/pip
        key: ${{ runner.os }}-pip-${{ hashFiles('**/requirements*.txt') }}

    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
        pip install -r requirements-dev.txt

    - name: Lint with flake8
      run: flake8 src/ tests/ --count --show-source --statistics

    - name: Type check with mypy
      run: mypy src/

    - name: Format check with black
      run: black --check src/ tests/

    - name: Test with pytest
      run: pytest --cov=src --cov-report=xml

    - name: Upload coverage
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage.xml
        fail_ci_if_error: false

  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'

    steps:
    - uses: actions/checkout@v4

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v3

    - name: Login to Container Registry
      uses: docker/login-action@v3
      with:
        registry: ghcr.io
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}

    - name: Build and push
      uses: docker/build-push-action@v5
      with:
        context: .
        push: true
        tags: |
          ghcr.io/${{ github.repository }}:latest
          ghcr.io/${{ github.repository }}:${{ github.sha }}
        cache-from: type=gha
        cache-to: type=gha,mode=max
```

---

### 2.9 里程碑书籍推荐

在掌握了 Python 高级特性后，深入阅读经典书籍是进一步提升的关键。以下推荐按进阶路径排列：

**入门巩固**
- 《Python 编程：从入门到实践》（Eric Matthes）
  - 适合初学者的项目驱动教程
  - 涵盖基础语法到 Web、数据可视化项目
  - 豆瓣 9.2 分

**进阶必读**
- 《流畅的 Python》（Luciano Ramalho）
  - 深入解析 Python 数据模型、对象机制
  - 函数、类、元编程的 Pythonic 写法
  - 理解鸭子类型、魔术方法的最佳指南
  - 豆瓣 9.4 分，进阶首选

- 《Python Cookbook》（David Beazley & Brian K. Jones）
  - 实用编程技巧合集
  - 数据结构、算法、元编程、并发等高级主题
  - 每个问题都有精炼的解决方案
  - 豆瓣 9.3 分

**工程化实践**
- 《Effective Python》（Brett Slatkin）
  - 90 条编写高质量 Python 代码的具体建议
  - 涵盖 Python 3 特性、并发、协作开发
  - 适合有一定经验的开发者查漏补缺
  - 豆瓣 9.2 分

- 《Python 高级编程》（Michał Jaworski & Tarek Ziadé）
  - 项目结构、打包分发、代码质量
  - 优化、扩展、部署实战
  - 适合需要工程化思维的开发者
  - 豆瓣 8.4 分

**架构设计**
- 《Architecture Patterns with Python》（Harry Percival & Bob Gregory）
  - 领域驱动设计（DDD）在 Python 中的实践
  - 分层架构、依赖注入、测试策略
  - 构建可维护的大型应用
  - 有免费在线版本

**源码阅读**
- 《Python 源码剖析》（陈儒）
  - 深入 CPython 解释器实现
  - 对象模型、内存管理、虚拟机
  - 国内罕见的深度技术书籍
  - 豆瓣 9.0 分

**选择建议**
- 如果你只读一本：《流畅的 Python》
- 如果你做工程：《Effective Python》+ 《Architecture Patterns with Python》
- 如果你想深入底层：《Python 源码剖析》

---

### 2.10 推荐 GitHub 项目

学习编程最好的方式是阅读优秀的代码。以下项目代表了 Python 在各个领域的最佳实践：

**Web 开发**
- [tiangolo/fastapi](https://github.com/tiangolo/fastapi) ⭐ 70k+
  - 现代、快速的 Web 框架
  - 类型提示驱动，自动生成交互式文档
  - 学习异步编程、依赖注入、类型系统的优秀案例

- [encode/httpx](https://github.com/encode/httpx) ⭐ 12k+
  - 下一代 HTTP 客户端
  - 支持同步和异步 API
  - 代码结构清晰，测试覆盖率高

**数据验证**
- [pydantic/pydantic](https://github.com/pydantic/pydantic) ⭐ 18k+
  - 使用类型提示的数据验证库
  - Python 3.6+ 类型系统的最佳实践
  - FastAPI 的核心依赖

**并发与异步**
- [encode/uvicorn](https://github.com/encode/uvicorn) ⭐ 8k+
  - 超快的 ASGI 服务器
  - 学习 asyncio、协议实现的参考

- [MagicStack/uvloop](https://github.com/MagicStack/uvloop) ⭐ 9k+
  - 高性能 asyncio 事件循环
  - Cython 实现的性能优化案例

**CLI 工具**
- [tiangolo/typer](https://github.com/tiangolo/typer) ⭐ 14k+
  - 基于类型提示的 CLI 框架
  - 展示如何用类型系统提升开发体验

- [Textualize/rich](https://github.com/Textualize/rich) ⭐ 46k+
  - 终端富文本和格式化库
  - 学习终端控制、渲染管线的好材料

**测试与质量**
- [pytest-dev/pytest](https://github.com/pytest-dev/pytest) ⭐ 11k+
  - Python 最流行的测试框架
  - 学习插件系统、fixture 机制

- [psf/black](https://github.com/psf/black) ⭐ 36k+
  - 无妥协的代码格式化工具
  - 了解代码解析和格式化算法

**阅读建议**
1. 从感兴趣的领域入手，带着问题阅读
2. 先看架构和接口设计，再深入实现
3. 关注测试用例，理解设计意图
4. 尝试为项目提交 PR，实践出真知

---

## 本章小结

本章深入探讨了 Python 的高级特性与工程实践，涵盖以下核心主题：

**面向对象编程**：从类与对象的基础，到继承、多态、封装三大特性，再到魔术方法、`@property`、`@dataclass` 等高级用法。掌握这些，能写出既 Pythonic 又具表达力的面向对象代码。

**装饰器与元编程**：理解装饰器的工作原理，从函数装饰器到类装饰器，从参数化装饰器到 `functools.wraps`。装饰器是 Python 中实现横切关注点（日志、缓存、权限等）的优雅方式。

**迭代器与生成器**：迭代器协议让自定义对象支持 `for` 循环，生成器则让惰性求值成为可能。配合 `itertools`，可以编写出内存高效、表达力强的数据处理代码。

**上下文管理器**：`with` 语句和 `contextlib` 让资源管理变得优雅可靠，无论是文件、锁还是自定义资源，都能确保正确释放。

**并发与异步**：理解 GIL 的限制，掌握多线程、多进程、asyncio 的适用场景。并发编程不是银弹，选择合适的模型才能事半功倍。

**类型提示与静态检查**：从基础注解到泛型、Protocol，再到 mypy 静态检查。类型提示让 Python 代码更易维护、更易重构。

**测试与调试**：从 `unittest` 到 `pytest`，从 print 调试到 pdb，从 Mock 到 Patch。测试是代码质量的保障，调试是解决问题的利器。

**工程化与部署**：项目结构、代码质量工具、依赖管理、Docker 容器化、CI/CD 流水线。这些是专业开发者必备的技能。

掌握这些高级特性，你已经从"会写 Python"进阶到"精通 Python"。接下来，你可以根据兴趣选择方向深入：游戏开发（第三章）、数据分析（第四章）或 LLM 应用（第五章）。无论选择哪个方向，本章的基础都将让你受益无穷。

记住 **The Zen of Python** 的教诲：

> Simple is better than complex.  
> Readability counts.  
> There should be one-- and preferably only one --obvious way to do it.

继续编码，继续探索，Python 的世界还有很多精彩等你发现。

---

## 第三章：游戏开发实战

Python 不仅适用于数据分析和 Web 开发，在游戏开发领域同样有着丰富的生态和出色的表现。本章将带领读者从零开始，使用 Pygame 框架构建完整的游戏项目，掌握游戏编程的核心思维和实践技巧。

### 3.1 游戏开发概述

#### Python 游戏开发生态简介

Python 在游戏开发领域拥有独特的地位。虽然它并非游戏行业的首选语言（C++ 和 C# 仍占据主导地位），但 Python 凭借其简洁的语法、丰富的库生态和快速原型开发能力，成为独立游戏开发者、教育领域和游戏原型设计的热门选择。

Python 游戏开发生态的核心优势在于**学习曲线平缓**和**开发效率高**。对于编程初学者来说，能够在短时间内看到可视化的游戏成果，这种即时反馈极大地提升了学习动力。对于专业开发者，Python 适合快速验证游戏机制和玩法创意，在确定方向后再迁移到性能更强的语言。

当前 Python 游戏开发的主要框架包括：

| 框架 | 维度 | 适用场景 | 学习难度 |
|------|------|----------|----------|
| **Pygame** | 2D | 入门级游戏开发、教育、原型 | ⭐⭐ |
| **Arcade** | 2D | 现代 2D 游戏、硬件加速 | ⭐⭐ |
| **Panda3D** | 3D | 3D 游戏、仿真、可视化 | ⭐⭐⭐⭐ |
| **Godot** | 2D/3D | 专业游戏开发（GDScript 类似 Python） | ⭐⭐⭐ |

#### Pygame 特点与适用场景

Pygame 是 Python 最流行、最成熟的游戏开发库，自 2000 年发布以来一直是教育领域和独立开发者的首选。它基于 Simple DirectMedia Layer (SDL) 构建，提供了游戏开发所需的基础功能：图形渲染、声音播放、输入处理、碰撞检测等。

**Pygame 的核心特点：**

1. **跨平台兼容**：支持 Windows、macOS、Linux，甚至可以在树莓派等嵌入式设备上运行
2. **轻量无依赖**：核心库仅依赖 SDL，无需复杂的图形驱动或 GPU 支持
3. **开源免费**：采用 LGPL 协议，可自由用于商业项目
4. **社区活跃**：拥有庞大的教程资源、示例代码和论坛支持

**Pygame 最适合的场景：**

- 学习游戏编程基础概念
- 开发 2D 休闲游戏（平台跳跃、益智、射击）
- 游戏原型验证和 Game Jam 作品
- 教育类互动应用和数据可视化

需要注意的是，Pygame 采用**软件渲染**，在大型 3D 游戏或需要复杂物理模拟的场景中性能有限。但对于大多数 2D 游戏来说，Pygame 的性能完全足够。

#### 其他框架对比

**Arcade** 是一个现代化的 Python 2D 游戏框架，设计上比 Pygame 更加 Pythonic。它利用 OpenGL 进行硬件加速渲染，在性能上优于 Pygame 的软件渲染。Arcade 提供了更完善的精灵系统、内置的物理引擎和更简洁的 API 设计，适合有一定基础后追求更高开发效率的开发者。

**Panda3D** 是迪士尼和卡内基梅隆大学共同开发的 3D 游戏引擎，被用于《加勒比海盗在线》等商业项目。它提供了完整的 3D 渲染管线、物理引擎、动画系统和场景图管理，适合开发复杂的 3D 游戏和仿真应用。

**Godot** 虽然不是 Python 框架，但其脚本语言 GDScript 的语法与 Python 极为相似，学习成本很低。Godot 是一个功能完整的游戏引擎，支持 2D 和 3D 开发，内置编辑器、动画系统、物理引擎等全套工具，是转向专业游戏开发的理想选择。

#### 游戏开发基础概念

在深入代码之前，理解游戏开发的核心概念至关重要：

**FPS（Frames Per Second，每秒帧数）**

FPS 表示游戏每秒更新的次数。电影通常以 24 FPS 播放，电视为 30 FPS，而游戏通常以 60 FPS 为目标。更高的 FPS 意味着更流畅的视觉体验，但也需要更强的计算能力。Pygame 默认通过时钟控制将游戏锁定在 60 FPS：

```python
import pygame

pygame.init()
clock = pygame.time.Clock()

running = True
while running:
    # 游戏逻辑更新
    
    # 渲染画面
    pygame.display.flip()
    
    # 控制帧率为 60 FPS
    clock.tick(60)
```

**游戏循环（Game Loop）**

游戏循环是游戏程序的"心跳"，它持续运行直到游戏结束。典型的游戏循环包含三个阶段：

1. **事件处理（Event Handling）**：处理用户输入（键盘、鼠标、手柄）和系统事件
2. **更新逻辑（Update）**：更新游戏状态，包括物体位置、碰撞检测、AI 行为等
3. **渲染画面（Render）**：将游戏状态绘制到屏幕上

```python
# 经典游戏循环结构
running = True
while running:
    # 1. 事件处理
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    # 2. 更新逻辑
    player.update()
    enemies.update()
    check_collisions()
    
    # 3. 渲染画面
    screen.fill((0, 0, 0))  # 清屏
    player.draw(screen)
    enemies.draw(screen)
    pygame.display.flip()   # 刷新显示
```

**增量时间（Delta Time）**

游戏循环的每一帧执行时间可能不同（受硬件性能和系统负载影响）。为了确保游戏速度在不同设备上保持一致，需要使用增量时间（Delta Time）——即上一帧到当前帧经过的时间：

```python
# 使用时间差确保移动速度一致
dt = clock.tick(60) / 1000.0  # 转换为秒
player.x += player.speed * dt   # 速度 * 时间 = 距离
```

理解这些基础概念后，我们就可以开始构建真正的游戏了。

### 3.2 Pygame 核心概念

#### 安装与初始化

Pygame 的安装非常简单，使用 pip 即可：

```bash
pip install pygame
```

安装完成后，让我们编写第一个 Pygame 程序——创建一个窗口：

```python
import pygame
import sys

# 初始化 Pygame 的所有模块
pygame.init()

# 创建游戏窗口
# set_mode 接受一个元组 (宽度, 高度)，返回一个 Surface 对象
screen = pygame.display.set_mode((800, 600))

# 设置窗口标题
pygame.display.set_caption("我的第一个 Pygame 游戏")

# 创建时钟对象用于控制帧率
clock = pygame.time.Clock()

# 游戏主循环
running = True
while running:
    # 事件处理
    for event in pygame.event.get():
        if event.type == pygame.QUIT:  # 点击关闭按钮
            running = False
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:  # 按下 ESC 键
                running = False
    
    # 清屏（填充黑色）
    screen.fill((0, 0, 0))
    
    # 在这里绘制游戏内容...
    
    # 刷新显示
    pygame.display.flip()
    
    # 控制帧率为 60 FPS
    clock.tick(60)

# 退出 Pygame
pygame.quit()
sys.exit()
```

这个基础模板包含了 Pygame 程序的核心结构。`pygame.init()` 初始化所有 Pygame 模块，`pygame.display.set_mode()` 创建游戏窗口，`pygame.event.get()` 获取事件队列，`pygame.display.flip()` 更新屏幕显示。

#### Surface 对象：屏幕与图像

Surface 是 Pygame 中最核心的概念之一，它代表一个可以绘制图像的矩形区域。屏幕本身也是一个 Surface，任何图像、文字、图形都需要绘制到 Surface 上才能显示。

**创建 Surface：**

```python
import pygame

pygame.init()
screen = pygame.display.set_mode((800, 600))

# 创建一个空白 Surface（宽 200，高 100）
surface1 = pygame.Surface((200, 100))

# 创建一个带透明通道的 Surface
surface2 = pygame.Surface((100, 100), pygame.SRCALPHA)

# 填充颜色
surface1.fill((255, 0, 0))      # 红色
surface2.fill((0, 255, 0, 128)) # 半透明绿色

# 将 Surface 绘制到屏幕上
screen.blit(surface1, (100, 100))  # 在坐标 (100, 100) 处绘制
screen.blit(surface2, (300, 100))

pygame.display.flip()
```

`blit()` 方法是 Pygame 中最重要的方法之一，意为"块传输"（Block Transfer），用于将一个 Surface 的内容复制到另一个 Surface 上。第一个参数是源 Surface，第二个参数是目标位置（可以是元组或 Rect 对象）。

**加载图像：**

```python
# 加载图像文件（支持 PNG、JPG、GIF、BMP 等格式）
player_image = pygame.image.load("player.png")

# 图像加载后本身就是一个 Surface，可以直接绘制
screen.blit(player_image, (x, y))

# 获取图像尺寸
width, height = player_image.get_size()

# 缩放图像
scaled_image = pygame.transform.scale(player_image, (new_width, new_height))

# 旋转图像
rotated_image = pygame.transform.rotate(player_image, 45)  # 顺时针旋转 45 度
```

#### Rect 对象：碰撞框与定位

Rect（矩形）对象用于表示游戏中的位置和区域。它是 Pygame 中最高效的几何对象，几乎所有的定位和碰撞检测都基于 Rect。

```python
import pygame

pygame.init()
screen = pygame.display.set_mode((800, 600))

# 创建 Rect 的多种方式
rect1 = pygame.Rect(100, 100, 50, 50)  # (left, top, width, height)
rect2 = pygame.Rect((200, 200), (60, 40))  # ((left, top), (width, height))

# 从 Surface 获取 Rect（默认位置为 (0, 0)）
image = pygame.Surface((50, 50))
image.fill((255, 0, 0))
rect3 = image.get_rect()

# 设置 Rect 的位置
rect3.center = (400, 300)  # 设置中心点
rect3.topleft = (0, 0)     # 设置左上角
rect3.bottomright = (800, 600)  # 设置右下角
rect3.midbottom = (400, 600)    # 设置底边中点

# Rect 的属性
print(rect3.x, rect3.y)           # 左上角坐标
print(rect3.width, rect3.height)  # 宽度和高度
print(rect3.centerx, rect3.centery)  # 中心点坐标
print(rect3.left, rect3.right)    # 左右边界
print(rect3.top, rect3.bottom)    # 上下边界

# 移动 Rect
rect1.move_ip(5, 0)   # 原地向右移动 5 像素（in-place）
new_rect = rect1.move(0, 5)  # 返回向下移动 5 像素的新 Rect

# 绘制 Rect
pygame.draw.rect(screen, (255, 0, 0), rect1)
pygame.draw.rect(screen, (0, 255, 0), rect2)
screen.blit(image, rect3)

pygame.display.flip()
```

Rect 对象提供了丰富的位置属性和便捷的碰撞检测方法，是游戏开发中不可或缺的工具。

#### 事件处理系统

Pygame 的事件系统负责捕获和分发用户输入及系统事件。`pygame.event.get()` 返回当前帧的所有事件列表，程序需要遍历这个列表并处理感兴趣的事件。

**键盘事件：**

```python
import pygame

pygame.init()
screen = pygame.display.set_mode((800, 600))
clock = pygame.time.Clock()

player_x, player_y = 400, 300
player_speed = 5

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        
        # 键盘按下事件（一次性触发）
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE:
                print("跳跃！")
            elif event.key == pygame.K_ESCAPE:
                running = False
        
        # 键盘松开事件
        elif event.type == pygame.KEYUP:
            if event.key == pygame.K_SPACE:
                print("落地")
    
    # 持续按键检测（适用于移动控制）
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT] or keys[pygame.K_a]:
        player_x -= player_speed
    if keys[pygame.K_RIGHT] or keys[pygame.K_d]:
        player_x += player_speed
    if keys[pygame.K_UP] or keys[pygame.K_w]:
        player_y -= player_speed
    if keys[pygame.K_DOWN] or keys[pygame.K_s]:
        player_y += player_speed
    
    # 限制玩家不出屏幕
    player_x = max(25, min(775, player_x))
    player_y = max(25, min(575, player_y))
    
    # 渲染
    screen.fill((0, 0, 0))
    pygame.draw.circle(screen, (0, 255, 0), (player_x, player_y), 25)
    pygame.display.flip()
    clock.tick(60)

pygame.quit()
```

**鼠标事件：**

```python
for event in pygame.event.get():
    if event.type == pygame.MOUSEBUTTONDOWN:
        # 鼠标点击事件
        if event.button == 1:  # 左键
            print(f"左键点击位置: {event.pos}")
        elif event.button == 3:  # 右键
            print(f"右键点击位置: {event.pos}")
    
    elif event.type == pygame.MOUSEBUTTONUP:
        print(f"鼠标释放: {event.pos}")
    
    elif event.type == pygame.MOUSEMOTION:
        # 鼠标移动事件
        print(f"鼠标位置: {event.pos}, 相对移动: {event.rel}")

# 获取鼠标当前状态
mouse_x, mouse_y = pygame.mouse.get_pos()
mouse_buttons = pygame.mouse.get_pressed()  # (左键, 中键, 右键)
if mouse_buttons[0]:  # 左键按下
    print("左键按住中")
```

**常用事件类型：**

| 事件类型 | 触发时机 |
|----------|----------|
| `pygame.QUIT` | 点击窗口关闭按钮 |
| `pygame.KEYDOWN` | 键盘按键按下 |
| `pygame.KEYUP` | 键盘按键松开 |
| `pygame.MOUSEBUTTONDOWN` | 鼠标按钮按下 |
| `pygame.MOUSEBUTTONUP` | 鼠标按钮松开 |
| `pygame.MOUSEMOTION` | 鼠标移动 |
| `pygame.USEREVENT` | 用户自定义事件 |

#### 游戏循环结构详解

一个结构良好的游戏循环是游戏稳定运行的基础。下面是一个完整、可扩展的游戏循环模板：

```python
import pygame
import sys

class Game:
    def __init__(self):
        pygame.init()
        self.screen = pygame.display.set_mode((800, 600))
        pygame.display.set_caption("完整游戏循环示例")
        self.clock = pygame.time.Clock()
        self.running = True
        
        # 游戏状态
        self.player_pos = pygame.Vector2(400, 300)
        self.player_speed = 300  # 像素/秒
        
    def handle_events(self):
        """处理输入事件"""
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                self.running = False
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE:
                    self.running = False
    
    def update(self, dt):
        """更新游戏逻辑
        
        Args:
            dt: 上一帧到当前帧的时间差（秒）
        """
        # 获取按键状态
        keys = pygame.key.get_pressed()
        direction = pygame.Vector2(0, 0)
        
        if keys[pygame.K_w] or keys[pygame.K_UP]:
            direction.y -= 1
        if keys[pygame.K_s] or keys[pygame.K_DOWN]:
            direction.y += 1
        if keys[pygame.K_a] or keys[pygame.K_LEFT]:
            direction.x -= 1
        if keys[pygame.K_d] or keys[pygame.K_RIGHT]:
            direction.x += 1
        
        # 归一化方向向量（避免斜向移动更快）
        if direction.length() > 0:
            direction = direction.normalize()
        
        # 更新位置：速度 * 时间 = 距离
        self.player_pos += direction * self.player_speed * dt
        
        # 边界限制
        self.player_pos.x = max(25, min(775, self.player_pos.x))
        self.player_pos.y = max(25, min(575, self.player_pos.y))
    
    def render(self):
        """渲染游戏画面"""
        # 清屏（深蓝色背景）
        self.screen.fill((25, 25, 50))
        
        # 绘制玩家（白色圆形）
        pygame.draw.circle(self.screen, (255, 255, 255), 
                          (int(self.player_pos.x), int(self.player_pos.y)), 25)
        
        # 刷新显示
        pygame.display.flip()
    
    def run(self):
        """运行游戏主循环"""
        while self.running:
            # 计算时间差（秒）
            dt = self.clock.tick(60) / 1000.0
            
            self.handle_events()
            self.update(dt)
            self.render()
        
        pygame.quit()
        sys.exit()

if __name__ == "__main__":
    game = Game()
    game.run()
```

这个模板采用了面向对象的设计，将游戏的各个部分（事件处理、逻辑更新、渲染）分离到独立的方法中，使代码更清晰、更易于维护和扩展。使用 `pygame.Vector2` 进行向量运算可以让移动和碰撞检测代码更加简洁。

### 3.3 图形与动画

#### 加载与显示图像

游戏中的视觉元素通常来自外部图像文件。Pygame 支持多种常见图像格式，包括 PNG（推荐，支持透明）、JPG、GIF、BMP 等。

```python
import pygame
import os

pygame.init()
screen = pygame.display.set_mode((800, 600))
clock = pygame.time.Clock()

# 加载图像
# 建议将所有资源放在项目目录下的 assets 文件夹中
player_img = pygame.image.load("assets/player.png").convert_alpha()
enemy_img = pygame.image.load("assets/enemy.png").convert_alpha()
background_img = pygame.image.load("assets/background.jpg").convert()

# convert() 和 convert_alpha() 方法优化图像格式以提高渲染性能
# convert() 用于不透明图像，convert_alpha() 用于带透明通道的图像

# 获取图像尺寸
player_rect = player_img.get_rect()
player_rect.center = (400, 300)

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    # 绘制背景（先绘制）
    screen.blit(background_img, (0, 0))
    
    # 绘制玩家
    screen.blit(player_img, player_rect)
    
    pygame.display.flip()
    clock.tick(60)

pygame.quit()
```

**图像变换操作：**

```python
# 缩放图像
scaled = pygame.transform.scale(original_image, (new_width, new_height))

# 保持宽高比缩放
# 缩放为原来的一半
scaled_half = pygame.transform.scale(original_image, 
    (original_image.get_width() // 2, original_image.get_height() // 2))

# 旋转图像（注意：旋转会损失画质，且矩形会变大）
rotated = pygame.transform.rotate(original_image, angle)
# 获取旋转后的矩形
rotated_rect = rotated.get_rect(center=original_rect.center)

# 水平/垂直翻转
flipped_h = pygame.transform.flip(original_image, True, False)   # 水平翻转
flipped_v = pygame.transform.flip(original_image, False, True)   # 垂直翻转
flipped_both = pygame.transform.flip(original_image, True, True) # 双向翻转

# 平滑缩放（质量更好但较慢）
smooth_scaled = pygame.transform.smoothscale(original_image, (w, h))
```

#### 精灵 (Sprite) 系统

精灵（Sprite）是游戏中可移动、可交互的图形对象的抽象。Pygame 提供了强大的精灵系统 `pygame.sprite`，它封装了图像管理、位置跟踪、碰撞检测等功能。

**创建自定义精灵类：**

```python
import pygame

class Player(pygame.sprite.Sprite):
    def __init__(self, x, y):
        # 必须调用父类构造函数
        super().__init__()
        
        # 创建精灵图像（这里用矩形代替，实际使用加载的图片）
        self.image = pygame.Surface((50, 50))
        self.image.fill((0, 255, 0))
        
        # 获取矩形对象用于定位和碰撞检测
        self.rect = self.image.get_rect()
        self.rect.center = (x, y)
        
        # 精灵属性
        self.speed = 5
        self.health = 100
    
    def update(self):
        """每帧更新精灵状态"""
        keys = pygame.key.get_pressed()
        
        if keys[pygame.K_LEFT]:
            self.rect.x -= self.speed
        if keys[pygame.K_RIGHT]:
            self.rect.x += self.speed
        if keys[pygame.K_UP]:
            self.rect.y -= self.speed
        if keys[pygame.K_DOWN]:
            self.rect.y += self.speed
        
        # 边界限制
        if self.rect.left < 0:
            self.rect.left = 0
        if self.rect.right > 800:
            self.rect.right = 800
        if self.rect.top < 0:
            self.rect.top = 0
        if self.rect.bottom > 600:
            self.rect.bottom = 600

class Enemy(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.image = pygame.Surface((40, 40))
        self.image.fill((255, 0, 0))
        self.rect = self.image.get_rect()
        self.rect.center = (x, y)
        self.speed = 2
    
    def update(self):
        """敌人简单的向下移动"""
        self.rect.y += self.speed
        
        # 移出屏幕底部后重置到顶部
        if self.rect.top > 600:
            self.rect.bottom = 0
```

**精灵组 (Sprite Group)：**

精灵组用于批量管理多个精灵，可以同时更新和绘制组内所有精灵。

```python
import pygame

pygame.init()
screen = pygame.display.set_mode((800, 600))
clock = pygame.time.Clock()

# 创建精灵组
all_sprites = pygame.sprite.Group()
enemies = pygame.sprite.Group()

# 创建玩家并添加到组
player = Player(400, 500)
all_sprites.add(player)

# 创建多个敌人
for i in range(5):
    enemy = Enemy(100 + i * 150, 50)
    all_sprites.add(enemy)
    enemies.add(enemy)

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    # 更新所有精灵（自动调用组内每个精灵的 update() 方法）
    all_sprites.update()
    
    # 碰撞检测：玩家与敌人
    hits = pygame.sprite.spritecollide(player, enemies, False)
    if hits:
        print("撞到了敌人！")
    
    # 绘制
    screen.fill((0, 0, 0))
    all_sprites.draw(screen)  # 自动绘制组内所有精灵
    
    pygame.display.flip()
    clock.tick(60)

pygame.quit()
```

**精灵组的类型：**

| 精灵组类型 | 特点 |
|------------|------|
| `Group` | 基础精灵组，无序存储 |
| `GroupSingle` | 只容纳一个精灵，新精灵会替换旧的 |
| `OrderedUpdates` | 按添加顺序绘制 |
| `LayeredUpdates` | 支持图层，可以指定绘制层级 |

```python
# 使用分层精灵组
layered_group = pygame.sprite.LayeredUpdates()

# 添加精灵时指定图层（数字越大越在上层）
layered_group.add(background, layer=0)
layered_group.add(platform, layer=1)
layered_group.add(player, layer=2)
layered_group.add(ui_elements, layer=10)
```

#### 动画实现

动画的本质是快速连续显示一系列静态图像（帧），利用人眼的"视觉暂留"效应产生运动的错觉。

**帧动画原理：**

```python
import pygame

class AnimatedSprite(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        
        # 加载动画帧
        self.frames = []
        for i in range(4):  # 假设有 4 帧
            frame = pygame.image.load(f"assets/anim_{i}.png").convert_alpha()
            self.frames.append(frame)
        
        self.current_frame = 0
        self.image = self.frames[self.current_frame]
        self.rect = self.image.get_rect()
        self.rect.center = (x, y)
        
        # 动画控制
        self.animation_speed = 0.2  # 每帧显示时间（秒）
        self.animation_timer = 0
    
    def update(self, dt):
        # 更新动画计时器
        self.animation_timer += dt
        
        # 切换到下一帧
        if self.animation_timer >= self.animation_speed:
            self.animation_timer = 0
            self.current_frame = (self.current_frame + 1) % len(self.frames)
            self.image = self.frames[self.current_frame]
```

**精灵表 (Sprite Sheet) 加载：**

精灵表是将多个动画帧合并到一张大图中的技术，可以减少文件数量、节省内存、提高加载速度。

```python
import pygame

def load_sprite_sheet(sheet_path, frame_width, frame_height):
    """从精灵表加载动画帧
    
    Args:
        sheet_path: 精灵表图片路径
        frame_width: 单帧宽度
        frame_height: 单帧高度
    
    Returns:
        帧列表
    """
    sheet = pygame.image.load(sheet_path).convert_alpha()
    sheet_width, sheet_height = sheet.get_size()
    
    frames = []
    for y in range(0, sheet_height, frame_height):
        for x in range(0, sheet_width, frame_width):
            # 从精灵表裁剪单帧
            frame_rect = pygame.Rect(x, y, frame_width, frame_height)
            frame = sheet.subsurface(frame_rect).copy()
            frames.append(frame)
    
    return frames

class PlayerWithSheet(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        
        # 加载行走动画（假设精灵表每行是一个方向的动画）
        self.walk_down = load_sprite_sheet("assets/player_walk_down.png", 32, 32)
        self.walk_up = load_sprite_sheet("assets/player_walk_up.png", 32, 32)
        self.walk_left = load_sprite_sheet("assets/player_walk_left.png", 32, 32)
        self.walk_right = load_sprite_sheet("assets/player_walk_right.png", 32, 32)
        
        # 当前动画和帧
        self.current_animation = self.walk_down
        self.current_frame = 0
        self.image = self.current_animation[self.current_frame]
        self.rect = self.image.get_rect()
        self.rect.center = (x, y)
        
        # 动画状态
        self.animation_timer = 0
        self.animation_speed = 0.1
        self.is_moving = False
        self.direction = "down"
    
    def update(self, dt):
        # 处理输入
        keys = pygame.key.get_pressed()
        dx, dy = 0, 0
        
        if keys[pygame.K_LEFT]:
            dx = -1
            self.direction = "left"
            self.is_moving = True
        elif keys[pygame.K_RIGHT]:
            dx = 1
            self.direction = "right"
            self.is_moving = True
        elif keys[pygame.K_UP]:
            dy = -1
            self.direction = "up"
            self.is_moving = True
        elif keys[pygame.K_DOWN]:
            dy = 1
            self.direction = "down"
            self.is_moving = True
        else:
            self.is_moving = False
        
        # 更新位置
        self.rect.x += dx * 3
        self.rect.y += dy * 3
        
        # 更新动画
        if self.is_moving:
            # 根据方向选择动画
            if self.direction == "down":
                self.current_animation = self.walk_down
            elif self.direction == "up":
                self.current_animation = self.walk_up
            elif self.direction == "left":
                self.current_animation = self.walk_left
            elif self.direction == "right":
                self.current_animation = self.walk_right
            
            # 更新帧
            self.animation_timer += dt
            if self.animation_timer >= self.animation_speed:
                self.animation_timer = 0
                self.current_frame = (self.current_frame + 1) % len(self.current_animation)
                self.image = self.current_animation[self.current_frame]
        else:
            # 停止时显示第一帧（站立姿势）
            self.current_frame = 0
            self.image = self.current_animation[0]
```

#### 文字渲染与字体

Pygame 使用 `pygame.font` 模块渲染文字。可以加载系统字体或自定义字体文件。

```python
import pygame

pygame.init()
screen = pygame.display.set_mode((800, 600))

# 使用系统字体
font_large = pygame.font.SysFont("arial", 48)
font_small = pygame.font.SysFont("simhei", 24)  # 中文字体

# 加载自定义字体文件
custom_font = pygame.font.Font("assets/fonts/game_font.ttf", 36)

# 渲染文字
# render(text, antialias, color, background=None)
text_surface = font_large.render("Hello Pygame!", True, (255, 255, 255))
text_rect = text_surface.get_rect(center=(400, 200))

# 带背景色的文字
text_with_bg = font_small.render("得分: 100", True, (255, 255, 0), (0, 0, 0))

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    screen.fill((50, 50, 50))
    
    # 绘制文字
    screen.blit(text_surface, text_rect)
    screen.blit(text_with_bg, (350, 300))
    
    pygame.display.flip()

pygame.quit()
```

**文字工具类：**

```python
class TextRenderer:
    """文字渲染工具类，支持缓存提高性能"""
    
    def __init__(self):
        self.cache = {}  # 缓存渲染好的文字表面
    
    def render(self, text, font, color, antialias=True):
        """渲染文字（带缓存）"""
        key = (text, font, color, antialias)
        if key not in self.cache:
            self.cache[key] = font.render(text, antialias, color)
        return self.cache[key]
    
    def draw_text(self, surface, text, font, color, pos, align="topleft"):
        """在指定位置绘制文字
        
        Args:
            align: 对齐方式 (topleft, center, topright, bottomleft, bottomright, midbottom)
        """
        text_surface = self.render(text, font, color)
        text_rect = text_surface.get_rect()
        setattr(text_rect, align, pos)
        surface.blit(text_surface, text_rect)

# 使用示例
text_renderer = TextRenderer()
text_renderer.draw_text(screen, "游戏开始", font_large, (255, 255, 255), (400, 300), "center")
```

### 3.4 碰撞检测与物理

#### 碰撞检测方法

碰撞检测是游戏交互的核心。Pygame 提供了多种碰撞检测方法，适用于不同场景。

**Rect 碰撞检测：**

```python
import pygame

# 创建两个矩形
rect1 = pygame.Rect(100, 100, 50, 50)
rect2 = pygame.Rect(120, 120, 50, 50)

# 1. 检测两个矩形是否碰撞
if rect1.colliderect(rect2):
    print("矩形碰撞！")

# 2. 检测矩形与点的碰撞（常用于鼠标点击检测）
mouse_pos = (110, 110)
if rect1.collidepoint(mouse_pos):
    print("鼠标在矩形内！")

# 3. 获取碰撞的矩形区域（两个矩形的交集）
intersection = rect1.clip(rect2)
print(f"碰撞区域: {intersection}")

# 4. 检测矩形是否与矩形列表中的任何一个碰撞
collided_index = rect1.collidelist([rect2, pygame.Rect(200, 200, 50, 50)])
if collided_index != -1:
    print(f"与第 {collided_index} 个矩形碰撞")

# 5. 检测矩形是否与矩形列表中的所有碰撞项
collided_indices = rect1.collidelistall([rect2, pygame.Rect(200, 200, 50, 50)])
```

**精灵碰撞检测：**

```python
import pygame

# 1. 单个精灵与精灵组的碰撞检测
# spritecollide(sprite, group, dokill) -> 返回碰撞的精灵列表
hits = pygame.sprite.spritecollide(player, enemies, False)
for enemy in hits:
    print(f"玩家撞到了 {enemy}")

# dokill=True 会自动从组中移除碰撞的精灵
hits = pygame.sprite.spritecollide(player, enemies, True)
print(f"消灭了 {len(hits)} 个敌人")

# 2. 两个精灵组之间的碰撞检测
# groupcollide(group1, group2, dokill1, dokill2) -> 返回碰撞字典
collisions = pygame.sprite.groupcollide(bullets, enemies, True, True)
# bullets 中的子弹和 enemies 中的敌人都会被移除
for bullet, hit_enemies in collisions.items():
    print(f"子弹消灭了 {len(hit_enemies)} 个敌人")

# 3. 单个精灵之间的碰撞检测
if pygame.sprite.collide_rect(sprite1, sprite2):
    print("两个精灵碰撞")

# 4. 使用自定义碰撞检测（圆形碰撞框，更精确）
def circle_collision(sprite1, sprite2):
    """基于圆心的碰撞检测"""
    pos1 = pygame.Vector2(sprite1.rect.center)
    pos2 = pygame.Vector2(sprite2.rect.center)
    distance = pos1.distance_to(pos2)
    radius1 = min(sprite1.rect.width, sprite1.rect.height) / 2
    radius2 = min(sprite2.rect.width, sprite2.rect.height) / 2
    return distance < (radius1 + radius2)

# 使用自定义检测
hits = pygame.sprite.spritecollide(player, enemies, False, collided=circle_collision)

# 5. 像素级完美碰撞检测（最精确但最慢）
# 要求精灵图像有透明通道
if pygame.sprite.collide_mask(player, enemy):
    print("像素级碰撞！")
```

#### 基础运动学

游戏物体的运动遵循经典物理学原理。使用向量数学可以让运动计算更加直观和简洁。

```python
import pygame
from pygame.math import Vector2

class PhysicsObject(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.image = pygame.Surface((30, 30))
        self.image.fill((255, 255, 0))
        self.rect = self.image.get_rect()
        self.rect.center = (x, y)
        
        # 物理属性（使用向量）
        self.position = Vector2(x, y)
        self.velocity = Vector2(0, 0)
        self.acceleration = Vector2(0, 0)
        
        self.max_speed = 10
        self.friction = 0.9
    
    def apply_force(self, force):
        """应用力（F = ma，假设质量为1）"""
        self.acceleration += force
    
    def update(self):
        # 更新速度: v = v + a
        self.velocity += self.acceleration
        
        # 限制最大速度
        if self.velocity.length() > self.max_speed:
            self.velocity = self.velocity.normalize() * self.max_speed
        
        # 应用摩擦力
        self.velocity *= self.friction
        
        # 更新位置: p = p + v
        self.position += self.velocity
        
        # 同步 rect 位置
        self.rect.center = (int(self.position.x), int(self.position.y))
        
        # 重置加速度
        self.acceleration = Vector2(0, 0)

# 使用示例
pygame.init()
screen = pygame.display.set_mode((800, 600))
clock = pygame.time.Clock()

obj = PhysicsObject(400, 300)
all_sprites = pygame.sprite.Group(obj)

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    # 输入控制
    keys = pygame.key.get_pressed()
    force = Vector2(0, 0)
    if keys[pygame.K_LEFT]:
        force.x = -0.5
    if keys[pygame.K_RIGHT]:
        force.x = 0.5
    if keys[pygame.K_UP]:
        force.y = -0.5
    if keys[pygame.K_DOWN]:
        force.y = 0.5
    
    obj.apply_force(force)
    all_sprites.update()
    
    screen.fill((0, 0, 0))
    all_sprites.draw(screen)
    pygame.display.flip()
    clock.tick(60)
```

**向量数学常用操作：**

```python
from pygame.math import Vector2

v1 = Vector2(3, 4)
v2 = Vector2(1, 1)

# 基本运算
v3 = v1 + v2      # 加法
v4 = v1 - v2      # 减法
v5 = v1 * 2       # 数乘
v6 = v1 / 2       # 数除

# 向量属性
length = v1.length()           # 向量长度（模）
length_sq = v1.length_squared()  # 长度平方（计算更快）
normalized = v1.normalize()    # 归一化（长度为1的同方向向量）

# 向量运算
dot = v1.dot(v2)               # 点积
distance = v1.distance_to(v2)  # 两点距离
angle = v1.angle_to(v2)        # 两向量夹角（度）

# 角度和方向
v_from_angle = Vector2(1, 0).rotate(45)  # 旋转45度
```

#### 简单的物理效果

**重力模拟：**

```python
class FallingObject(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.image = pygame.Surface((30, 30))
        self.image.fill((255, 100, 100))
        self.rect = self.image.get_rect()
        self.rect.center = (x, y)
        
        self.position = Vector2(x, y)
        self.velocity = Vector2(0, 0)
        self.gravity = 0.5  # 重力加速度
        self.ground_y = 570  # 地面高度
        self.bounce = 0.7   # 弹性系数（0-1）
    
    def update(self):
        # 应用重力
        self.velocity.y += self.gravity
        
        # 更新位置
        self.position += self.velocity
        self.rect.center = (int(self.position.x), int(self.position.y))
        
        # 地面碰撞
        if self.rect.bottom >= self.ground_y:
            self.rect.bottom = self.ground_y
            self.position.y = self.rect.centery
            
            # 反弹
            self.velocity.y *= -self.bounce
            
            # 速度很小时停止弹跳
            if abs(self.velocity.y) < 1:
                self.velocity.y = 0
```

**跳跃与跳跃缓冲：**

```python
class PlatformerPlayer(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.image = pygame.Surface((40, 60))
        self.image.fill((0, 150, 255))
        self.rect = self.image.get_rect()
        self.rect.center = (x, y)
        
        self.position = Vector2(x, y)
        self.velocity = Vector2(0, 0)
        self.gravity = 0.8
        self.jump_strength = -15
        self.speed = 5
        
        self.on_ground = False
        self.jump_buffer = 0      # 跳跃缓冲计时器
        self.coyote_time = 0      # 土狼时间计时器（离开平台后的短暂可跳跃时间）
        
        self.JUMP_BUFFER_FRAMES = 5   # 跳跃缓冲帧数（提前按跳跃键有效）
        self.COYOTE_FRAMES = 6        # 土狼时间帧数
    
    def update(self):
        keys = pygame.key.get_pressed()
        
        # 水平移动
        if keys[pygame.K_LEFT]:
            self.velocity.x = -self.speed
        elif keys[pygame.K_RIGHT]:
            self.velocity.x = self.speed
        else:
            self.velocity.x = 0
        
        # 应用重力
        self.velocity.y += self.gravity
        
        # 更新位置
        self.position += self.velocity
        self.rect.center = (int(self.position.x), int(self.position.y))
        
        # 地面检测
        was_on_ground = self.on_ground
        self.on_ground = self.check_ground()
        
        # 土狼时间：刚离开地面时仍可跳跃
        if was_on_ground and not self.on_ground:
            self.coyote_time = self.COYOTE_FRAMES
        elif self.on_ground:
            self.coyote_time = 0
        
        # 跳跃缓冲：提前按跳跃键
        if self.jump_buffer > 0:
            self.jump_buffer -= 1
            if self.can_jump():
                self.jump()
        
        if self.coyote_time > 0:
            self.coyote_time -= 1
    
    def check_ground(self):
        # 简化版地面检测，实际应检测与平台精灵的碰撞
        return self.rect.bottom >= 570
    
    def can_jump(self):
        return self.on_ground or self.coyote_time > 0
    
    def jump(self):
        self.velocity.y = self.jump_strength
        self.jump_buffer = 0
        self.coyote_time = 0
    
    def handle_event(self, event):
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE:
                if self.can_jump():
                    self.jump()
                else:
                    # 如果不能跳，启动跳跃缓冲
                    self.jump_buffer = self.JUMP_BUFFER_FRAMES
```

**跳跃缓冲（Jump Buffering）**和**土狼时间（Coyote Time）**是平台游戏中常用的手感优化技巧：
- 跳跃缓冲允许玩家在落地前短暂按跳跃键也能起跳
- 土狼时间允许玩家在离开平台边缘后短暂时间内仍能起跳

**摩擦力：**

```python
class PlayerWithFriction(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.image = pygame.Surface((40, 40))
        self.image.fill((100, 255, 100))
        self.rect = self.image.get_rect(center=(x, y))
        
        self.position = Vector2(x, y)
        self.velocity = Vector2(0, 0)
        self.acceleration = 0.5
        self.max_speed = 8
        self.ground_friction = 0.85
        self.air_friction = 0.98
        self.on_ground = True
    
    def update(self):
        keys = pygame.key.get_pressed()
        
        # 根据地面状态选择摩擦力
        friction = self.ground_friction if self.on_ground else self.air_friction
        
        # 输入加速度
        if keys[pygame.K_LEFT]:
            self.velocity.x -= self.acceleration
        if keys[pygame.K_RIGHT]:
            self.velocity.x += self.acceleration
        
        # 应用摩擦力
        self.velocity.x *= friction
        
        # 限制最大速度
        if abs(self.velocity.x) > self.max_speed:
            self.velocity.x = self.max_speed if self.velocity.x > 0 else -self.max_speed
        
        # 更新位置
        self.position += self.velocity
        self.rect.center = (int(self.position.x), int(self.position.y))
```

### 3.5 音效与音乐

#### 音频系统初始化

Pygame 使用 `pygame.mixer` 模块处理音频。通常在 `pygame.init()` 中会自动初始化 mixer，但也可以单独配置：

```python
import pygame

# 自定义 mixer 初始化（在 pygame.init() 之前）
# frequency: 采样率（Hz）
# size: 采样位数（-16 表示 16 位有符号）
# channels: 声道数（1=单声道, 2=立体声）
# buffer: 缓冲大小（数值越小延迟越低但可能卡顿）
pygame.mixer.pre_init(frequency=44100, size=-16, channels=2, buffer=512)

pygame.init()

# 检查音频是否初始化成功
if pygame.mixer.get_init():
    print("音频系统初始化成功")
    print(f"采样率: {pygame.mixer.get_init()[0]} Hz")
```

#### 加载与播放音效

音效（Sound）用于短音频片段，如跳跃、射击、爆炸等一次性音效。

```python
import pygame

pygame.mixer.pre_init(44100, -16, 2, 512)
pygame.init()

# 加载音效（支持 WAV、OGG，部分版本支持 MP3）
jump_sound = pygame.mixer.Sound("assets/sounds/jump.wav")
shoot_sound = pygame.mixer.Sound("assets/sounds/shoot.ogg")
coin_sound = pygame.mixer.Sound("assets/sounds/coin.wav")

# 获取音效信息
print(f"音效时长: {jump_sound.get_length():.2f} 秒")

# 播放音效
jump_sound.play()

# 播放并指定循环次数（-1 表示无限循环）
coin_sound.play(loops=0)  # 播放一次
coin_sound.play(loops=2)  # 播放 3 次（1次+2次循环）

# 调整音量（0.0 到 1.0）
jump_sound.set_volume(0.5)  # 50% 音量
current_volume = jump_sound.get_volume()

# 同时播放多个音效
shoot_sound.play()
jump_sound.play()

# 停止播放
jump_sound.stop()

# 淡入播放（毫秒）
jump_sound.play(fade_ms=1000)  # 1 秒淡入

# 音效类封装
class SoundManager:
    def __init__(self):
        self.sounds = {}
        self.volume = 1.0
    
    def load(self, name, path):
        """加载音效"""
        self.sounds[name] = pygame.mixer.Sound(path)
        self.sounds[name].set_volume(self.volume)
    
    def play(self, name, loops=0):
        """播放音效"""
        if name in self.sounds:
            self.sounds[name].play(loops=loops)
    
    def stop(self, name):
        """停止音效"""
        if name in self.sounds:
            self.sounds[name].stop()
    
    def set_volume(self, volume):
        """设置全局音量"""
        self.volume = max(0.0, min(1.0, volume))
        for sound in self.sounds.values():
            sound.set_volume(self.volume)

# 使用示例
sound_manager = SoundManager()
sound_manager.load("jump", "assets/sounds/jump.wav")
sound_manager.load("shoot", "assets/sounds/shoot.ogg")
sound_manager.load("explosion", "assets/sounds/explosion.wav")

# 在游戏中播放
sound_manager.play("jump")
```

#### 背景音乐控制

背景音乐（Music）使用流式播放，适合较长的音频文件。音乐和游戏音效是独立的系统。

```python
import pygame

pygame.mixer.init()

# 加载音乐（支持 MP3、OGG、WAV、MOD、XM 等）
pygame.mixer.music.load("assets/music/background.mp3")

# 播放音乐
pygame.mixer.music.play()

# 循环播放
pygame.mixer.music.play(loops=-1)  # -1 表示无限循环

# 播放指定次数
pygame.mixer.music.play(loops=2)   # 播放 3 次

# 从指定位置开始播放（秒）
pygame.mixer.music.play(start=30.0)  # 从 30 秒处开始

# 暂停和恢复
pygame.mixer.music.pause()      # 暂停
pygame.mixer.music.unpause()    # 恢复

# 停止
pygame.mixer.music.stop()

# 排队播放下一首
pygame.mixer.music.queue("assets/music/next_song.mp3")

# 设置音量
pygame.mixer.music.set_volume(0.5)
volume = pygame.mixer.music.get_volume()

# 获取播放状态
is_playing = pygame.mixer.music.get_busy()

# 音乐播放器类
class MusicPlayer:
    def __init__(self):
        self.playlist = []
        self.current_index = 0
        self.volume = 0.5
        pygame.mixer.music.set_volume(self.volume)
    
    def add_to_playlist(self, path):
        """添加音乐到播放列表"""
        self.playlist.append(path)
    
    def play(self, index=None):
        """播放音乐"""
        if index is not None:
            self.current_index = index
        
        if 0 <= self.current_index < len(self.playlist):
            pygame.mixer.music.load(self.playlist[self.current_index])
            pygame.mixer.music.play()
    
    def play_next(self):
        """播放下一首"""
        self.current_index = (self.current_index + 1) % len(self.playlist)
        self.play()
    
    def play_previous(self):
        """播放上一首"""
        self.current_index = (self.current_index - 1) % len(self.playlist)
        self.play()
    
    def set_volume(self, volume):
        """设置音量"""
        self.volume = max(0.0, min(1.0, volume))
        pygame.mixer.music.set_volume(self.volume)

# 使用示例
player = MusicPlayer()
player.add_to_playlist("assets/music/menu.mp3")
player.add_to_playlist("assets/music/level1.mp3")
player.add_to_playlist("assets/music/boss.mp3")
player.play(0)  # 播放第一首
```

#### 音量调节与淡入淡出

```python
import pygame

pygame.mixer.init()

# 加载并播放音乐
pygame.mixer.music.load("assets/music/background.mp3")

# 淡入播放
pygame.mixer.music.play(fade_ms=2000)  # 2 秒淡入

# 在音乐播放中实现淡出效果需要自定义
class MusicFader:
    def __init__(self):
        self.target_volume = 1.0
        self.current_volume = 1.0
        self.fade_speed = 0.02
    
    def fade_to(self, target, duration_ms):
        """淡出到指定音量"""
        self.target_volume = max(0.0, min(1.0, target))
        # 计算每帧需要改变多少音量
        self.fade_speed = abs(self.target_volume - self.current_volume) / (duration_ms / 16)
    
    def update(self):
        """每帧更新音量"""
        if self.current_volume < self.target_volume:
            self.current_volume = min(self.target_volume, 
                                     self.current_volume + self.fade_speed)
        elif self.current_volume > self.target_volume:
            self.current_volume = max(self.target_volume, 
                                     self.current_volume - self.fade_speed)
        
        pygame.mixer.music.set_volume(self.current_volume)
        return abs(self.current_volume - self.target_volume) < 0.001

# 场景切换时的音乐过渡
fader = MusicFader()
fader.fade_to(0, 1000)  # 1 秒内淡出到 0

# 在游戏循环中
while running:
    fader.update()
    # ... 其他逻辑
```

### 3.6 游戏状态管理

#### 游戏场景设计

复杂的游戏通常包含多个场景（Scene）：菜单、游戏关卡、暂停界面、设置界面等。良好的场景管理是游戏架构的关键。

```python
import pygame
from enum import Enum, auto

class GameState(Enum):
    """游戏状态枚举"""
    MENU = auto()
    PLAYING = auto()
    PAUSED = auto()
    GAME_OVER = auto()
    SETTINGS = auto()

class Scene:
    """场景基类"""
    def __init__(self, game):
        self.game = game
    
    def handle_event(self, event):
        """处理事件"""
        pass
    
    def update(self, dt):
        """更新逻辑"""
        pass
    
    def render(self, screen):
        """渲染"""
        pass
    
    def enter(self):
        """进入场景时调用"""
        pass
    
    def exit(self):
        """离开场景时调用"""
        pass

class MenuScene(Scene):
    """主菜单场景"""
    def __init__(self, game):
        super().__init__(game)
        self.font = pygame.font.Font(None, 48)
        self.options = ["开始游戏", "设置", "退出"]
        self.selected = 0
    
    def handle_event(self, event):
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP:
                self.selected = (self.selected - 1) % len(self.options)
            elif event.key == pygame.K_DOWN:
                self.selected = (self.selected + 1) % len(self.options)
            elif event.key == pygame.K_RETURN:
                if self.selected == 0:
                    self.game.change_scene("game")
                elif self.selected == 1:
                    self.game.change_scene("settings")
                elif self.selected == 2:
                    self.game.running = False
    
    def render(self, screen):
        screen.fill((20, 20, 40))
        
        for i, option in enumerate(self.options):
            color = (255, 255, 0) if i == self.selected else (255, 255, 255)
            text = self.font.render(option, True, color)
            rect = text.get_rect(center=(400, 250 + i * 60))
            screen.blit(text, rect)

class GameScene(Scene):
    """游戏主场景"""
    def __init__(self, game):
        super().__init__(game)
        self.player = Player(400, 300)
        self.all_sprites = pygame.sprite.Group(self.player)
    
    def handle_event(self, event):
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                self.game.push_scene("pause")  # 叠加暂停场景
    
    def update(self, dt):
        self.all_sprites.update()
    
    def render(self, screen):
        screen.fill((50, 50, 50))
        self.all_sprites.draw(screen)

class PauseScene(Scene):
    """暂停场景（叠加在游戏场景之上）"""
    def __init__(self, game):
        super().__init__(game)
        self.font = pygame.font.Font(None, 48)
    
    def handle_event(self, event):
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                self.game.pop_scene()  # 返回上一场景
    
    def render(self, screen):
        # 半透明覆盖层
        overlay = pygame.Surface((800, 600))
        overlay.fill((0, 0, 0))
        overlay.set_alpha(150)
        screen.blit(overlay, (0, 0))
        
        text = self.font.render("暂停 - 按 ESC 继续", True, (255, 255, 255))
        rect = text.get_rect(center=(400, 300))
        screen.blit(text, rect)
```

#### 状态机模式实现

状态机（State Machine）是管理游戏逻辑的强大工具。每个状态封装特定的行为和过渡规则。

```python
from enum import Enum, auto

class PlayerState(Enum):
    """玩家状态"""
    IDLE = auto()      # 站立
    WALKING = auto()   # 行走
    JUMPING = auto()   # 跳跃
    FALLING = auto()   # 下落
    ATTACKING = auto() # 攻击

class PlayerStateMachine:
    """玩家状态机"""
    def __init__(self, player):
        self.player = player
        self.state = PlayerState.IDLE
        self.state_time = 0  # 当前状态持续时间
        
        # 状态对应的方法
        self.state_methods = {
            PlayerState.IDLE: self._update_idle,
            PlayerState.WALKING: self._update_walking,
            PlayerState.JUMPING: self._update_jumping,
            PlayerState.FALLING: self._update_falling,
            PlayerState.ATTACKING: self._update_attacking,
        }
    
    def change_state(self, new_state):
        """切换状态"""
        if self.state != new_state:
            self._exit_state(self.state)
            self.state = new_state
            self.state_time = 0
            self._enter_state(new_state)
    
    def _enter_state(self, state):
        """进入状态"""
        if state == PlayerState.JUMPING:
            self.player.velocity.y = self.player.jump_force
        elif state == PlayerState.ATTACKING:
            self.player.start_attack()
    
    def _exit_state(self, state):
        """退出状态"""
        if state == PlayerState.ATTACKING:
            self.player.end_attack()
    
    def update(self, dt):
        """更新状态"""
        self.state_time += dt
        
        # 调用当前状态的更新方法
        self.state_methods[self.state](dt)
        
        # 状态转换逻辑
        self._check_transitions()
    
    def _check_transitions(self):
        """检查状态转换条件"""
        keys = pygame.key.get_pressed()
        
        if self.state == PlayerState.IDLE:
            if not self.player.on_ground:
                self.change_state(PlayerState.FALLING)
            elif keys[pygame.K_SPACE]:
                self.change_state(PlayerState.JUMPING)
            elif keys[pygame.K_LEFT] or keys[pygame.K_RIGHT]:
                self.change_state(PlayerState.WALKING)
            elif keys[pygame.K_z]:
                self.change_state(PlayerState.ATTACKING)
        
        elif self.state == PlayerState.WALKING:
            if not self.player.on_ground:
                self.change_state(PlayerState.FALLING)
            elif keys[pygame.K_SPACE]:
                self.change_state(PlayerState.JUMPING)
            elif not (keys[pygame.K_LEFT] or keys[pygame.K_RIGHT]):
                self.change_state(PlayerState.IDLE)
        
        elif self.state == PlayerState.JUMPING:
            if self.player.velocity.y > 0:
                self.change_state(PlayerState.FALLING)
        
        elif self.state == PlayerState.FALLING:
            if self.player.on_ground:
                self.change_state(PlayerState.IDLE)
        
        elif self.state == PlayerState.ATTACKING:
            if self.state_time > 0.3:  # 攻击持续 0.3 秒
                self.change_state(PlayerState.IDLE)
    
    def _update_idle(self, dt):
        """站立状态更新"""
        self.player.velocity.x = 0
        self.player.play_animation("idle")
    
    def _update_walking(self, dt):
        """行走状态更新"""
        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT]:
            self.player.velocity.x = -self.player.speed
        elif keys[pygame.K_RIGHT]:
            self.player.velocity.x = self.player.speed
        self.player.play_animation("walk")
    
    def _update_jumping(self, dt):
        """跳跃状态更新"""
        self.player.play_animation("jump")
    
    def _update_falling(self, dt):
        """下落状态更新"""
        self.player.play_animation("fall")
    
    def _update_attacking(self, dt):
        """攻击状态更新"""
        self.player.velocity.x = 0
        self.player.play_animation("attack")
```

#### 场景切换过渡效果

```python
import pygame

class Transition:
    """场景过渡效果基类"""
    def __init__(self, duration):
        self.duration = duration
        self.progress = 0  # 0 到 1
        self.finished = False
    
    def update(self, dt):
        self.progress += dt / self.duration
        if self.progress >= 1:
            self.progress = 1
            self.finished = True
    
    def render(self, screen):
        pass

class FadeTransition(Transition):
    """淡入淡出过渡"""
    def __init__(self, duration, fade_out=True):
        super().__init__(duration)
        self.fade_out = fade_out  # True=淡出, False=淡入
    
    def render(self, screen):
        if self.fade_out:
            alpha = int(255 * self.progress)
        else:
            alpha = int(255 * (1 - self.progress))
        
        overlay = pygame.Surface(screen.get_size())
        overlay.fill((0, 0, 0))
        overlay.set_alpha(alpha)
        screen.blit(overlay, (0, 0))

class WipeTransition(Transition):
    """擦除过渡"""
    def render(self, screen):
        width = int(screen.get_width() * self.progress)
        pygame.draw.rect(screen, (0, 0, 0), (0, 0, width, screen.get_height()))

class Game:
    """带场景管理的游戏类"""
    def __init__(self):
        pygame.init()
        self.screen = pygame.display.set_mode((800, 600))
        self.clock = pygame.time.Clock()
        self.running = True
        
        self.scenes = {}
        self.scene_stack = []
        self.current_scene = None
        
        self.transition = None
        self.next_scene_name = None
    
    def register_scene(self, name, scene_class):
        """注册场景"""
        self.scenes[name] = scene_class
    
    def change_scene(self, name, transition=None):
        """切换场景（带过渡效果）"""
        if transition:
            self.transition = transition
            self.next_scene_name = name
        else:
            self._set_scene(name)
    
    def _set_scene(self, name):
        """直接设置场景"""
        if self.current_scene:
            self.current_scene.exit()
        
        if name in self.scenes:
            self.current_scene = self.scenes[name](self)
            self.current_scene.enter()
    
    def push_scene(self, name):
        """叠加场景"""
        if self.current_scene:
            self.scene_stack.append(self.current_scene)
        self._set_scene(name)
    
    def pop_scene(self):
        """返回上一场景"""
        if self.scene_stack:
            self.current_scene = self.scene_stack.pop()
            self.current_scene.enter()
    
    def run(self):
        while self.running:
            dt = self.clock.tick(60) / 1000.0
            
            # 事件处理
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    self.running = False
                elif self.current_scene and not self.transition:
                    self.current_scene.handle_event(event)
            
            # 更新
            if self.transition:
                self.transition.update(dt)
                if self.transition.finished:
                    if self.transition.fade_out and self.next_scene_name:
                        # 淡出完成，切换场景，然后淡入
                        self._set_scene(self.next_scene_name)
                        self.next_scene_name = None
                        self.transition = FadeTransition(0.5, fade_out=False)
                    else:
                        # 淡入完成
                        self.transition = None
            elif self.current_scene:
                self.current_scene.update(dt)
            
            # 渲染
            if self.current_scene:
                self.current_scene.render(self.screen)
            
            if self.transition:
                self.transition.render(self.screen)
            
            pygame.display.flip()
        
        pygame.quit()
```

#### 游戏数据存档（JSON/ pickle）

```python
import json
import pickle
import os

class SaveManager:
    """存档管理器"""
    SAVE_DIR = "saves"
    
    def __init__(self):
        if not os.path.exists(self.SAVE_DIR):
            os.makedirs(self.SAVE_DIR)
    
    def save_json(self, data, filename):
        """保存为 JSON（适合简单数据）"""
        filepath = os.path.join(self.SAVE_DIR, f"{filename}.json")
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
    
    def load_json(self, filename):
        """加载 JSON 存档"""
        filepath = os.path.join(self.SAVE_DIR, f"{filename}.json")
        if os.path.exists(filepath):
            with open(filepath, "r", encoding="utf-8") as f:
                return json.load(f)
        return None
    
    def save_pickle(self, data, filename):
        """保存为 pickle（适合复杂对象）"""
        filepath = os.path.join(self.SAVE_DIR, f"{filename}.save")
        with open(filepath, "wb") as f:
            pickle.dump(data, f)
    
    def load_pickle(self, filename):
        """加载 pickle 存档"""
        filepath = os.path.join(self.SAVE_DIR, f"{filename}.save")
        if os.path.exists(filepath):
            with open(filepath, "rb") as f:
                return pickle.load(f)
        return None

# 游戏数据示例
class GameData:
    """游戏存档数据结构"""
    def __init__(self):
        self.player_name = "Player"
        self.level = 1
        self.score = 0
        self.health = 100
        self.position = [100, 200]
        self.inventory = ["sword", "potion"]
        self.unlocked_levels = [1]
    
    def to_dict(self):
        """转换为字典（用于 JSON 序列化）"""
        return {
            "player_name": self.player_name,
            "level": self.level,
            "score": self.score,
            "health": self.health,
            "position": self.position,
            "inventory": self.inventory,
            "unlocked_levels": self.unlocked_levels
        }
    
    @classmethod
    def from_dict(cls, data):
        """从字典创建"""
        game_data = cls()
        game_data.player_name = data.get("player_name", "Player")
        game_data.level = data.get("level", 1)
        game_data.score = data.get("score", 0)
        game_data.health = data.get("health", 100)
        game_data.position = data.get("position", [100, 200])
        game_data.inventory = data.get("inventory", [])
        game_data.unlocked_levels = data.get("unlocked_levels", [1])
        return game_data

# 使用示例
save_manager = SaveManager()

# 保存游戏
game_data = GameData()
game_data.level = 5
game_data.score = 1000
save_manager.save_json(game_data.to_dict(), "save_01")

# 加载游戏
loaded_data = save_manager.load_json("save_01")
if loaded_data:
    game_data = GameData.from_dict(loaded_data)
    print(f"加载存档：关卡 {game_data.level}, 分数 {game_data.score}")
```

### 3.7 完整项目：平台跳跃游戏

本节将构建一个完整的平台跳跃游戏，整合前面介绍的所有概念。项目采用模块化设计，便于维护和扩展。

#### 项目结构

```
platformer/
├── main.py              # 游戏入口
├── settings.py          # 游戏配置
├── sprites/
│   ├── __init__.py
│   ├── player.py        # 玩家类
│   ├── platform.py      # 平台类
│   ├── enemy.py         # 敌人类
│   └── item.py          # 物品类
├── levels/
│   ├── level1.json      # 关卡数据
│   └── level2.json
├── assets/
│   ├── images/          # 图像资源
│   └── sounds/          # 音效资源
└── utils.py             # 工具函数
```

#### settings.py - 游戏配置

```python
"""游戏配置模块"""
import pygame

# 窗口设置
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
FPS = 60
TITLE = "平台跳跃游戏"

# 颜色定义
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)
YELLOW = (255, 255, 0)
SKY_BLUE = (135, 206, 235)

# 玩家属性
PLAYER_SPEED = 5
PLAYER_JUMP = -15
PLAYER_GRAVITY = 0.8
PLAYER_SIZE = (40, 60)

# 敌人类型
ENEMY_TYPES = {
    "patrol": {
        "speed": 2,
        "health": 1,
        "color": RED
    },
    "chase": {
        "speed": 3,
        "health": 2,
        "color": (255, 100, 100)
    }
}

# 物品类型
ITEM_TYPES = {
    "coin": {"value": 10, "color": YELLOW},
    "health": {"value": 25, "color": GREEN},
    "powerup": {"value": 0, "color": BLUE}
}
```

#### sprites/player.py - 玩家类

```python
"""玩家类实现"""
import pygame
from pygame.math import Vector2
from settings import PLAYER_SPEED, PLAYER_JUMP, PLAYER_GRAVITY, PLAYER_SIZE, GREEN

class Player(pygame.sprite.Sprite):
    def __init__(self, x, y, game):
        super().__init__()
        self.game = game
        
        # 图像和矩形
        self.image = pygame.Surface(PLAYER_SIZE)
        self.image.fill(GREEN)
        self.rect = self.image.get_rect()
        
        # 物理属性
        self.position = Vector2(x, y)
        self.velocity = Vector2(0, 0)
        self.acceleration = Vector2(0, 0)
        
        # 状态
        self.on_ground = False
        self.facing_right = True
        self.is_jumping = False
        
        # 属性
        self.max_health = 100
        self.health = self.max_health
        self.invincible = False
        self.invincible_time = 0
        self.jump_count = 0      # 当前跳跃次数
        self.max_jumps = 2       # 最大跳跃次数（二段跳）
        
        # 动画
        self.animations = {}
        self.current_animation = None
        self.animation_frame = 0
        self.animation_timer = 0
        
        # 同步 rect 位置
        self.rect.center = (int(self.position.x), int(self.position.y))
    
    def load_animations(self):
        """加载动画帧（简化版使用颜色代替）"""
        # 实际项目中这里加载图像
        pass
    
    def update(self, dt):
        """更新玩家状态"""
        self.handle_input()
        self.apply_physics()
        self.check_invincibility(dt)
        self.update_animation(dt)
        
        # 同步 rect
        self.rect.center = (int(self.position.x), int(self.position.y))
    
    def handle_input(self):
        """处理输入"""
        keys = pygame.key.get_pressed()
        
        # 水平移动
        self.velocity.x = 0
        if keys[pygame.K_LEFT] or keys[pygame.K_a]:
            self.velocity.x = -PLAYER_SPEED
            self.facing_right = False
        if keys[pygame.K_RIGHT] or keys[pygame.K_d]:
            self.velocity.x = PLAYER_SPEED
            self.facing_right = True
    
    def apply_physics(self):
        """应用物理"""
        # 重力
        self.velocity.y += PLAYER_GRAVITY
        
        # 更新位置
        self.position += self.velocity
        self.rect.center = (int(self.position.x), int(self.position.y))
        
        # 边界限制
        if self.rect.left < 0:
            self.rect.left = 0
            self.position.x = self.rect.centerx
        if self.rect.right > self.game.screen.get_width():
            self.rect.right = self.game.screen.get_width()
            self.position.x = self.rect.centerx
    
    def jump(self):
        """跳跃（支持二段跳）"""
        if self.jump_count < self.max_jumps:
            self.velocity.y = PLAYER_JUMP
            self.jump_count += 1
            self.on_ground = False
            # 播放跳跃音效
            if hasattr(self.game, 'sound_manager'):
                self.game.sound_manager.play("jump")
    
    def land(self):
        """着陆"""
        self.on_ground = True
        self.jump_count = 0
        self.velocity.y = 0
    
    def take_damage(self, damage):
        """受到伤害"""
        if not self.invincible:
            self.health -= damage
            self.invincible = True
            self.invincible_time = 1.0  # 1秒无敌时间
            
            # 受伤闪烁效果
            self.image.set_alpha(128)
            
            if self.health <= 0:
                self.die()
    
    def heal(self, amount):
        """恢复生命"""
        self.health = min(self.max_health, self.health + amount)
    
    def check_invincibility(self, dt):
        """检查无敌状态"""
        if self.invincible:
            self.invincible_time -= dt
            if self.invincible_time <= 0:
                self.invincible = False
                self.image.set_alpha(255)
    
    def die(self):
        """死亡"""
        self.game.game_over()
    
    def update_animation(self, dt):
        """更新动画"""
        # 简化版：根据状态改变颜色
        if self.invincible:
            # 闪烁效果
            alpha = 128 + int(127 * (1 if int(self.invincible_time * 10) % 2 == 0 else 0))
            self.image.set_alpha(alpha)
    
    def draw(self, surface):
        """绘制玩家"""
        # 绘制血条
        health_bar_width = 40
        health_bar_height = 5
        health_ratio = self.health / self.max_health
        
        # 背景（灰色）
        pygame.draw.rect(surface, (100, 100, 100), 
                        (self.rect.centerx - health_bar_width//2, 
                         self.rect.top - 10, 
                         health_bar_width, health_bar_height))
        
        # 血条（红色到绿色渐变）
        color = (int(255 * (1 - health_ratio)), int(255 * health_ratio), 0)
        pygame.draw.rect(surface, color,
                        (self.rect.centerx - health_bar_width//2,
                         self.rect.top - 10,
                         int(health_bar_width * health_ratio), health_bar_height))
        
        # 绘制玩家
        surface.blit(self.image, self.rect)
```

#### sprites/platform.py - 平台类

```python
"""平台类实现"""
import pygame
from settings import WHITE

class Platform(pygame.sprite.Sprite):
    """静态平台"""
    def __init__(self, x, y, width, height):
        super().__init__()
        self.image = pygame.Surface((width, height))
        self.image.fill((100, 100, 100))  # 灰色平台
        
        # 添加边框
        pygame.draw.rect(self.image, WHITE, (0, 0, width, height), 2)
        
        self.rect = self.image.get_rect()
        self.rect.topleft = (x, y)
        self.is_solid = True  # 是否实心（可站立）

class MovingPlatform(Platform):
    """移动平台"""
    def __init__(self, x, y, width, height, dx=0, dy=0, speed=2):
        super().__init__(x, y, width, height)
        self.start_pos = pygame.math.Vector2(x, y)
        self.movement = pygame.math.Vector2(dx, dy)
        self.speed = speed
        self.direction = 1
        self.progress = 0
        
        # 不同颜色区分
        self.image.fill((150, 100, 50))
    
    def update(self, dt):
        """更新移动"""
        self.progress += self.speed * dt * self.direction
        
        # 到达端点时反向
        if self.progress >= 1 or self.progress <= 0:
            self.direction *= -1
            self.progress = max(0, min(1, self.progress))
        
        # 计算新位置
        new_pos = self.start_pos + self.movement * self.progress
        
        # 更新位置
        dx = new_pos.x - self.rect.x
        dy = new_pos.y - self.rect.y
        self.rect.x = int(new_pos.x)
        self.rect.y = int(new_pos.y)
        
        return dx, dy  # 返回移动量（用于带动上面的玩家）
```

#### sprites/enemy.py - 敌人类

```python
"""敌人类实现"""
import pygame
from pygame.math import Vector2
from settings import ENEMY_TYPES, RED

class Enemy(pygame.sprite.Sprite):
    """敌人基类"""
    def __init__(self, x, y, enemy_type="patrol"):
        super().__init__()
        self.enemy_type = enemy_type
        self.config = ENEMY_TYPES[enemy_type]
        
        self.image = pygame.Surface((40, 40))
        self.image.fill(self.config["color"])
        self.rect = self.image.get_rect()
        self.rect.center = (x, y)
        
        self.position = Vector2(x, y)
        self.velocity = Vector2(0, 0)
        self.speed = self.config["speed"]
        self.health = self.config["health"]
    
    def update(self, dt, player=None):
        """更新敌人（子类重写）"""
        pass
    
    def take_damage(self, damage):
        """受到伤害"""
        self.health -= damage
        if self.health <= 0:
            self.kill()  # 从所有精灵组中移除
            return True  # 死亡
        return False

class PatrolEnemy(Enemy):
    """巡逻敌人"""
    def __init__(self, x, y, patrol_distance=100):
        super().__init__(x, y, "patrol")
        self.start_x = x
        self.patrol_distance = patrol_distance
        self.direction = 1
        
        # 绘制眼睛
        pygame.draw.circle(self.image, WHITE, (12, 15), 5)
        pygame.draw.circle(self.image, WHITE, (28, 15), 5)
        pygame.draw.circle(self.image, BLACK, (12, 15), 2)
        pygame.draw.circle(self.image, BLACK, (28, 15), 2)
    
    def update(self, dt, player=None):
        """巡逻移动"""
        self.position.x += self.speed * self.direction
        
        # 到达巡逻边界时转向
        if self.position.x > self.start_x + self.patrol_distance:
            self.direction = -1
        elif self.position.x < self.start_x - self.patrol_distance:
            self.direction = 1
        
        self.rect.centerx = int(self.position.x)

class ChaseEnemy(Enemy):
    """追击敌人"""
    def __init__(self, x, y, detection_range=200):
        super().__init__(x, y, "chase")
        self.detection_range = detection_range
        self.chasing = False
        
        # 绘制愤怒的眼睛
        pygame.draw.polygon(self.image, WHITE, [(8, 10), (16, 20), (8, 20)])
        pygame.draw.polygon(self.image, WHITE, [(32, 10), (24, 20), (32, 20)])
    
    def update(self, dt, player=None):
        """追击玩家"""
        if player:
            distance = self.position.distance_to(Vector2(player.rect.center))
            
            if distance < self.detection_range:
                self.chasing = True
            elif distance > self.detection_range * 1.5:
                self.chasing = False
            
            if self.chasing:
                # 向玩家移动
                direction = Vector2(player.rect.center) - self.position
                if direction.length() > 0:
                    direction = direction.normalize()
                    self.position += direction * self.speed
                    self.rect.center = (int(self.position.x), int(self.position.y))
```

#### sprites/item.py - 物品类

```python
"""物品类实现"""
import pygame
import math
from settings import ITEM_TYPES, YELLOW, GREEN, BLUE

class Item(pygame.sprite.Sprite):
    """可收集物品"""
    def __init__(self, x, y, item_type="coin"):
        super().__init__()
        self.item_type = item_type
        self.config = ITEM_TYPES[item_type]
        
        # 根据类型设置大小和颜色
        size = 30 if item_type == "coin" else 35
        self.image = pygame.Surface((size, size), pygame.SRCALPHA)
        self.rect = self.image.get_rect()
        self.rect.center = (x, y)
        
        self.base_y = y  # 用于浮动动画
        self.float_offset = 0
        self.float_speed = 3
        
        self.draw_item()
    
    def draw_item(self):
        """绘制物品图形"""
        self.image.fill((0, 0, 0, 0))  # 透明
        
        if self.item_type == "coin":
            # 绘制金币（圆形）
            pygame.draw.circle(self.image, YELLOW, 
                             (self.rect.width//2, self.rect.height//2), 12)
            pygame.draw.circle(self.image, (255, 200, 0), 
                             (self.rect.width//2, self.rect.height//2), 8)
        elif self.item_type == "health":
            # 绘制心形（简化版）
            color = self.config["color"]
            center = (self.rect.width//2, self.rect.height//2)
            # 两个圆组成心形上半部分
            pygame.draw.circle(self.image, color, (center[0]-7, center[1]-5), 8)
            pygame.draw.circle(self.image, color, (center[0]+7, center[1]-5), 8)
            # 三角形组成下半部分
            pygame.draw.polygon(self.image, color, [
                (center[0]-15, center[1]),
                (center[0]+15, center[1]),
                (center[0], center[1]+15)
            ])
        elif self.item_type == "powerup":
            # 绘制星形
            color = self.config["color"]
            self.draw_star(self.image, color)
    
    def draw_star(self, surface, color):
        """绘制星形"""
        center = (self.rect.width//2, self.rect.height//2)
        points = []
        for i in range(10):
            angle = math.radians(i * 36 - 90)
            radius = 15 if i % 2 == 0 else 7
            x = center[0] + radius * math.cos(angle)
            y = center[1] + radius * math.sin(angle)
            points.append((x, y))
        pygame.draw.polygon(surface, color, points)
    
    def update(self, dt):
        """更新（浮动动画）"""
        self.float_offset += self.float_speed * dt
        new_y = self.base_y + math.sin(self.float_offset) * 5
        self.rect.centery = int(new_y)
    
    def collect(self, player):
        """被收集时调用"""
        if self.item_type == "coin":
            if hasattr(player, 'game') and player.game:
                player.game.add_score(self.config["value"])
        elif self.item_type == "health":
            player.heal(self.config["value"])
        elif self.item_type == "powerup":
            # 激活能力增强效果
            pass
        
        self.kill()  # 移除物品
```

#### main.py - 游戏主程序

```python
"""平台跳跃游戏主程序"""
import pygame
import json
import sys
from settings import *
from sprites.player import Player
from sprites.platform import Platform, MovingPlatform
from sprites.enemy import PatrolEnemy, ChaseEnemy
from sprites.item import Item

class Game:
    """游戏主类"""
    def __init__(self):
        pygame.init()
        pygame.mixer.pre_init(44100, -16, 2, 512)
        
        self.screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
        pygame.display.set_caption(TITLE)
        self.clock = pygame.time.Clock()
        self.running = True
        self.playing = False
        
        # 游戏状态
        self.score = 0
        self.level = 1
        self.game_over_flag = False
        
        # 精灵组
        self.all_sprites = pygame.sprite.Group()
        self.platforms = pygame.sprite.Group()
        self.enemies = pygame.sprite.Group()
        self.items = pygame.sprite.Group()
        
        # 玩家
        self.player = None
        
        # 字体
        self.font_large = pygame.font.Font(None, 48)
        self.font_small = pygame.font.Font(None, 24)
    
    def new_game(self):
        """开始新游戏"""
        self.all_sprites.empty()
        self.platforms.empty()
        self.enemies.empty()
        self.items.empty()
        
        self.score = 0
        self.level = 1
        self.game_over_flag = False
        
        # 创建玩家
        self.player = Player(100, 400, self)
        self.all_sprites.add(self.player)
        
        # 加载关卡
        self.load_level(self.level)
        
        self.playing = True
    
    def load_level(self, level_num):
        """加载关卡"""
        try:
            with open(f"levels/level{level_num}.json", "r") as f:
                level_data = json.load(f)
        except FileNotFoundError:
            # 默认关卡
            self.create_default_level()
            return
        
        # 创建平台
        for platform_data in level_data.get("platforms", []):
            if platform_data.get("moving"):
                plat = MovingPlatform(
                    platform_data["x"], platform_data["y"],
                    platform_data["width"], platform_data["height"],
                    platform_data.get("dx", 0), platform_data.get("dy", 0),
                    platform_data.get("speed", 2)
                )
            else:
                plat = Platform(
                    platform_data["x"], platform_data["y"],
                    platform_data["width"], platform_data["height"]
                )
            self.platforms.add(plat)
            self.all_sprites.add(plat)
        
        # 创建敌人
        for enemy_data in level_data.get("enemies", []):
            if enemy_data["type"] == "patrol":
                enemy = PatrolEnemy(
                    enemy_data["x"], enemy_data["y"],
                    enemy_data.get("patrol_distance", 100)
                )
            else:
                enemy = ChaseEnemy(
                    enemy_data["x"], enemy_data["y"],
                    enemy_data.get("detection_range", 200)
                )
            self.enemies.add(enemy)
            self.all_sprites.add(enemy)
        
        # 创建物品
        for item_data in level_data.get("items", []):
            item = Item(item_data["x"], item_data["y"], item_data["type"])
            self.items.add(item)
            self.all_sprites.add(item)
    
    def create_default_level(self):
        """创建默认关卡"""
        # 地面
        ground = Platform(0, 550, 800, 50)
        self.platforms.add(ground)
        self.all_sprites.add(ground)
        
        # 平台
        platforms_data = [
            (200, 450, 150, 20),
            (450, 350, 150, 20),
            (100, 250, 150, 20),
            (550, 200, 150, 20),
        ]
        for x, y, w, h in platforms_data:
            plat = Platform(x, y, w, h)
            self.platforms.add(plat)
            self.all_sprites.add(plat)
        
        # 移动平台
        moving_plat = MovingPlatform(350, 400, 100, 20, dx=0, dy=100, speed=50)
        self.platforms.add(moving_plat)
        self.all_sprites.add(moving_plat)
        
        # 敌人
        enemy1 = PatrolEnemy(300, 500, 100)
        enemy2 = ChaseEnemy(600, 500, 150)
        self.enemies.add(enemy1, enemy2)
        self.all_sprites.add(enemy1, enemy2)
        
        # 金币
        for i in range(5):
            coin = Item(250 + i * 100, 300, "coin")
            self.items.add(coin)
            self.all_sprites.add(coin)
        
        # 生命值
        health = Item(150, 200, "health")
        self.items.add(health)
        self.all_sprites.add(health)
    
    def run(self):
        """游戏主循环"""
        self.show_start_screen()
        
        while self.running:
            self.new_game()
            
            while self.playing:
                dt = self.clock.tick(FPS) / 1000.0
                self.events()
                self.update(dt)
                self.render()
            
            if self.game_over_flag:
                self.show_game_over_screen()
        
        pygame.quit()
        sys.exit()
    
    def events(self):
        """处理事件"""
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                self.playing = False
                self.running = False
            
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    self.player.jump()
                elif event.key == pygame.K_ESCAPE:
                    self.playing = False
                elif event.key == pygame.K_r:
                    self.playing = False  # 重新开始
            
            # 调试：添加敌人
            elif event.type == pygame.MOUSEBUTTONDOWN:
                if event.button == 1:  # 左键添加巡逻敌人
                    enemy = PatrolEnemy(event.pos[0], event.pos[1])
                    self.enemies.add(enemy)
                    self.all_sprites.add(enemy)
                elif event.button == 3:  # 右键添加平台
                    plat = Platform(event.pos[0]-50, event.pos[1]-10, 100, 20)
                    self.platforms.add(plat)
                    self.all_sprites.add(plat)
    
    def update(self, dt):
        """更新游戏逻辑"""
        # 更新所有精灵
        self.all_sprites.update(dt)
        
        # 平台碰撞检测
        self.handle_platform_collisions()
        
        # 敌人碰撞检测
        self.handle_enemy_collisions()
        
        # 物品收集检测
        self.handle_item_collisions()
        
        # 检查是否掉出屏幕
        if self.player.rect.top > SCREEN_HEIGHT:
            self.player.die()
        
        # 更新敌人AI
        for enemy in self.enemies:
            enemy.update(dt, self.player)
    
    def handle_platform_collisions(self):
        """处理平台碰撞"""
        # 检测玩家与平台
        hits = pygame.sprite.spritecollide(self.player, self.platforms, False)
        
        if hits:
            for platform in hits:
                # 确定碰撞方向
                if self.player.velocity.y > 0:  # 下落
                    # 从上方落下
                    if self.player.rect.bottom <= platform.rect.centery:
                        self.player.rect.bottom = platform.rect.top
                        self.player.position.y = self.player.rect.centery
                        self.player.land()
                        
                        # 如果是移动平台，跟随移动
                        if isinstance(platform, MovingPlatform):
                            dx, dy = platform.update(1/60)  # 获取移动量
                            self.player.rect.x += dx
                            self.player.position.x = self.player.rect.centerx
                
                elif self.player.velocity.y < 0:  # 上升
                    # 碰到平台底部
                    if self.player.rect.top >= platform.rect.centery:
                        self.player.rect.top = platform.rect.bottom
                        self.player.position.y = self.player.rect.centery
                        self.player.velocity.y = 0
                
                # 水平碰撞
                if self.player.velocity.x > 0:  # 向右
                    if self.player.rect.right > platform.rect.left:
                        self.player.rect.right = platform.rect.left
                        self.player.position.x = self.player.rect.centerx
                elif self.player.velocity.x < 0:  # 向左
                    if self.player.rect.left < platform.rect.right:
                        self.player.rect.left = platform.rect.right
                        self.player.position.x = self.player.rect.centerx
        else:
            self.player.on_ground = False
    
    def handle_enemy_collisions(self):
        """处理敌人碰撞"""
        hits = pygame.sprite.spritecollide(self.player, self.enemies, False)
        
        for enemy in hits:
            # 踩踏敌人（从上方落下）
            if self.player.velocity.y > 0 and self.player.rect.bottom < enemy.rect.centery:
                enemy.take_damage(1)
                self.player.velocity.y = -10  # 小跳跃
                self.add_score(50)
            else:
                # 被敌人伤害
                self.player.take_damage(20)
    
    def handle_item_collisions(self):
        """处理物品收集"""
        hits = pygame.sprite.spritecollide(self.player, self.items, False)
        
        for item in hits:
            item.collect(self.player)
    
    def render(self):
        """渲染画面"""
        # 天空背景
        self.screen.fill(SKY_BLUE)
        
        # 绘制所有精灵
        for sprite in self.all_sprites:
            if isinstance(sprite, Player):
                sprite.draw(self.screen)
            else:
                self.screen.blit(sprite.image, sprite.rect)
        
        # 绘制 HUD
        self.draw_hud()
        
        pygame.display.flip()
    
    def draw_hud(self):
        """绘制 HUD"""
        # 分数
        score_text = self.font_small.render(f"Score: {self.score}", True, WHITE)
        self.screen.blit(score_text, (10, 10))
        
        # 生命值
        health_text = self.font_small.render(f"Health: {self.player.health}", True, WHITE)
        self.screen.blit(health_text, (10, 35))
        
        # 关卡
        level_text = self.font_small.render(f"Level: {self.level}", True, WHITE)
        self.screen.blit(level_text, (SCREEN_WIDTH - 100, 10))
        
        # 操作提示
        hint_text = self.font_small.render("WASD/Arrows: Move | Space: Jump | ESC: Menu", True, WHITE)
        self.screen.blit(hint_text, (10, SCREEN_HEIGHT - 30))
    
    def add_score(self, points):
        """增加分数"""
        self.score += points
    
    def game_over(self):
        """游戏结束"""
        self.playing = False
        self.game_over_flag = True
    
    def show_start_screen(self):
        """显示开始界面"""
        waiting = True
        while waiting and self.running:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    self.running = False
                    waiting = False
                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_RETURN:
                        waiting = False
                    elif event.key == pygame.K_ESCAPE:
                        self.running = False
                        waiting = False
            
            self.screen.fill((20, 20, 40))
            
            # 标题
            title = self.font_large.render("PLATFORMER GAME", True, GREEN)
            title_rect = title.get_rect(center=(SCREEN_WIDTH//2, 200))
            self.screen.blit(title, title_rect)
            
            # 提示
            hint = self.font_small.render("Press ENTER to Start", True, WHITE)
            hint_rect = hint.get_rect(center=(SCREEN_WIDTH//2, 350))
            self.screen.blit(hint, hint_rect)
            
            controls = self.font_small.render("WASD/Arrows: Move | Space: Jump", True, WHITE)
            controls_rect = controls.get_rect(center=(SCREEN_WIDTH//2, 400))
            self.screen.blit(controls, controls_rect)
            
            pygame.display.flip()
            self.clock.tick(FPS)
    
    def show_game_over_screen(self):
        """显示游戏结束界面"""
        waiting = True
        while waiting and self.running:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    self.running = False
                    waiting = False
                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_r:
                        waiting = False  # 重新开始
                    elif event.key == pygame.K_ESCAPE:
                        self.running = False
                        waiting = False
            
            self.screen.fill((40, 0, 0))
            
            # 游戏结束
            over_text = self.font_large.render("GAME OVER", True, RED)
            over_rect = over_text.get_rect(center=(SCREEN_WIDTH//2, 200))
            self.screen.blit(over_text, over_rect)
            
            # 分数
            score_text = self.font_small.render(f"Final Score: {self.score}", True, WHITE)
            score_rect = score_text.get_rect(center=(SCREEN_WIDTH//2, 300))
            self.screen.blit(score_text, score_rect)
            
            # 提示
            hint = self.font_small.render("Press R to Restart or ESC to Quit", True, WHITE)
            hint_rect = hint.get_rect(center=(SCREEN_WIDTH//2, 400))
            self.screen.blit(hint, hint_rect)
            
            pygame.display.flip()
            self.clock.tick(FPS)

if __name__ == "__main__":
    game = Game()
    game.run()
```

#### levels/level1.json - 关卡数据示例

```json
{
  "name": "Level 1 - Beginning",
  "platforms": [
    {"x": 0, "y": 550, "width": 800, "height": 50},
    {"x": 200, "y": 450, "width": 150, "height": 20},
    {"x": 450, "y": 350, "width": 150, "height": 20},
    {"x": 100, "y": 250, "width": 150, "height": 20},
    {"x": 550, "y": 200, "width": 150, "height": 20},
    {"x": 350, "y": 120, "width": 100, "height": 20}
  ],
  "moving_platforms": [
    {"x": 350, "y": 400, "width": 100, "height": 20, "dx": 0, "dy": 100, "speed": 50}
  ],
  "enemies": [
    {"x": 300, "y": 500, "type": "patrol", "patrol_distance": 100},
    {"x": 500, "y": 300, "type": "patrol", "patrol_distance": 50},
    {"x": 600, "y": 500, "type": "chase", "detection_range": 150}
  ],
  "items": [
    {"x": 275, "y": 400, "type": "coin"},
    {"x": 375, "y": 300, "type": "coin"},
    {"x": 175, "y": 200, "type": "coin"},
    {"x": 625, "y": 150, "type": "coin"},
    {"x": 400, "y": 70, "type": "coin"},
    {"x": 150, "y": 200, "type": "health"}
  ],
  "player_start": {"x": 100, "y": 400},
  "exit": {"x": 750, "y": 100}
}
```

这个项目展示了如何使用 Pygame 构建一个完整的平台跳跃游戏，涵盖了玩家控制、敌人 AI、物理系统、碰撞检测、关卡加载等核心游戏开发技术。

### 3.8 其他游戏框架简介

#### Arcade：现代 Python 游戏框架

Arcade 是一个基于 OpenGL 的现代 Python 2D 游戏框架，设计上比 Pygame 更加 Pythonic，性能也更好。

**特点：**
- 硬件加速渲染（OpenGL）
- 内置物理引擎（Pymunk 集成）
- 更完善的精灵系统
- 内置相机系统和视差滚动
- 更好的文本渲染支持

```python
import arcade

class MyGame(arcade.Window):
    def __init__(self):
        super().__init__(800, 600, "Arcade Game")
        self.player = None
    
    def setup(self):
        self.player = arcade.Sprite("player.png", scale=0.5)
        self.player.center_x = 400
        self.player.center_y = 300
    
    def on_draw(self):
        arcade.start_render()
        self.player.draw()
    
    def on_update(self, delta_time):
        self.player.update()
    
    def on_key_press(self, key, modifiers):
        if key == arcade.key.LEFT:
            self.player.change_x = -5

window = MyGame()
window.setup()
arcade.run()
```

#### Panda3D：3D 游戏引擎

Panda3D 是迪士尼开发的开源 3D 游戏引擎，被用于多个商业项目。它提供了完整的 3D 渲染管线、动画系统、物理引擎等。

**特点：**
- 完整的 3D 渲染管线
- 骨骼动画和蒙皮
- 着色器支持
- 碰撞检测系统
- 场景图管理
- 多线程渲染

```python
from direct.showbase.ShowBase import ShowBase
from panda3d.core import *

class MyApp(ShowBase):
    def __init__(self):
        ShowBase.__init__(self)
        
        # 加载模型
        self.scene = self.loader.loadModel("models/environment")
        self.scene.reparentTo(self.render)
        self.scene.setScale(0.25, 0.25, 0.25)
        self.scene.setPos(-8, 42, 0)

app = MyApp()
app.run()
```

#### Godot（GDScript 类似 Python）

Godot 虽然不是 Python 框架，但其内置脚本语言 GDScript 的语法与 Python 极为相似，学习成本很低。

**GDScript 示例：**

```gdscript
extends CharacterBody2D

@export var speed = 400
@export var jump_speed = -600
@export var gravity = 1200

func _physics_process(delta):
    velocity.y += gravity * delta
    
    if Input.is_action_pressed("ui_left"):
        velocity.x = -speed
    elif Input.is_action_pressed("ui_right"):
        velocity.x = speed
    else:
        velocity.x = 0
    
    if Input.is_action_just_pressed("ui_up") and is_on_floor():
        velocity.y = jump_speed
    
    move_and_slide()
```

**Godot 的优势：**
- 完整的游戏引擎（编辑器、资源管理、场景系统）
- 2D 和 3D 支持
- 可视化脚本和 C# 支持
- 内置物理引擎
- 导出到多平台（Windows、macOS、Linux、Web、移动设备）

### 3.9 里程碑书籍推荐

#### 《Python 游戏编程快速上手》- Al Sweigart

这是一本面向初学者的游戏编程入门书籍，通过制作多个经典游戏（如猜数字、石头剪刀布、贪吃蛇、俄罗斯方块等）来讲解 Python 编程基础。书中的项目由浅入深，适合没有任何编程经验的读者。

**适合人群：** 完全的编程初学者
**难度：** ⭐
**亮点：** 项目驱动、趣味性强

#### 《Making Games with Python & Pygame》- Al Sweigart

同样出自 Al Sweigart 之手，这本书专注于使用 Pygame 开发游戏。书中包含多个完整的游戏项目，如记忆匹配、滑动拼图、松鼠吃松果、俄罗斯方块等。每个项目都有详细的代码解释和逐步指导。

**适合人群：** 有一定 Python 基础，想学习游戏开发的读者
**难度：** ⭐⭐
**亮点：** 项目完整、代码开源、讲解细致

#### 其他推荐

| 书名 | 作者 | 适合 | 特点 |
|------|------|------|------|
| 《游戏编程模式》 | Robert Nystrom | 中级 | 设计模式在游戏中的应用 |
| 《Real-World Python》 | Lee Vaughan | 中级 | 多个实际项目，包括游戏 |
| 《Python游戏开发实战》 | 国内作者 | 中级 | 中文资料，项目案例丰富 |

### 3.10 推荐 GitHub 项目

#### pygame/pygame

Pygame 的官方仓库，包含了源代码、示例和文档。研究源码可以深入理解游戏引擎的工作原理。

- **Stars:** 7k+
- **链接:** https://github.com/pygame/pygame
- **学习价值：** 了解 SDL 封装、事件系统、Surface 管理

#### clear-code-projects/Pygame-Tutorials

一个非常受欢迎的 Pygame 教程合集，包含从基础到高级的各种游戏类型教程。

- **内容：** 太空射击、平台跳跃、RPG、塔防等
- **特点：** 代码清晰、注释详尽、适合学习

#### parry1234/geometry-dash-python

使用 Pygame 实现的几何冲刺（Geometry Dash）克隆版，展示了如何实现音乐同步关卡和流畅的平台物理。

- **学习点：** 音乐同步、关卡编辑器、粒子效果

#### kidscancode/pygame_tutorials

KidsCanCode 的 Pygame 教程配套代码，内容系统全面，从基础概念到完整项目都有涵盖。

- **特点：** 教学导向、循序渐进、适合初学者

#### 其他优秀项目

| 项目 | 类型 | 特点 |
|------|------|------|
| Mariolike platformer | 平台跳跃 | 超级马里奥风格 |
| Pygame RPG | RPG | 完整的角色扮演游戏框架 |
| FlapPyBird | 休闲 | Flappy Bird 克隆 |
| Snake-game | 经典 | 贪吃蛇实现 |

### 结语

本章带领读者从零开始学习 Python 游戏开发，掌握了 Pygame 的核心概念和实践技巧。游戏开发是一个充满创意和挑战的领域，需要编程能力、数学知识、艺术设计等多方面的技能。

**学习路径建议：**
1. 从简单项目开始（如贪吃蛇、打砖块）
2. 逐步增加复杂度（加入精灵系统、物理效果）
3. 完成一个完整的游戏项目（如本章的平台跳跃游戏）
4. 学习游戏设计模式和架构
5. 参与 Game Jam，在限定时间内完成游戏

**继续深入的方向：**
- 学习 OpenGL/Shader 编程，理解图形渲染原理
- 研究游戏 AI（寻路、行为树、状态机）
- 探索多人游戏开发（网络同步）
- 尝试 Godot 或 Unity 等专业游戏引擎

游戏开发最迷人的地方在于：你可以创造一个世界，设定规则，然后邀请他人进来玩耍。祝你的游戏开发之旅充满乐趣！

---

## 第四章：数据分析与科学计算

Python 在数据科学领域的统治地位并非偶然。从 NumPy 的高效数值计算到 Pandas 的灵活数据处理，再到 Matplotlib 的可视化呈现和 Scikit-learn 的机器学习支持，Python 构建了一个完整而强大的数据科学生态系统。本章将深入探索这些核心工具，帮助你掌握数据分析的完整技能链。

### 4.1 NumPy：数值计算基石

NumPy（Numerical Python）是 Python 科学计算的基础库，它提供了高性能的多维数组对象和各种工具来处理这些数组。理解 NumPy 是掌握 Python 数据科学的第一步。

#### ndarray 对象：创建、属性、索引

NumPy 的核心是 `ndarray`（N-dimensional array）对象，它是一个多维、同质的数据容器。与 Python 列表相比，ndarray 在内存布局和计算效率上都有显著优势。

```python
import numpy as np

# 从列表创建数组
arr1 = np.array([1, 2, 3, 4, 5])
print(f"一维数组: {arr1}")

# 创建二维数组（矩阵）
arr2 = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(f"二维数组:\n{arr2}")

# 使用内置函数创建数组
zeros = np.zeros((3, 4))           # 3行4列的零矩阵
ones = np.ones((2, 3))             # 2行3列的全1矩阵
eye = np.eye(3)                    # 3x3单位矩阵
arange = np.arange(0, 10, 2)       # 从0到10，步长2
linspace = np.linspace(0, 1, 5)    # 0到1之间均匀分布5个数

print(f"arange: {arange}")
print(f"linspace: {linspace}")
```

ndarray 的重要属性包括：

```python
arr = np.array([[1, 2, 3], [4, 5, 6]])

print(f"维度数 (ndim): {arr.ndim}")          # 2
print(f"形状 (shape): {arr.shape}")          # (2, 3)
print(f"元素总数 (size): {arr.size}")        # 6
print(f"数据类型 (dtype): {arr.dtype}")      # int64
print(f"每项字节数 (itemsize): {arr.itemsize}")  # 8
print(f"总字节数 (nbytes): {arr.nbytes}")    # 48
```

数组索引和切片比 Python 列表更强大：

```python
arr = np.array([[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]])

# 基本索引
print(f"arr[0, 1] = {arr[0, 1]}")  # 2

# 切片
print(f"arr[0:2, 1:3]:\n{arr[0:2, 1:3]}")
# [[2 3]
#  [6 7]]

# 布尔索引
print(f"arr > 5: {arr[arr > 5]}")  # [ 6  7  8  9 10 11 12]

# 花式索引
rows = [0, 2]
cols = [1, 3]
print(f"花式索引: {arr[rows, cols]}")  # [ 2 12]
```

#### 数据类型与类型转换

NumPy 支持多种数据类型，选择合适的数据类型可以节省内存并提高计算速度：

```python
# 指定数据类型创建数组
int_arr = np.array([1, 2, 3], dtype=np.int32)
float_arr = np.array([1.0, 2.0, 3.0], dtype=np.float64)
bool_arr = np.array([True, False, True], dtype=np.bool_)

# 类型转换
arr = np.array([1.5, 2.7, 3.2])
arr_int = arr.astype(np.int32)  # 截断小数
print(f"转换为整数: {arr_int}")  # [1 2 3]

# 内存优化示例
large_arr = np.arange(1000000, dtype=np.int32)
print(f"int32 占用内存: {large_arr.nbytes / 1024:.2f} KB")

large_arr_int8 = large_arr.astype(np.int8)  # 如果数据范围允许
print(f"int8 占用内存: {large_arr_int8.nbytes / 1024:.2f} KB")
```

#### 数组操作：形状操作、切片与广播

形状操作是 NumPy 的基础技能：

```python
arr = np.arange(12)
print(f"原始数组: {arr}")  # [ 0  1  2  3  4  5  6  7  8  9 10 11]

# reshape: 改变形状但不改变数据
reshaped = arr.reshape(3, 4)
print(f"reshape(3, 4):\n{reshaped}")

# ravel: 展平为一维（返回视图）
flattened = reshaped.ravel()
print(f"ravel(): {flattened}")

# flatten: 展平为一维（返回副本）
flattened_copy = reshaped.flatten()
print(f"flatten(): {flattened_copy}")

# transpose: 转置
transposed = reshaped.T
print(f"transpose:\n{transposed}")

# 添加/删除维度
arr_2d = np.array([[1, 2, 3]])
arr_3d = arr_2d[:, np.newaxis, :]  # 添加维度
print(f"添加维度后形状: {arr_3d.shape}")  # (1, 1, 3)

# 删除单维度维度
squeezed = arr_3d.squeeze()
print(f"squeeze后形状: {squeezed.shape}")  # (3,)
```

广播（Broadcasting）是 NumPy 最强大的特性之一，它允许不同形状的数组进行算术运算：

```python
# 广播规则：从后向前比较维度，要么相等，要么其中一个为1

# 示例1: 数组与标量
arr = np.array([1, 2, 3])
result = arr + 10  # 标量10被广播为 [10, 10, 10]
print(f"数组 + 标量: {result}")  # [11 12 13]

# 示例2: 二维数组与一维数组
matrix = np.array([[1, 2, 3],
                   [4, 5, 6]])  # shape: (2, 3)
vector = np.array([10, 20, 30])  # shape: (3,)
result = matrix + vector  # vector被广播为 [[10, 20, 30], [10, 20, 30]]
print(f"二维数组 + 一维数组:\n{result}")
# [[11 22 33]
#  [14 25 36]]

# 示例3: 列向量与行向量
row = np.array([1, 2, 3])      # shape: (3,)
col = np.array([[10], [20]])   # shape: (2, 1)
result = row + col
print(f"行向量 + 列向量:\n{result}")
# [[11 12 13]
#  [21 22 23]]

# 实际应用：数据标准化
np.random.seed(42)
data = np.random.randn(100, 3)  # 100个样本，3个特征
mean = data.mean(axis=0)        # 每个特征的均值
std = data.std(axis=0)          # 每个特征的标准差
normalized = (data - mean) / std  # 广播操作
print(f"标准化后均值: {normalized.mean(axis=0)}")  # 接近 [0, 0, 0]
print(f"标准化后标准差: {normalized.std(axis=0)}")  # 接近 [1, 1, 1]
```

#### 数学运算与聚合操作

NumPy 的通用函数（ufunc）提供了逐元素的数组运算：

```python
arr = np.array([1, 4, 9, 16, 25])

# 一元ufunc
print(f"sqrt: {np.sqrt(arr)}")      # [1. 2. 3. 4. 5.]
print(f"exp: {np.exp(arr[:3])}")    # [2.71828183 54.59815003 8103.08392758]
print(f"log: {np.log(arr[1:])}")    # [1.38629436 2.19722458 2.77258872 3.21887582]

# 二元ufunc
arr1 = np.array([1, 2, 3, 4])
arr2 = np.array([10, 20, 30, 40])
print(f"maximum: {np.maximum(arr1, arr2)}")  # [10 20 30 40]
print(f"power: {np.power(arr1, 2)}")         # [ 1  4  9 16]

# 三角函数
angles = np.array([0, np.pi/4, np.pi/2, np.pi])
print(f"sin: {np.sin(angles)}")  # [0.00000000e+00 7.07106781e-01 1.00000000e+00 1.22464680e-16]
```

聚合操作可以对整个数组或指定轴进行统计：

```python
np.random.seed(42)
data = np.random.randn(5, 4) * 10 + 50  # 5行4列的模拟数据

print(f"原始数据:\n{data}")
print(f"\n全局统计:")
print(f"  sum: {data.sum():.2f}")
print(f"  mean: {data.mean():.2f}")
print(f"  std: {data.std():.2f}")
print(f"  min: {data.min():.2f}")
print(f"  max: {data.max():.2f}")

print(f"\n按行统计 (axis=1):")
print(f"  每行平均值: {data.mean(axis=1)}")
print(f"  每行最大值: {data.max(axis=1)}")

print(f"\n按列统计 (axis=0):")
print(f"  每列平均值: {data.mean(axis=0)}")
print(f"  每列标准差: {data.std(axis=0)}")

# 累积运算
cumsum = np.arange(1, 6)
print(f"\ncumsum: {cumsum.cumsum()}")  # [ 1  3  6 10 15]

# 条件统计
data = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
print(f"大于5的数的平均值: {data[data > 5].mean():.2f}")  # 8.0
```

条件运算提供了强大的数据过滤能力：

```python
# where: 条件选择
arr = np.array([1, -2, 3, -4, 5])
result = np.where(arr > 0, arr, 0)  # 负数变为0
print(f"where 结果: {result}")  # [1 0 3 0 5]

# 多个条件
arr = np.arange(10)
result = np.where((arr > 3) & (arr < 7), arr * 10, arr)
print(f"多条件 where: {result}")  # [ 0  1  2  3 40 50 60  7  8  9]

# clip: 限制数值范围
arr = np.array([1, 5, 10, 15, 20])
clipped = np.clip(arr, 5, 15)
print(f"clip (5-15): {clipped}")  # [ 5  5 10 15 15]
```

#### 线性代数运算

NumPy 的 `linalg` 模块提供了丰富的线性代数功能：

```python
# 矩阵乘法
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# 使用 dot 或 @ 运算符
result_dot = np.dot(A, B)
result_at = A @ B
print(f"矩阵乘法 (A @ B):\n{result_at}")
# [[19 22]
#  [43 50]]

# 矩阵转置和逆矩阵
print(f"转置:\n{A.T}")
A_inv = np.linalg.inv(A)
print(f"逆矩阵:\n{A_inv}")
print(f"验证 A @ A_inv:\n{A @ A_inv}")  # 接近单位矩阵

# 行列式
det = np.linalg.det(A)
print(f"行列式: {det:.2f}")  # -2.00

# 特征值和特征向量
eigenvalues, eigenvectors = np.linalg.eig(A)
print(f"特征值: {eigenvalues}")
print(f"特征向量:\n{eigenvectors}")

# SVD 分解
U, S, Vt = np.linalg.svd(A)
print(f"\nSVD分解:")
print(f"U:\n{U}")
print(f"奇异值: {S}")
print(f"Vt:\n{Vt}")

# QR 分解
Q, R = np.linalg.qr(A)
print(f"\nQR分解:")
print(f"Q:\n{Q}")
print(f"R:\n{R}")

# 解线性方程组 Ax = b
A = np.array([[3, 1], [1, 2]])
b = np.array([9, 8])
x = np.linalg.solve(A, b)
print(f"\n解线性方程组 Ax = b，解为: {x}")  # [2. 3.]
print(f"验证 A @ x: {A @ x}")  # [9. 8.]
```

#### 性能优化：向量化 vs 循环

NumPy 的核心优势在于向量化运算，避免 Python 层面的循环：

```python
import time

# 创建大规模数据
size = 1000000
arr = np.random.randn(size)

# 方法1: Python循环（慢）
def python_loop(arr):
    result = []
    for x in arr:
        result.append(x ** 2 + 2 * x + 1)
    return np.array(result)

start = time.time()
result_loop = python_loop(arr)
time_loop = time.time() - start

# 方法2: NumPy向量化（快）
start = time.time()
result_vectorized = arr ** 2 + 2 * arr + 1
time_vectorized = time.time() - start

print(f"数据量: {size:,}")
print(f"Python循环耗时: {time_loop:.4f}秒")
print(f"NumPy向量化耗时: {time_vectorized:.4f}秒")
print(f"加速比: {time_loop / time_vectorized:.1f}x")

# 使用numba进一步加速（可选）
try:
    from numba import jit
    
    @jit(nopython=True)
    def numba_loop(arr):
        result = np.empty_like(arr)
        for i in range(len(arr)):
            result[i] = arr[i] ** 2 + 2 * arr[i] + 1
        return result
    
    # 预热
    _ = numba_loop(arr[:100])
    
    start = time.time()
    result_numba = numba_loop(arr)
    time_numba = time.time() - start
    
    print(f"Numba加速耗时: {time_numba:.4f}秒")
    print(f"相对于NumPy的加速比: {time_vectorized / time_numba:.1f}x")
except ImportError:
    print("(未安装numba，跳过JIT编译演示)")

# 内存视图技巧
arr = np.arange(1000000)
# 使用切片创建视图，不复制数据
view = arr[::2]  # 每隔一个元素
print(f"\n原始数组大小: {arr.nbytes / 1024:.2f} KB")
print(f"视图大小: {view.nbytes / 1024:.2f} KB")
print(f"视图基数组大小: {view.base.nbytes / 1024:.2f} KB")
```

NumPy 是 Python 数据科学的基石。掌握数组操作、广播机制和向量化思维，将显著提升你的数据处理效率。在实际工作中，NumPy 通常作为 Pandas 等高级库的底层支撑，理解其工作原理有助于更好地利用整个数据科学生态。

### 4.2 Pandas：数据处理利器

如果说 NumPy 是数据科学的发动机，那么 Pandas 就是驾驶舱。Pandas 提供了 Series 和 DataFrame 两种核心数据结构，让数据清洗、转换、分析变得直观而高效。它是数据科学家使用频率最高的 Python 库之一。

#### Series 与 DataFrame 数据结构

Series 是一维带标签的数组，可以看作是有索引的列数据：

```python
import pandas as pd
import numpy as np

# 创建Series
s1 = pd.Series([1, 3, 5, np.nan, 6, 8])
print(f"基础Series:\n{s1}\n")

# 指定索引
s2 = pd.Series([1, 2, 3, 4], index=['a', 'b', 'c', 'd'])
print(f"自定义索引:\n{s2}\n")

# 从字典创建
s3 = pd.Series({'北京': 2154, '上海': 2424, '广州': 1504, '深圳': 1344})
print(f"从字典创建:\n{s3}\n")

# Series属性
print(f"索引: {s2.index}")
print(f"值: {s2.values}")
print(f"数据类型: {s2.dtype}")
```

DataFrame 是二维带标签的数据结构，是数据分析的核心载体：

```python
# 从字典创建DataFrame
data = {
    '姓名': ['张三', '李四', '王五', '赵六'],
    '年龄': [25, 30, 35, 28],
    '城市': ['北京', '上海', '广州', '深圳'],
    '薪资': [15000, 22000, 18000, 25000]
}
df = pd.DataFrame(data)
print(f"基础DataFrame:\n{df}\n")

# 从嵌套字典创建
data = {
    '张三': {'数学': 90, '语文': 85, '英语': 88},
    '李四': {'数学': 78, '语文': 92, '英语': 80},
    '王五': {'数学': 85, '语文': 88, '英语': 95}
}
df_scores = pd.DataFrame(data).T  # 转置，使姓名成为行索引
print(f"成绩表:\n{df_scores}\n")

# 从NumPy数组创建
arr = np.random.randn(5, 3)
df_arr = pd.DataFrame(arr, columns=['A', 'B', 'C'], 
                       index=['row1', 'row2', 'row3', 'row4', 'row5'])
print(f"从数组创建:\n{df_arr}\n")

# DataFrame属性
print(f"列名: {df.columns.tolist()}")
print(f"索引: {df.index.tolist()}")
print(f"形状: {df.shape}")
print(f"数据类型:\n{df.dtypes}")
print(f"数值列统计:\n{df.describe()}")
```

#### 数据读取与写入

Pandas 支持多种数据格式的读写，这是数据科学工作流程的起点：

```python
import pandas as pd

# 创建示例数据
np.random.seed(42)
df_sample = pd.DataFrame({
    'date': pd.date_range('2024-01-01', periods=100),
    'product': np.random.choice(['A', 'B', 'C', 'D'], 100),
    'region': np.random.choice(['North', 'South', 'East', 'West'], 100),
    'sales': np.random.randint(1000, 10000, 100),
    'quantity': np.random.randint(10, 100, 100)
})

# 写入CSV
df_sample.to_csv('sales_data.csv', index=False, encoding='utf-8')
print("数据已保存到 sales_data.csv")

# 读取CSV
df_csv = pd.read_csv('sales_data.csv')
print(f"CSV读取，前5行:\n{df_csv.head()}\n")

# 读取CSV的高级参数
df_csv_advanced = pd.read_csv(
    'sales_data.csv',
    parse_dates=['date'],           # 解析日期列
    dtype={'product': 'category'},  # 指定数据类型
    nrows=10                         # 只读前10行
)
print(f"高级读取结果:\n{df_csv_advanced.dtypes}\n")

# 读取Excel（需要openpyxl或xlrd）
try:
    df_sample.to_excel('sales_data.xlsx', index=False, sheet_name='Sales')
    df_excel = pd.read_excel('sales_data.xlsx', sheet_name='Sales')
    print(f"Excel读取成功，形状: {df_excel.shape}")
except ImportError:
    print("(未安装openpyxl，跳过Excel演示)")

# 读取JSON
df_sample.head(5).to_json('sample.json', orient='records', force_ascii=False)
df_json = pd.read_json('sample.json')
print(f"JSON读取:\n{df_json}\n")

# 清理临时文件
import os
os.remove('sales_data.csv')
os.remove('sample.json')
try:
    os.remove('sales_data.xlsx')
except:
    pass
```

`read_csv` 是 Pandas 使用最频繁的函数之一，掌握其参数至关重要：

```python
# read_csv 参数详解示例

# 1. 基础参数
df = pd.read_csv('data.csv',
                 sep=',',              # 分隔符，默认逗号
                 header=0,             # 第几行作为列名，默认0
                 index_col=0,          # 哪一列作为索引
                 usecols=['col1', 'col2'])  # 只读取指定列

# 2. 数据类型控制
df = pd.read_csv('data.csv',
                 dtype={'id': int, 'value': float},  # 指定列类型
                 parse_dates=['date_col'],            # 解析为日期
                 infer_datetime_format=True)          # 加速日期解析

# 3. 缺失值处理
df = pd.read_csv('data.csv',
                 na_values=['N/A', 'NULL', ''],      # 识别为NaN的值
                 keep_default_na=True,                # 保留默认NaN识别
                 skipinitialspace=True)               # 跳过空格

# 4. 大数据优化
df = pd.read_csv('data.csv',
                 nrows=1000,           # 只读前n行（预览）
                 chunksize=10000,      # 分块读取（处理大文件）
                 low_memory=False)     # 禁用混合类型推断警告

# 分块读取示例
# for chunk in pd.read_csv('large_file.csv', chunksize=10000):
#     process(chunk)  # 逐块处理
```

#### 数据探索

了解数据的结构、分布和质量是分析的第一步：

```python
# 使用泰坦尼克号数据集进行演示
import seaborn as sns

# 加载示例数据集
titanic = sns.load_dataset('titanic')

print(f"数据集形状: {titanic.shape}")
print(f"\n前5行:")
print(titanic.head())

print(f"\n后5行:")
print(titanic.tail())

print(f"\n数据集信息:")
print(titanic.info())

print(f"\n数值列统计描述:")
print(titanic.describe())

print(f"\n所有列的统计（包括非数值）:")
print(titanic.describe(include='all'))

print(f"\n数据类型:")
print(titanic.dtypes)

# 快速统计
print(f"\n=== 快速统计 ===")
print(f"幸存人数: {titanic['survived'].sum()}/{len(titanic)}")
print(f"平均票价: ${titanic['fare'].mean():.2f}")
print(f"年龄中位数: {titanic['age'].median():.1f}岁")
print(f"乘客等级分布:")
print(titanic['pclass'].value_counts().sort_index())
```

数据类型转换是数据清洗的常规操作：

```python
# 数据类型转换示例
df = pd.DataFrame({
    'id': ['001', '002', '003'],
    'price': ['19.99', '29.99', '39.99'],
    'date': ['2024-01-15', '2024-02-20', '2024-03-10'],
    'is_active': ['True', 'False', 'True']
})

print("原始数据类型:")
print(df.dtypes)

# 转换为数值类型
df['id'] = df['id'].astype(int)
df['price'] = df['price'].astype(float)

# 转换为日期类型
df['date'] = pd.to_datetime(df['date'])

# 转换为布尔类型
df['is_active'] = df['is_active'].map({'True': True, 'False': False})

print("\n转换后数据类型:")
print(df.dtypes)

# 使用infer_objects自动推断
df_mixed = pd.DataFrame({
    'a': ['1', '2', '3'],
    'b': ['1.0', '2.0', '3.0'],
    'c': ['True', 'False', 'True']
})
df_mixed = df_mixed.infer_objects()
print("\n自动推断后:")
print(df_mixed.dtypes)
```

#### 数据清洗

真实世界的数据往往杂乱无章，清洗是必不可少的工作：

```python
# 处理缺失值
df = pd.DataFrame({
    'A': [1, 2, np.nan, 4, 5],
    'B': [10, np.nan, np.nan, 40, 50],
    'C': ['x', 'y', np.nan, 'z', 'w']
})

print("原始数据:")
print(df)

# 检测缺失值
print(f"\n缺失值检测:")
print(df.isnull())
print(f"每列缺失值数量:\n{df.isnull().sum()}")
print(f"缺失值比例:\n{df.isnull().mean() * 100:.1f}%")

# 删除缺失值
df_drop_rows = df.dropna()  # 删除包含NaN的行
print(f"\n删除缺失值行后:\n{df_drop_rows}")

df_drop_cols = df.dropna(axis=1)  # 删除包含NaN的列
print(f"\n删除缺失值列后:\n{df_drop_cols}")

df_drop_thresh = df.dropna(thresh=2)  # 保留至少有2个非NaN的行
print(f"\n保留至少2个非NaN值:\n{df_drop_thresh}")

# 填充缺失值
df_fill = df.copy()
df_fill['A'] = df_fill['A'].fillna(df_fill['A'].mean())  # 用均值填充
df_fill['B'] = df_fill['B'].fillna(0)  # 用0填充
df_fill['C'] = df_fill['C'].fillna('unknown')  # 用字符串填充
print(f"\n填充缺失值后:\n{df_fill}")

# 前向/后向填充
df_fill['A'] = df['A'].fillna(method='ffill')  # 前向填充
print(f"\n前向填充:\n{df_fill}")
```

处理重复数据同样重要：

```python
# 处理重复值
df = pd.DataFrame({
    'name': ['张三', '李四', '张三', '王五', '李四'],
    'age': [25, 30, 25, 35, 30],
    'city': ['北京', '上海', '北京', '广州', '上海']
})

print("原始数据:")
print(df)

# 检测重复行
print(f"\n重复行标记:\n{df.duplicated()}")
print(f"基于'name'列检测重复:\n{df.duplicated(subset=['name'])}")
print(f"保留最后一个重复:\n{df.duplicated(keep='last')}")

# 删除重复值
df_unique = df.drop_duplicates()
print(f"\n删除重复行后:\n{df_unique}")

df_unique_keep_last = df.drop_duplicates(keep='last')
print(f"\n保留最后一个重复:\n{df_unique_keep_last}")

df_unique_subset = df.drop_duplicates(subset=['name', 'age'])
print(f"\n基于name和age去重:\n{df_unique_subset}")
```

异常值检测是数据质量控制的关键环节：

```python
# 异常值检测与处理
np.random.seed(42)
normal_data = np.random.normal(100, 15, 100)  # 均值100，标准差15
data_with_outliers = np.concatenate([normal_data, [200, 5, 180, 10]])  # 添加异常值

df = pd.DataFrame({'value': data_with_outliers})

# 方法1: 基于统计的异常值检测
Q1 = df['value'].quantile(0.25)
Q3 = df['value'].quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

outliers_iqr = df[(df['value'] < lower_bound) | (df['value'] > upper_bound)]
print(f"IQR方法检测到的异常值:\n{outliers_iqr}")

# 方法2: Z-score方法
from scipy import stats
z_scores = np.abs(stats.zscore(df['value']))
outliers_zscore = df[z_scores > 3]
print(f"\nZ-score方法检测到的异常值:\n{outliers_zscore}")

# 方法3: 基于分位数裁剪
df['value_capped'] = df['value'].clip(lower=df['value'].quantile(0.05), 
                                       upper=df['value'].quantile(0.95))
print(f"\n分位数裁剪前后对比:")
print(df[['value', 'value_capped']].tail(10))

# 方法4: 标记异常值
df['is_outlier'] = ((df['value'] < lower_bound) | (df['value'] > upper_bound))
print(f"\n异常值标记:\n{df[df['is_outlier']]}")
```

#### 数据筛选

灵活的数据筛选是数据分析的核心技能：

```python
# 继续使用泰坦尼克号数据
titanic = sns.load_dataset('titanic')

# 布尔索引
adults = titanic[titanic['age'] >= 18]
print(f"成年人数量: {len(adults)}")

first_class_survivors = titanic[(titanic['pclass'] == 1) & (titanic['survived'] == 1)]
print(f"一等舱幸存者: {len(first_class_survivors)}")

children_or_elders = titanic[(titanic['age'] < 12) | (titanic['age'] > 60)]
print(f"儿童或老人: {len(children_or_elders)}")

# isin方法
selected_classes = titanic[titanic['pclass'].isin([1, 2])]
print(f"一等舱或二等舱乘客: {len(selected_classes)}")

# 多条件组合
women_and_children = titanic[(titanic['sex'] == 'female') | (titanic['age'] < 16)]
print(f"女性或儿童: {len(women_and_children)}")

# query方法（类似SQL语法）
result = titanic.query('age > 30 and fare > 50 and survived == 1')
print(f"query方法筛选结果: {len(result)}")

# 复杂query
result = titanic.query('embark_town in ["Southampton", "Cherbourg"] and pclass != 3')
print(f"复杂query结果: {len(result)}")

# 使用变量
min_age = 25
result = titanic.query('age > @min_age')
print(f"使用变量的query: {len(result)}")
```

`loc` 和 `iloc` 是 DataFrame 最重要的索引工具：

```python
# loc vs iloc 详解
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
    'age': [25, 30, 35, 28, 22],
    'score': [85, 90, 78, 92, 88]
}, index=['a', 'b', 'c', 'd', 'e'])

print("原始数据:")
print(df)

# loc - 基于标签的索引
print(f"\nloc['a'] - 选择标签a的行:\n{df.loc['a']}")
print(f"\nloc['a':'c'] - 选择标签a到c的行:\n{df.loc['a':'c']}")
print(f"\nloc[:, 'name'] - 选择name列:\n{df.loc[:, 'name']}")
print(f"\nloc['a':'c', ['name', 'age']] - 选择多行多列:\n{df.loc['a':'c', ['name', 'age']]}")

# iloc - 基于位置的索引（从0开始）
print(f"\niloc[0] - 选择第0行:\n{df.iloc[0]}")
print(f"\niloc[0:3] - 选择第0到2行:\n{df.iloc[0:3]}")
print(f"\niloc[:, 0] - 选择第0列:\n{df.iloc[:, 0]}")
print(f"\niloc[0:3, 0:2] - 选择前3行前2列:\n{df.iloc[0:3, 0:2]}")

# 布尔索引结合使用
print(f"\nloc[df['age'] > 25] - 条件筛选:\n{df.loc[df['age'] > 25]}")
print(f"\nloc[df['age'] > 25, ['name', 'score']] - 条件筛选加列选择:\n{df.loc[df['age'] > 25, ['name', 'score']]}")

# 修改数据
df_copy = df.copy()
df_copy.loc['a', 'age'] = 26  # 修改单个值
df_copy.loc['f'] = ['Frank', 40, 95]  # 添加新行
df_copy.loc[:, 'gender'] = ['F', 'M', 'M', 'M', 'F', 'M']  # 添加新列
print(f"\n修改后的数据:\n{df_copy}")
```

#### 数据转换

数据转换让数据更适合分析或建模：

```python
# apply, applymap, map 详解
df = pd.DataFrame({
    'A': [1, 2, 3, 4],
    'B': [10, 20, 30, 40],
    'C': [100, 200, 300, 400]
}, index=['row1', 'row2', 'row3', 'row4'])

print("原始数据:")
print(df)

# apply - 应用于行或列
def normalize(col):
    return (col - col.min()) / (col.max() - col.min())

df_normalized = df.apply(normalize, axis=0)  # 每列归一化
print(f"\napply归一化 (axis=0):\n{df_normalized}")

df_row_sum = df.apply(lambda x: x.sum(), axis=1)  # 每行求和
print(f"\napply行求和 (axis=1):\n{df_row_sum}")

# applymap - 应用于每个元素
df_formatted = df.applymap(lambda x: f"{x:.2f}")
print(f"\napplymap格式化:\n{df_formatted}")

# map - 应用于Series的每个元素
s = pd.Series(['cat', 'dog', 'bird'])
mapped = s.map({'cat': '猫', 'dog': '狗', 'bird': '鸟'})
print(f"\nmap映射:\n{mapped}")

# 实际应用：数据标准化
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
df_scaled = pd.DataFrame(
    scaler.fit_transform(df),
    columns=df.columns,
    index=df.index
)
print(f"\nStandardScaler标准化:\n{df_scaled}")
```

分组聚合是数据分析的核心操作：

```python
# 分组聚合详解
titanic = sns.load_dataset('titanic')

# 基础分组
by_class = titanic.groupby('pclass')['fare'].mean()
print(f"按舱位分组的平均票价:\n{by_class}\n")

# 多列分组
by_class_sex = titanic.groupby(['pclass', 'sex'])['survived'].mean()
print(f"按舱位和性别分组的幸存率:\n{by_class_sex}\n")

# 多聚合函数
agg_result = titanic.groupby('pclass')['fare'].agg(['mean', 'std', 'min', 'max', 'count'])
print(f"多聚合函数结果:\n{agg_result}\n")

# 对不同列应用不同聚合
agg_dict = {
    'fare': ['mean', 'median'],
    'age': ['mean', 'std'],
    'survived': 'sum'
}
multi_agg = titanic.groupby('pclass').agg(agg_dict)
print(f"不同列不同聚合:\n{multi_agg}\n")

# 自定义聚合函数
def survival_rate(x):
    return f"{x.mean()*100:.1f}%"

custom_agg = titanic.groupby('pclass')['survived'].agg(['count', 'sum', survival_rate])
print(f"自定义聚合:\n{custom_agg}\n")

# transform - 保持原索引的聚合
titanic['avg_fare_by_class'] = titanic.groupby('pclass')['fare'].transform('mean')
print(f"transform示例（前5行）:\n{titanic[['pclass', 'fare', 'avg_fare_by_class']].head()}\n")

# 过滤分组
def filter_by_count(group):
    return len(group) > 100

filtered = titanic.groupby('embark_town').filter(filter_by_count)
print(f"过滤后剩余行数: {len(filtered)}")
```

数据透视表提供了多维分析的便捷方式：

```python
# 数据透视表
np.random.seed(42)
df_sales = pd.DataFrame({
    'date': pd.date_range('2024-01-01', periods=100),
    'product': np.random.choice(['A', 'B', 'C'], 100),
    'region': np.random.choice(['North', 'South', 'East', 'West'], 100),
    'sales': np.random.randint(1000, 10000, 100),
    'quantity': np.random.randint(10, 100, 100)
})
df_sales['month'] = df_sales['date'].dt.to_period('M')

# 基础透视表
pivot = pd.pivot_table(df_sales, values='sales', index='product', columns='region', aggfunc='sum')
print(f"销售额透视表:\n{pivot}\n")

# 多值透视
pivot_multi = pd.pivot_table(df_sales, 
                              values=['sales', 'quantity'], 
                              index='product', 
                              columns='region', 
                              aggfunc={'sales': 'sum', 'quantity': 'mean'})
print(f"多值透视表:\n{pivot_multi}\n")

# 多层索引透视
pivot_multiindex = pd.pivot_table(df_sales,
                                   values='sales',
                                   index=['month', 'product'],
                                   columns='region',
                                   aggfunc='sum',
                                   fill_value=0)
print(f"多层索引透视表:\n{pivot_multiindex.head()}\n")

# 交叉表 (crosstab)
cross = pd.crosstab(titanic['pclass'], titanic['survived'], margins=True)
print(f"舱位与幸存交叉表:\n{cross}\n")

# 交叉表带值
cross_values = pd.crosstab(titanic['pclass'], titanic['sex'], 
                           values=titanic['age'], aggfunc='mean')
print(f"舱位与性别交叉表（平均年龄）:\n{cross_values}")
```

数据合并是整合多源数据的核心能力：

```python
# 数据合并详解

# merge - 类SQL连接
df_customers = pd.DataFrame({
    'customer_id': [1, 2, 3, 4, 5],
    'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
    'city': ['NY', 'LA', 'NY', 'CHI', 'LA']
})

df_orders = pd.DataFrame({
    'order_id': [101, 102, 103, 104, 105, 106],
    'customer_id': [1, 1, 2, 3, 5, 6],  # 6号客户在customers中不存在
    'amount': [100, 200, 150, 300, 250, 180]
})

print("客户表:")
print(df_customers)
print("\n订单表:")
print(df_orders)

# 内连接 - 只保留匹配的行
inner_merge = pd.merge(df_customers, df_orders, on='customer_id', how='inner')
print(f"\n内连接 (inner):\n{inner_merge}")

# 左连接 - 保留左表所有行
left_merge = pd.merge(df_customers, df_orders, on='customer_id', how='left')
print(f"\n左连接 (left):\n{left_merge}")

# 右连接 - 保留右表所有行
right_merge = pd.merge(df_customers, df_orders, on='customer_id', how='right')
print(f"\n右连接 (right):\n{right_merge}")

# 全外连接 - 保留所有行
outer_merge = pd.merge(df_customers, df_orders, on='customer_id', how='outer')
print(f"\n外连接 (outer):\n{outer_merge}")

# join - 基于索引连接
df1 = pd.DataFrame({'A': [1, 2, 3]}, index=['a', 'b', 'c'])
df2 = pd.DataFrame({'B': [4, 5, 6]}, index=['a', 'b', 'd'])
joined = df1.join(df2, how='outer')
print(f"\njoin示例:\n{joined}")

# concat - 拼接
df1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
df2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})
df3 = pd.DataFrame({'C': [9, 10]})

# 纵向拼接
concat_vertical = pd.concat([df1, df2], axis=0, ignore_index=True)
print(f"\n纵向concat:\n{concat_vertical}")

# 横向拼接
concat_horizontal = pd.concat([df1, df3], axis=1)
print(f"\n横向concat:\n{concat_horizontal}")

# 添加层级索引
concat_keys = pd.concat([df1, df2], keys=['group1', 'group2'])
print(f"\n带层级索引的concat:\n{concat_keys}")
```

#### 时间序列处理

Pandas 的时间序列功能在金融、物联网等领域有广泛应用：

```python
# 时间序列处理
import pandas as pd
import numpy as np

# 创建时间序列数据
dates = pd.date_range(start='2024-01-01', periods=1000, freq='H')
np.random.seed(42)
values = np.cumsum(np.random.randn(1000)) + 100  # 随机游走

ts = pd.Series(values, index=dates)
print(f"时间序列数据:\n{ts.head(10)}")

# 时间索引切片
print(f"\n2024年1月1日的数据:\n{ts['2024-01-01'].head()}")
print(f"\n1月1日到1月5日的数据:\n{ts['2024-01-01':'2024-01-05'].head()}")

# DatetimeIndex属性
print(f"\nDatetimeIndex属性:")
print(f"  年份: {ts.index.year[:3].tolist()}")
print(f"  月份: {ts.index.month[:3].tolist()}")
print(f"  星期几: {ts.index.dayofweek[:3].tolist()}")  # 0=周一
print(f"  是否周末: {ts.index.isin([5, 6])[:7].tolist()}")

# 重采样 (resample)
# 降采样: 从小时降到日
daily_mean = ts.resample('D').mean()
print(f"\n日平均（前5天）:\n{daily_mean.head()}")

# 多种聚合
daily_stats = ts.resample('D').agg(['mean', 'std', 'min', 'max'])
print(f"\n日统计:\n{daily_stats.head()}")

# 升采样（需要填充方法）
weekly = ts.resample('W').mean()
hourly = weekly.resample('H').interpolate(method='linear')
print(f"\n升采样插值:\n{hourly.head()}")

# 滚动窗口 (rolling)
rolling_mean = ts.rolling(window=24).mean()  # 24小时移动平均
rolling_std = ts.rolling(window=24).std()
print(f"\n24小时滚动平均（前30小时）:\n{rolling_mean.head(30).dropna()}")

# 指数移动平均
ema = ts.ewm(span=24).mean()
print(f"\n指数移动平均（前10个）:\n{ema.head(10)}")
```

时区处理是全球化应用的关键：

```python
# 时区处理
import pandas as pd

# 创建带时区的数据
ts_utc = pd.Series([1, 2, 3, 4], 
                   index=pd.date_range('2024-01-01', periods=4, freq='H', tz='UTC'))
print(f"UTC时间:\n{ts_utc}")

# 时区转换
ts_beijing = ts_utc.tz_convert('Asia/Shanghai')
print(f"\n北京时间:\n{ts_beijing}")

# 无时区 -> 有时区 (本地化)
ts_naive = pd.Series([1, 2, 3, 4], 
                      index=pd.date_range('2024-01-01', periods=4, freq='H'))
ts_with_tz = ts_naive.tz_localize('UTC').tz_convert('America/New_York')
print(f"\n纽约时间:\n{ts_with_tz}")

# 处理夏令时
ts_summer = pd.Series([1, 2], 
                      index=pd.to_datetime(['2024-07-01 12:00', '2024-12-01 12:00']))
ts_summer = ts_summer.tz_localize('America/New_York', ambiguous='NaT')
print(f"\n夏令时处理:\n{ts_summer}")
```

Pandas 是数据科学工作者最亲密的伙伴。从数据读取到清洗、从筛选到转换、从聚合到透视，Pandas 提供了完整的数据处理流水线。熟练掌握这些操作，能显著提升数据分析的效率和质量。

### 4.3 数据可视化

数据可视化是数据分析的关键环节，它将抽象的数字转化为直观的图形，帮助发现模式、传达洞察。Python 的可视化生态以 Matplotlib 为基石，Seaborn 提供统计图表，Plotly 实现交互式展示。

#### Matplotlib 基础

Matplotlib 是 Python 最基础、最灵活的可视化库，理解其架构是掌握可视化的关键：

```python
import matplotlib.pyplot as plt
import numpy as np

# 创建数据
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# 基础线图
plt.figure(figsize=(10, 4))
plt.plot(x, y1, label='sin(x)')
plt.plot(x, y2, label='cos(x)', linestyle='--')
plt.title('Trigonometric Functions')
plt.xlabel('x')
plt.ylabel('y')
plt.legend()
plt.grid(True)
plt.show()

# 面向对象接口 (推荐)
fig, ax = plt.subplots(figsize=(10, 4))
ax.plot(x, y1, label='sin(x)', color='blue', linewidth=2)
ax.plot(x, y2, label='cos(x)', color='red', linestyle='--', linewidth=2)
ax.set_title('Trigonometric Functions', fontsize=14, fontweight='bold')
ax.set_xlabel('x', fontsize=12)
ax.set_ylabel('y', fontsize=12)
ax.legend(loc='upper right')
ax.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
```

理解 Figure、Axes、Axis 的层级关系：

```python
# 层级关系演示
fig = plt.figure(figsize=(12, 4))

# 添加子图
ax1 = fig.add_subplot(1, 3, 1)
ax1.plot([1, 2, 3], [1, 4, 9])
ax1.set_title('Subplot 1')

ax2 = fig.add_subplot(1, 3, 2)
ax2.plot([1, 2, 3], [1, 2, 3])
ax2.set_title('Subplot 2')

ax3 = fig.add_subplot(1, 3, 3)
ax3.plot([1, 2, 3], [1, 1, 1])
ax3.set_title('Subplot 3')

fig.suptitle('Figure with Multiple Axes', fontsize=16)
plt.tight_layout()
plt.show()

# 使用subplots快速创建
fig, axes = plt.subplots(2, 2, figsize=(10, 8))

# 展平以便迭代
axes = axes.flatten()

for i, ax in enumerate(axes):
    x = np.linspace(0, 10, 100)
    ax.plot(x, np.sin(x + i))
    ax.set_title(f'Plot {i+1}')
    ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()
```

常用图表类型：

```python
import matplotlib.pyplot as plt
import numpy as np

np.random.seed(42)

# 1. 散点图
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# 散点图
x = np.random.randn(100)
y = 2 * x + np.random.randn(100)
axes[0, 0].scatter(x, y, alpha=0.6, c=x, cmap='viridis')
axes[0, 0].set_title('Scatter Plot')
axes[0, 0].set_xlabel('X')
axes[0, 0].set_ylabel('Y')

# 柱状图
categories = ['A', 'B', 'C', 'D', 'E']
values = [23, 45, 56, 78, 32]
axes[0, 1].bar(categories, values, color=['red', 'blue', 'green', 'orange', 'purple'])
axes[0, 1].set_title('Bar Chart')
axes[0, 1].set_ylabel('Values')

# 直方图
data = np.random.normal(100, 15, 1000)
axes[1, 0].hist(data, bins=30, edgecolor='black', alpha=0.7)
axes[1, 0].axvline(data.mean(), color='red', linestyle='--', label=f'Mean: {data.mean():.1f}')
axes[1, 0].set_title('Histogram')
axes[1, 0].set_xlabel('Value')
axes[1, 0].set_ylabel('Frequency')
axes[1, 0].legend()

# 饼图
sizes = [30, 25, 20, 15, 10]
labels = ['A', 'B', 'C', 'D', 'E']
axes[1, 1].pie(sizes, labels=labels, autopct='%1.1f%%', startangle=90)
axes[1, 1].set_title('Pie Chart')

plt.tight_layout()
plt.show()
```

自定义样式与主题：

```python
# 样式设置
print("可用样式:", plt.style.available[:5])

# 使用样式
plt.style.use('seaborn-v0_8-whitegrid')

fig, ax = plt.subplots(figsize=(10, 4))
x = np.linspace(0, 10, 100)
ax.plot(x, np.sin(x), label='sin(x)', color='#1f77b4', linewidth=2)
ax.plot(x, np.cos(x), label='cos(x)', color='#ff7f0e', linewidth=2, linestyle='--')
ax.set_title('Styled Plot', fontsize=14)
ax.set_xlabel('X Axis')
ax.set_ylabel('Y Axis')
ax.legend(frameon=True, shadow=True)
plt.show()

# 恢复默认样式
plt.style.use('default')

# 自定义颜色映射
fig, ax = plt.subplots(figsize=(10, 6))
n = 20
x = np.arange(n)
for i in range(5):
    y = np.random.rand(n) + i
    ax.scatter(x, y, s=100, label=f'Group {i+1}', 
               c=plt.cm.Set1(i / 5), alpha=0.8)
ax.set_title('Custom Colors')
ax.legend()
plt.show()
```

#### Seaborn 统计图表

Seaborn 基于 Matplotlib，专注于统计可视化，让复杂图表变得简单：

```python
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# 加载示例数据
tips = sns.load_dataset('tips')
print(tips.head())

# 设置样式
sns.set_style('whitegrid')
sns.set_palette('husl')

# 1. 分布图
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# 直方图和密度图
sns.histplot(tips['total_bill'], kde=True, ax=axes[0, 0])
axes[0, 0].set_title('Distribution with KDE')

# 核密度估计图
sns.kdeplot(data=tips, x='total_bill', hue='sex', ax=axes[0, 1], fill=True)
axes[0, 1].set_title('KDE by Gender')

# 箱线图
sns.boxplot(data=tips, x='day', y='total_bill', ax=axes[1, 0])
axes[1, 0].set_title('Box Plot by Day')

# 小提琴图
sns.violinplot(data=tips, x='day', y='total_bill', hue='sex', split=True, ax=axes[1, 1])
axes[1, 1].set_title('Violin Plot by Day and Gender')

plt.tight_layout()
plt.show()
```

分类图与热力图：

```python
# 更多分类图
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# 蜂群图
sns.swarmplot(data=tips, x='day', y='tip', hue='sex', ax=axes[0, 0])
axes[0, 0].set_title('Swarm Plot')

# 计数图
sns.countplot(data=tips, x='day', hue='time', ax=axes[0, 1])
axes[0, 1].set_title('Count Plot')

# 条形图 (带置信区间)
sns.barplot(data=tips, x='day', y='total_bill', hue='sex', ax=axes[1, 0])
axes[1, 0].set_title('Bar Plot with CI')

# 点图
sns.pointplot(data=tips, x='day', y='total_bill', hue='sex', ax=axes[1, 1])
axes[1, 1].set_title('Point Plot')

plt.tight_layout()
plt.show()

# 热力图
# 创建相关性矩阵
titanic = sns.load_dataset('titanic')
numeric_cols = titanic.select_dtypes(include=[np.number])
corr_matrix = numeric_cols.corr()

plt.figure(figsize=(10, 8))
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', center=0, 
            square=True, linewidths=0.5, fmt='.2f')
plt.title('Correlation Heatmap')
plt.show()

# 热力图 - 数据透视
df_pivot = tips.pivot_table(values='tip', index='day', columns='time', aggfunc='mean')
plt.figure(figsize=(8, 4))
sns.heatmap(df_pivot, annot=True, cmap='YlOrRd', fmt='.2f')
plt.title('Average Tip by Day and Time')
plt.show()
```

回归图：

```python
# 回归图
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# 简单回归图
sns.regplot(data=tips, x='total_bill', y='tip', ax=axes[0])
axes[0].set_title('Regression Plot')

# 多变量回归
sns.lmplot(data=tips, x='total_bill', y='tip', hue='smoker', col='time', height=4)
plt.suptitle('LM Plot by Smoker and Time', y=1.02)
plt.show()

# 成对关系图
sns.pairplot(tips[['total_bill', 'tip', 'size']], height=2.5)
plt.suptitle('Pair Plot', y=1.02)
plt.show()
```

#### Plotly 交互式图表

Plotly 提供了现代化的交互式可视化能力：

```python
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import pandas as pd
import numpy as np

# 加载数据
df = px.data.gapminder()
df_2007 = df[df['year'] == 2007]

# 交互式散点图
fig = px.scatter(df_2007, x='gdpPercap', y='lifeExp', 
                 size='pop', color='continent', 
                 hover_name='country', log_x=True,
                 title='Life Expectancy vs GDP per Capita (2007)')
fig.show()

# 带时间轴的动画图
fig = px.scatter(df, x='gdpPercap', y='lifeExp', 
                 size='pop', color='continent',
                 hover_name='country', log_x=True,
                 animation_frame='year', 
                 title='Life Expectancy Over Time')
fig.show()
```

使用 Graph Objects 创建更复杂的图表：

```python
# Graph Objects 示例
fig = go.Figure()

# 添加多条线
x = np.linspace(0, 10, 100)
fig.add_trace(go.Scatter(x=x, y=np.sin(x), mode='lines', name='sin(x)'))
fig.add_trace(go.Scatter(x=x, y=np.cos(x), mode='lines', name='cos(x)'))
fig.add_trace(go.Scatter(x=x, y=np.sin(x) * np.cos(x), mode='lines', name='sin(x)*cos(x)'))

fig.update_layout(
    title='Interactive Trigonometric Functions',
    xaxis_title='x',
    yaxis_title='y',
    hovermode='x unified'
)
fig.show()

# 仪表板布局
fig = make_subplots(
    rows=2, cols=2,
    subplot_titles=('Line Plot', 'Bar Chart', 'Pie Chart', 'Histogram'),
    specs=[[{"type": "scatter"}, {"type": "bar"}],
           [{"type": "pie"}, {"type": "histogram"}]]
)

# 子图1: 折线图
fig.add_trace(go.Scatter(x=[1, 2, 3, 4], y=[10, 11, 12, 13]), row=1, col=1)

# 子图2: 柱状图
fig.add_trace(go.Bar(x=['A', 'B', 'C'], y=[10, 20, 30]), row=1, col=2)

# 子图3: 饼图
fig.add_trace(go.Pie(labels=['A', 'B', 'C'], values=[30, 40, 30]), row=2, col=1)

# 子图4: 直方图
fig.add_trace(go.Histogram(x=np.random.randn(1000)), row=2, col=2)

fig.update_layout(height=600, title_text="Dashboard Layout")
fig.show()
```

#### 地图可视化：Folium

Folium 基于 Leaflet.js，让创建交互式地图变得简单：

```python
import folium
import pandas as pd

# 创建基础地图
m = folium.Map(location=[39.9042, 116.4074], zoom_start=12)  # 北京

# 添加标记
folium.Marker(
    location=[39.9042, 116.4074],
    popup='Beijing',
    tooltip='Click for more info',
    icon=folium.Icon(color='red', icon='info-sign')
).add_to(m)

# 添加圆形标记
folium.CircleMarker(
    location=[39.9142, 116.4174],
    radius=50,
    popup='Circle Area',
    color='blue',
    fill=True,
    fill_color='blue'
).add_to(m)

# 保存地图
m.save('beijing_map.html')
print("地图已保存到 beijing_map.html")

# 热力图示例
import folium.plugins as plugins

# 生成热力图数据
np.random.seed(42)
heat_data = [[39.9 + np.random.randn()*0.1, 116.4 + np.random.randn()*0.1] 
             for _ in range(100)]

m = folium.Map(location=[39.9042, 116.4074], zoom_start=12)
plugins.HeatMap(heat_data).add_to(m)
m.save('heatmap.html')
print("热力图已保存到 heatmap.html")
```

数据可视化是连接数据与洞察的桥梁。Matplotlib 提供底层灵活性，Seaborn 简化统计图表，Plotly 实现现代交互体验。根据场景选择合适的工具，能让你的数据分析成果更具说服力。

### 4.4 科学计算生态

Python 的科学计算生态远不止 NumPy 和 Pandas，SciPy 提供高级科学算法，SymPy 支持符号数学，Scikit-learn 开启机器学习大门。

#### SciPy：科学计算库

SciPy 构建于 NumPy 之上，提供优化、积分、插值、信号处理等功能：

```python
from scipy import optimize, integrate, interpolate, stats
import numpy as np
import matplotlib.pyplot as plt

# 1. 优化：最小化函数
# 定义目标函数: Rosenbrock函数（优化测试的经典函数）
def rosen(x):
    return sum(100.0*(x[1:]-x[:-1]**2.0)**2.0 + (1-x[:-1])**2.0)

# 初始猜测
x0 = np.array([1.3, 0.7, 0.8, 1.9, 1.2])

# 使用BFGS算法最小化
result = optimize.minimize(rosen, x0, method='BFGS')
print(f"优化结果:")
print(f"  成功: {result.success}")
print(f"  最优解: {result.x}")
print(f"  最小值: {result.fun:.6f}")
print(f"  迭代次数: {result.nit}")

# 约束优化示例
# 最小化 f(x,y) = x^2 + y^2，约束条件: x + y = 1
def objective(x):
    return x[0]**2 + x[1]**2

def constraint(x):
    return x[0] + x[1] - 1

constraints = {'type': 'eq', 'fun': constraint}
result_constrained = optimize.minimize(objective, [0, 0], method='SLSQP', constraints=constraints)
print(f"\n约束优化结果: x={result_constrained.x}")
```

积分计算：

```python
# 2. 积分

# 定积分：计算 ∫(x^2)dx 从0到1，结果应为1/3
result, error = integrate.quad(lambda x: x**2, 0, 1)
print(f"\n定积分 ∫(x^2)dx from 0 to 1 = {result:.6f} ± {error:.2e}")
print(f"理论值: {1/3:.6f}")

# 更复杂的积分：∫(sin(x)/x)dx 从0到∞
result, error = integrate.quad(lambda x: np.sin(x)/x, 0, np.inf)
print(f"∫(sin(x)/x)dx from 0 to ∞ = {result:.6f} ± {error:.2e}")
print(f"理论值: π/2 = {np.pi/2:.6f}")

# 多重积分：∬(x*y)dxdy 在[0,1]x[0,1]上
result, error = integrate.dblquad(lambda y, x: x*y, 0, 1, 0, 1)
print(f"∬(x*y)dxdy over [0,1]x[0,1] = {result:.6f}")
print(f"理论值: 1/4 = {1/4:.6f}")
```

插值方法：

```python
# 3. 插值

# 创建离散数据点
x = np.linspace(0, 10, 10)
y = np.sin(x) + np.random.randn(10) * 0.1  # 带噪声的正弦数据

# 创建插值函数
x_fine = np.linspace(0, 10, 100)

# 线性插值
f_linear = interpolate.interp1d(x, y, kind='linear')
y_linear = f_linear(x_fine)

# 三次样条插值
cs = interpolate.CubicSpline(x, y)
y_cubic = cs(x_fine)

# 可视化
plt.figure(figsize=(10, 6))
plt.scatter(x, y, color='red', s=50, label='Data Points')
plt.plot(x_fine, np.sin(x_fine), 'k--', label='True Function')
plt.plot(x_fine, y_linear, label='Linear Interpolation')
plt.plot(x_fine, y_cubic, label='Cubic Spline')
plt.legend()
plt.title('Interpolation Methods')
plt.xlabel('x')
plt.ylabel('y')
plt.grid(True, alpha=0.3)
plt.show()
```

统计分布：

```python
# 4. 统计分布

# 正态分布
mu, sigma = 0, 1
normal_dist = stats.norm(mu, sigma)

# 概率密度函数 (PDF)
x = np.linspace(-4, 4, 100)
pdf = normal_dist.pdf(x)

# 累积分布函数 (CDF)
cdf = normal_dist.cdf(x)

# 统计量
print(f"正态分布 N(0,1) 的统计量:")
print(f"  均值: {normal_dist.mean()}")
print(f"  方差: {normal_dist.var()}")
print(f"  标准差: {normal_dist.std()}")
print(f"  中位数: {normal_dist.median()}")

# 假设检验：t检验
np.random.seed(42)
group1 = np.random.normal(100, 10, 50)
group2 = np.random.normal(105, 10, 50)

t_stat, p_value = stats.ttest_ind(group1, group2)
print(f"\n独立样本t检验:")
print(f"  t统计量: {t_stat:.4f}")
print(f"  p值: {p_value:.4f}")
print(f"  结论: {'显著差异' if p_value < 0.05 else '无显著差异'}")

# 卡方检验
observed = np.array([[10, 20, 30], [20, 30, 40]])
chi2, p, dof, expected = stats.chi2_contingency(observed)
print(f"\n卡方检验:")
print(f"  χ² = {chi2:.4f}")
print(f"  p值 = {p:.4f}")
print(f"  自由度 = {dof}")
```

#### SymPy：符号数学

SymPy 让 Python 具备符号计算能力，可以处理代数运算、微积分和方程求解：

```python
import sympy as sp

# 定义符号
x, y, z = sp.symbols('x y z')
a, b, c = sp.symbols('a b c', real=True, positive=True)

# 定义表达式
expr = x**2 + 2*x + 1
print(f"原始表达式: {expr}")

# 展开
expanded = sp.expand((x + 1)**3)
print(f"展开 (x+1)^3: {expanded}")

# 因式分解
factored = sp.factor(x**2 - 5*x + 6)
print(f"因式分解 x^2-5x+6: {factored}")

# 化简
simplified = sp.simplify(sp.sin(x)**2 + sp.cos(x)**2)
print(f"化简 sin^2(x)+cos^2(x): {simplified}")

# 三角函数展开
trig_expanded = sp.expand_trig(sp.sin(x + y))
print(f"展开 sin(x+y): {trig_expanded}")
```

微积分运算：

```python
# 微积分

# 求导
derivative = sp.diff(x**3 + 2*x**2 + x + 1, x)
print(f"d/dx(x^3 + 2x^2 + x + 1) = {derivative}")

# 高阶导数
second_deriv = sp.diff(sp.sin(x**2), x, 2)
print(f"sin(x^2) 的二阶导 = {second_deriv}")

# 偏导数
partial_x = sp.diff(x**2 * y + y**3, x)
partial_y = sp.diff(x**2 * y + y**3, y)
print(f"∂/∂x(x^2*y + y^3) = {partial_x}")
print(f"∂/∂y(x^2*y + y^3) = {partial_y}")

# 积分
# 不定积分
indefinite = sp.integrate(x**2, x)
print(f"∫x^2 dx = {indefinite} + C")

# 定积分
definite = sp.integrate(x**2, (x, 0, 2))
print(f"∫(x^2)dx from 0 to 2 = {definite}")

# 多重积分
multiple = sp.integrate(x*y, (x, 0, 1), (y, 0, 1))
print(f"∬(x*y)dxdy over [0,1]x[0,1] = {multiple}")

# 极限
limit_result = sp.limit(sp.sin(x)/x, x, 0)
print(f"lim(x->0) sin(x)/x = {limit_result}")

# 泰勒展开
taylor = sp.series(sp.exp(x), x, 0, n=5)
print(f"e^x 在0点的泰勒展开: {taylor}")
```

方程求解：

```python
# 方程求解

# 解代数方程
solutions = sp.solve(x**2 - 4, x)
print(f"解 x^2 - 4 = 0: {solutions}")

# 解方程组
eq1 = x + y - 3
eq2 = x - y - 1
solutions_system = sp.solve([eq1, eq2], [x, y])
print(f"解方程组: {solutions_system}")

# 解二次方程 ax^2 + bx + c = 0
quadratic_sol = sp.solve(a*x**2 + b*x + c, x)
print(f"二次方程求根公式: {quadratic_sol}")

# 解微分方程
f = sp.Function('f')
t = sp.Symbol('t')
# f'(t) = f(t)，即指数增长
diffeq = sp.Eq(f(t).diff(t), f(t))
solution = sp.dsolve(diffeq, f(t))
print(f"解微分方程 f'(t)=f(t): {solution}")

# 带初始条件的微分方程
solution_with_ic = sp.dsolve(diffeq, f(t), ics={f(0): 1})
print(f"带初始条件 f(0)=1: {solution_with_ic}")

# 数值求解
eq = x**3 - 2*x - 5
numerical_solution = sp.nsolve(eq, 2)  # 初始猜测值为2
print(f"x^3 - 2x - 5 = 0 的数值解: {numerical_solution}")
```

#### Scikit-learn 入门

Scikit-learn 是 Python 最流行的机器学习库，提供统一简洁的 API：

```python
from sklearn.datasets import load_iris, make_regression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
from sklearn.metrics import accuracy_score, mean_squared_error, classification_report
import numpy as np

# 1. 机器学习基础流程演示

# 加载数据
iris = load_iris()
X, y = iris.data, iris.target

print(f"Iris数据集:")
print(f"  样本数: {X.shape[0]}")
print(f"  特征数: {X.shape[1]}")
print(f"  类别数: {len(np.unique(y))}")
print(f"  特征名称: {iris.feature_names}")

# 划分训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
print(f"\n训练集大小: {X_train.shape}")
print(f"测试集大小: {X_test.shape}")

# 数据标准化
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

print(f"\n标准化后训练集均值: {X_train_scaled.mean(axis=0).round(3)}")
print(f"标准化后训练集标准差: {X_train_scaled.std(axis=0).round(3)}")
```

分类模型示例：

```python
# 2. 分类：逻辑回归和随机森林

# 逻辑回归
lr = LogisticRegression(max_iter=200)
lr.fit(X_train_scaled, y_train)
y_pred_lr = lr.predict(X_test_scaled)

print("逻辑回归结果:")
print(f"  准确率: {accuracy_score(y_test, y_pred_lr):.4f}")

# 随机森林
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)  # 随机森林不需要特征缩放
y_pred_rf = rf.predict(X_test)

print("\n随机森林结果:")
print(f"  准确率: {accuracy_score(y_test, y_pred_rf):.4f}")

# 特征重要性
feature_importance = pd.DataFrame({
    'feature': iris.feature_names,
    'importance': rf.feature_importances_
}).sort_values('importance', ascending=False)
print(f"\n特征重要性:\n{feature_importance}")

# 详细分类报告
print(f"\n分类报告:\n{classification_report(y_test, y_pred_rf, target_names=iris.target_names)}")
```

回归模型示例：

```python
# 3. 回归模型

# 生成回归数据
np.random.seed(42)
X_reg, y_reg = make_regression(n_samples=200, n_features=5, noise=10, random_state=42)

# 划分数据
X_train_r, X_test_r, y_train_r, y_test_r = train_test_split(
    X_reg, y_reg, test_size=0.2, random_state=42
)

# 标准化
scaler_r = StandardScaler()
X_train_r_scaled = scaler_r.fit_transform(X_train_r)
X_test_r_scaled = scaler_r.transform(X_test_r)

# 线性回归
lr_reg = LinearRegression()
lr_reg.fit(X_train_r_scaled, y_train_r)
y_pred_lr = lr_reg.predict(X_test_r_scaled)

print("线性回归结果:")
print(f"  均方误差: {mean_squared_error(y_test_r, y_pred_lr):.4f}")
print(f"  R²分数: {lr_reg.score(X_test_r_scaled, y_test_r):.4f}")
print(f"  系数: {lr_reg.coef_.round(4)}")
print(f"  截距: {lr_reg.intercept_:.4f}")

# 随机森林回归
rf_reg = RandomForestRegressor(n_estimators=100, random_state=42)
rf_reg.fit(X_train_r, y_train_r)
y_pred_rf_r = rf_reg.predict(X_test_r)

print("\n随机森林回归结果:")
print(f"  均方误差: {mean_squared_error(y_test_r, y_pred_rf_r):.4f}")
print(f"  R²分数: {rf_reg.score(X_test_r, y_test_r):.4f}")
```

完整的机器学习流程示例：

```python
# 4. 完整ML流程示例：房价预测（使用合成数据）

from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder

# 创建合成房价数据
np.random.seed(42)
n_samples = 1000

house_data = pd.DataFrame({
    '面积': np.random.randint(50, 300, n_samples),
    '卧室数': np.random.randint(1, 6, n_samples),
    '浴室数': np.random.randint(1, 4, n_samples),
    '楼层': np.random.randint(1, 30, n_samples),
    '房龄': np.random.randint(0, 50, n_samples),
    '区域': np.random.choice(['朝阳', '海淀', '丰台', '通州'], n_samples)
})

# 生成房价（基础公式 + 噪声）
base_price = (house_data['面积'] * 8000 + 
              house_data['卧室数'] * 200000 - 
              house_data['房龄'] * 5000)

# 区域价格系数
area_multiplier = {'朝阳': 1.3, '海淀': 1.25, '丰台': 1.0, '通州': 0.85}
house_data['房价'] = base_price * house_data['区域'].map(area_multiplier) + np.random.normal(0, 100000, n_samples)

# 划分数据
X = house_data.drop('房价', axis=1)
y = house_data['房价']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 构建预处理管道
numeric_features = ['面积', '卧室数', '浴室数', '楼层', '房龄']
categorical_features = ['区域']

numeric_transformer = StandardScaler()
categorical_transformer = OneHotEncoder(drop='first')

preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numeric_features),
        ('cat', categorical_transformer, categorical_features)
    ])

# 完整管道
pipeline = Pipeline([
    ('preprocessor', preprocessor),
    ('regressor', RandomForestRegressor(n_estimators=100, random_state=42))
])

# 训练
pipeline.fit(X_train, y_train)

# 预测
y_pred = pipeline.predict(X_test)

# 评估
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = pipeline.score(X_test, y_test)

print(f"房价预测模型评估:")
print(f"  均方误差 (MSE): {mse:.2f}")
print(f"  均方根误差 (RMSE): {rmse:.2f}")
print(f"  R²分数: {r2:.4f}")

# 示例预测
sample_house = pd.DataFrame({
    '面积': [120],
    '卧室数': [3],
    '浴室数': [2],
    '楼层': [15],
    '房龄': [5],
    '区域': ['朝阳']
})
predicted_price = pipeline.predict(sample_house)
print(f"\n示例预测（120㎡，3室，朝阳区）:")
print(f"  预测房价: ¥{predicted_price[0]:,.0f}")
```

科学计算生态为 Python 赋予了强大的数值计算能力。SciPy 解决工程和科学计算问题，SymPy 处理符号数学推导，Scikit-learn 开启机器学习应用。这三个库与 NumPy、Pandas 一起，构成了 Python 数据科学的核心栈。

### 4.5 实际项目：完整数据分析流程

理论知识需要通过实际项目来巩固。本节以泰坦尼克号数据集为例，演示从数据获取到报告生成的完整数据分析流程。

#### 问题定义

**业务问题**：哪些因素影响了泰坦尼克号乘客的存活率？能否构建一个预测模型？

**分析目标**：
1. 识别影响存活率的关键因素
2. 量化不同因素的重要性
3. 构建可解释的预测模型
4. 生成可视化分析报告

#### 数据获取与加载

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.preprocessing import LabelEncoder

# 设置可视化样式
sns.set_style('whitegrid')
plt.rcParams['figure.figsize'] = (12, 6)

# 加载数据（使用seaborn内置数据集）
titanic = sns.load_dataset('titanic')

print("=" * 50)
print("数据集概览")
print("=" * 50)
print(f"样本数量: {len(titanic)}")
print(f"特征数量: {titanic.shape[1]}")
print(f"\n列名:\n{titanic.columns.tolist()}")
print(f"\n数据类型:\n{titanic.dtypes}")
print(f"\n缺失值统计:\n{titanic.isnull().sum()}")
print(f"\n缺失值比例:\n{(titanic.isnull().mean() * 100).round(2)}%")
```

#### 探索性数据分析 (EDA)

```python
print("\n" + "=" * 50)
print("探索性数据分析")
print("=" * 50)

# 1. 目标变量分析
print(f"\n总体存活率: {titanic['survived'].mean():.2%}")
print(f"幸存人数: {titanic['survived'].sum()}")
print(f"遇难人数: {len(titanic) - titanic['survived'].sum()}")

# 可视化存活分布
fig, axes = plt.subplots(1, 2, figsize=(12, 4))
sns.countplot(data=titanic, x='survived', ax=axes[0])
axes[0].set_title('Survival Distribution')
axes[0].set_xticklabels(['Died', 'Survived'])

# 舱位与存活率
sns.barplot(data=titanic, x='pclass', y='survived', ax=axes[1])
axes[1].set_title('Survival Rate by Class')
axes[1].set_ylabel('Survival Rate')
plt.tight_layout()
plt.savefig('eda_survival.png', dpi=150, bbox_inches='tight')
plt.show()

# 2. 性别与存活率
print(f"\n性别存活率:")
print(titanic.groupby('sex')['survived'].agg(['count', 'sum', 'mean']).round(3))

# 3. 年龄分布
print(f"\n年龄统计:")
print(titanic['age'].describe())

# 年龄与存活率的关系
titanic['age_group'] = pd.cut(titanic['age'], 
                               bins=[0, 12, 18, 35, 60, 100], 
                               labels=['Child', 'Teen', 'Young Adult', 'Adult', 'Senior'])
print(f"\n年龄组存活率:")
print(titanic.groupby('age_group')['survived'].mean().round(3))

# 4. 登船港口
print(f"\n登船港口存活率:")
print(titanic.groupby('embark_town')['survived'].agg(['count', 'mean']).round(3))

# 综合可视化
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# 性别
sns.barplot(data=titanic, x='sex', y='survived', ax=axes[0, 0])
axes[0, 0].set_title('Survival Rate by Gender')

# 舱位与性别
sns.barplot(data=titanic, x='pclass', y='survived', hue='sex', ax=axes[0, 1])
axes[0, 1].set_title('Survival Rate by Class and Gender')

# 年龄分布
sns.histplot(data=titanic, x='age', hue='survived', bins=30, kde=True, ax=axes[1, 0])
axes[1, 0].set_title('Age Distribution by Survival')

# 票价分布
sns.boxplot(data=titanic, x='survived', y='fare', ax=axes[1, 1])
axes[1, 1].set_title('Fare Distribution by Survival')
axes[1, 1].set_ylim(0, 300)

plt.tight_layout()
plt.savefig('eda_comprehensive.png', dpi=150, bbox_inches='tight')
plt.show()
```

#### 数据清洗与预处理

```python
print("\n" + "=" * 50)
print("数据清洗与预处理")
print("=" * 50)

# 创建数据副本进行处理
df = titanic.copy()

# 1. 处理缺失值
print(f"\n缺失值处理前:")
print(df.isnull().sum()[df.isnull().sum() > 0])

# 年龄：用中位数填充
df['age'].fillna(df['age'].median(), inplace=True)

# 登船港口：用众数填充
df['embarked'].fillna(df['embarked'].mode()[0], inplace=True)
df['embark_town'].fillna(df['embark_town'].mode()[0], inplace=True)

# 票价：用中位数填充
df['fare'].fillna(df['fare'].median(), inplace=True)

# deck（甲板）缺失太多，可以删除该列或创建"Unknown"类别
df['deck'] = df['deck'].cat.add_categories('Unknown')
df['deck'].fillna('Unknown', inplace=True)

print(f"\n缺失值处理后:")
print(df.isnull().sum()[df.isnull().sum() > 0])

# 2. 特征工程
print(f"\n特征工程:")

# 家庭大小
df['family_size'] = df['sibsp'] + df['parch'] + 1
print(f"  创建特征: family_size (家庭大小)")

# 是否独自旅行
df['is_alone'] = (df['family_size'] == 1).astype(int)
print(f"  创建特征: is_alone (是否独自)")

# 票价类别
df['fare_category'] = pd.qcut(df['fare'], q=4, labels=['Low', 'Medium', 'High', 'Very High'])
print(f"  创建特征: fare_category (票价类别)")

# 姓名提取头衔
df['title'] = df['name'].str.extract(' ([A-Za-z]+)\.', expand=False)
print(f"  创建特征: title (头衔)")
print(f"  头衔分布:\n{df['title'].value_counts().head()}")

# 简化头衔
title_mapping = {
    'Mr': 'Mr',
    'Miss': 'Miss',
    'Mrs': 'Mrs',
    'Master': 'Master',
    'Dr': 'Rare',
    'Rev': 'Rare',
    'Col': 'Rare',
    'Major': 'Rare',
    'Mlle': 'Miss',
    'Countess': 'Rare',
    'Ms': 'Miss',
    'Lady': 'Rare',
    'Jonkheer': 'Rare',
    'Don': 'Rare',
    'Dona': 'Rare',
    'Mme': 'Mrs',
    'Capt': 'Rare',
    'Sir': 'Rare'
}
df['title'] = df['title'].map(title_mapping).fillna('Rare')
print(f"  简化后的头衔分布:\n{df['title'].value_counts()}")

print(f"\n处理后的数据集形状: {df.shape}")
print(f"特征列表: {df.columns.tolist()}")
```

#### 特征工程

```python
print("\n" + "=" * 50)
print("特征工程")
print("=" * 50)

# 选择建模特征
features = ['pclass', 'sex', 'age', 'sibsp', 'parch', 'fare', 
            'embarked', 'family_size', 'is_alone', 'title']

# 准备建模数据
model_df = df[features + ['survived']].copy()

# 编码分类变量
# 性别
model_df['sex'] = model_df['sex'].map({'male': 0, 'female': 1})

# 登船港口
embarked_dummies = pd.get_dummies(model_df['embarked'], prefix='embarked')
model_df = pd.concat([model_df, embarked_dummies], axis=1)
model_df.drop('embarked', axis=1, inplace=True)

# 头衔
title_dummies = pd.get_dummies(model_df['title'], prefix='title')
model_df = pd.concat([model_df, title_dummies], axis=1)
model_df.drop('title', axis=1, inplace=True)

print(f"特征工程后的特征数量: {model_df.shape[1] - 1}")  # 减1是因为要去掉目标变量
print(f"最终特征:\n{[c for c in model_df.columns if c != 'survived']}")

# 查看特征相关性
plt.figure(figsize=(12, 10))
corr_matrix = model_df.corr()
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', center=0, fmt='.2f')
plt.title('Feature Correlation Matrix')
plt.tight_layout()
plt.savefig('feature_correlation.png', dpi=150, bbox_inches='tight')
plt.show()

# 打印与目标变量的相关性
print(f"\n特征与存活率的相关性:")
target_corr = corr_matrix['survived'].drop('survived').sort_values(key=abs, ascending=False)
print(target_corr.round(3))
```

#### 建模与评估

```python
print("\n" + "=" * 50)
print("建模与评估")
print("=" * 50)

# 准备特征和目标变量
X = model_df.drop('survived', axis=1)
y = model_df['survived']

# 划分训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

print(f"训练集大小: {X_train.shape}")
print(f"测试集大小: {X_test.shape}")

# 训练随机森林模型
rf_model = RandomForestClassifier(n_estimators=100, random_state=42, max_depth=10)
rf_model.fit(X_train, y_train)

# 预测
y_pred = rf_model.predict(X_test)
y_pred_proba = rf_model.predict_proba(X_test)[:, 1]

# 评估
accuracy = accuracy_score(y_test, y_pred)
print(f"\n模型准确率: {accuracy:.4f}")

print(f"\n分类报告:")
print(classification_report(y_test, y_pred, target_names=['Died', 'Survived']))

# 混淆矩阵
cm = confusion_matrix(y_test, y_pred)
print(f"\n混淆矩阵:")
print(cm)

# 可视化混淆矩阵
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', 
            xticklabels=['Died', 'Survived'],
            yticklabels=['Died', 'Survived'])
plt.title('Confusion Matrix')
plt.ylabel('True Label')
plt.xlabel('Predicted Label')
plt.savefig('confusion_matrix.png', dpi=150, bbox_inches='tight')
plt.show()

# 特征重要性
feature_importance = pd.DataFrame({
    'feature': X.columns,
    'importance': rf_model.feature_importances_
}).sort_values('importance', ascending=False)

print(f"\n特征重要性:")
print(feature_importance.head(10))

# 可视化特征重要性
plt.figure(figsize=(10, 6))
sns.barplot(data=feature_importance.head(10), x='importance', y='feature')
plt.title('Top 10 Feature Importances')
plt.tight_layout()
plt.savefig('feature_importance.png', dpi=150, bbox_inches='tight')
plt.show()
```

#### 结果可视化与报告

```python
print("\n" + "=" * 50)
print("分析结论")
print("=" * 50)

conclusions = """
【泰坦尼克号生存分析结论】

1. 总体存活率为38.38%，遇难率61.62%

2. 影响生存的关键因素（按重要性排序）:
   - 性别: 女性存活率(74.2%)远高于男性(18.9%)
   - 舱位等级: 一等舱存活率(63.0%) > 二等舱(47.3%) > 三等舱(24.2%)
   - 年龄: 儿童存活率相对较高
   - 票价: 票价越高，存活率越高
   - 家庭大小: 中等家庭规模(2-4人)存活率最高

3. "妇女和儿童优先"原则得到数据验证:
   - 女性存活率是男性的近4倍
   - 儿童(0-12岁)存活率高于平均水平

4. 社会经济地位（舱位、票价）显著影响生存机会

5. 模型预测准确率达到约82%，能够有效预测生存结果
"""

print(conclusions)

# 生成综合报告图表
fig = plt.figure(figsize=(16, 12))

# 使用GridSpec创建复杂布局
gs = fig.add_gridspec(3, 3, hspace=0.3, wspace=0.3)

# 1. 存活率总体分布
ax1 = fig.add_subplot(gs[0, 0])
sns.countplot(data=titanic, x='survived', ax=ax1)
ax1.set_title('Survival Distribution')
ax1.set_xticklabels(['Died', 'Survived'])

# 2. 性别与存活率
ax2 = fig.add_subplot(gs[0, 1])
sns.barplot(data=titanic, x='sex', y='survived', ax=ax2)
ax2.set_title('Survival Rate by Gender')

# 3. 舱位与存活率
ax3 = fig.add_subplot(gs[0, 2])
sns.barplot(data=titanic, x='pclass', y='survived', ax=ax3)
ax3.set_title('Survival Rate by Class')

# 4. 年龄分布
ax4 = fig.add_subplot(gs[1, 0])
sns.histplot(data=titanic, x='age', hue='survived', bins=30, ax=ax4)
ax4.set_title('Age Distribution by Survival')

# 5. 特征重要性
ax5 = fig.add_subplot(gs[1, 1:])
sns.barplot(data=feature_importance.head(8), x='importance', y='feature', ax=ax5)
ax5.set_title('Feature Importance')

# 6. 家庭大小与存活率
ax6 = fig.add_subplot(gs[2, 0])
sns.barplot(data=df, x='family_size', y='survived', ax=ax6)
ax6.set_title('Survival Rate by Family Size')

# 7. 票价类别
ax7 = fig.add_subplot(gs[2, 1])
sns.barplot(data=df, x='fare_category', y='survived', ax=ax7)
ax7.set_title('Survival Rate by Fare Category')

# 8. 登船港口
ax8 = fig.add_subplot(gs[2, 2])
sns.barplot(data=titanic, x='embark_town', y='survived', ax=ax8)
ax8.set_title('Survival Rate by Embark Town')

plt.suptitle('Titanic Survival Analysis Report', fontsize=16, fontweight='bold', y=0.98)
plt.savefig('titanic_analysis_report.png', dpi=150, bbox_inches='tight')
plt.show()

print("\n分析完成！所有图表已保存。")
```

通过这个完整的项目，我们展示了数据分析的标准流程：从业务问题定义到数据获取、从探索性分析到清洗预处理、从特征工程到建模评估、最后生成可视化报告。这个流程适用于绝大多数数据分析项目。

### 4.6 Jupyter Notebook 工作流

Jupyter Notebook 已成为数据科学家的标准工作环境，它支持交互式编程、富文本展示和结果可视化，是数据分析、教学演示的理想工具。

#### 环境配置与启动

```bash
# 安装 Jupyter
pip install jupyter

# 安装常用扩展
pip install jupyter_contrib_nbextensions
jupyter contrib nbextension install --user

# 启动 Jupyter Notebook
jupyter notebook

# 或者使用 JupyterLab（更现代的界面）
pip install jupyterlab
jupyter lab

# 指定端口和目录启动
jupyter notebook --port 8888 --no-browser --ip=0.0.0.0
```

常用配置：

```python
# 在Notebook中执行shell命令
!pip install pandas numpy matplotlib

# 查看当前目录
!ls -la

# 魔法命令：配置Notebook
%matplotlib inline  # 内嵌显示图表
%config InlineBackend.figure_format = 'retina'  # 高清图表
```

#### 魔法命令

魔法命令（Magic Commands）是 Jupyter 的强大特性，以 `%`（行魔法）或 `%%`（单元格魔法）开头：

```python
# 时间管理魔法命令

# %time: 测量单行代码执行时间
%time sum(range(1000000))

# %timeit: 多次运行取最佳时间
%timeit -n 100 -r 5 sum(range(10000))

# %%time: 测量整个单元格
%%time
import numpy as np
arr = np.random.randn(1000000)
result = np.fft.fft(arr)

# %prun: 代码性能分析
%prun -s cumulative sum(range(1000000))
```

数据处理魔法命令：

```python
# 变量管理
%who  # 列出所有变量
%whos  # 详细信息
%reset  # 清除所有变量

# 环境信息
%pwd  # 当前目录
%ls  # 列出文件
%cd /path/to/dir  # 切换目录
%history  # 命令历史

# 系统命令
!cat /etc/passwd  # 执行shell命令
!wget https://example.com/data.csv

# %%writefile: 写入文件
%%writefile script.py
def hello():
    print("Hello, World!")

if __name__ == "__main__":
    hello()

# %load: 加载文件内容
# %load script.py

# %run: 运行Python脚本
# %run script.py
```

调试和开发：

```python
# %debug: 进入调试器
def buggy_function():
    x = 1
    y = 0
    return x / y  # 这将引发错误

# buggy_function()  # 取消注释会报错
# %debug  # 在报错后运行进入调试器

# %pdb: 自动在异常后进入调试器
%pdb on

# %%html: 渲染HTML
%%html
<h3 style="color: blue;">这是一个HTML标题</h3>
<p style="color: green;">这是绿色文字</p>

# %%latex: 渲染LaTeX公式
%%latex
$$E = mc^2$$
$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$
```

#### 交互式小部件：ipywidgets

ipywidgets 让 Notebook 具备交互能力：

```python
# 安装: pip install ipywidgets

import ipywidgets as widgets
from ipywidgets import interact, interact_manual
import matplotlib.pyplot as plt
import numpy as np

# 基础交互函数
@interact(x=(0, 10), y='Hello')
def greet(x, y):
    return f"{y}! The number is {x}"

# 交互式绘图
@interact(freq=(1, 10), phase=(0, 2*np.pi))
def plot_sine(freq=1, phase=0):
    x = np.linspace(0, 4*np.pi, 1000)
    y = np.sin(freq * x + phase)
    
    plt.figure(figsize=(10, 4))
    plt.plot(x, y)
    plt.title(f'Sine Wave: freq={freq}, phase={phase:.2f}')
    plt.xlabel('x')
    plt.ylabel('sin(x)')
    plt.grid(True)
    plt.ylim(-1.5, 1.5)
    plt.show()

# 交互式数据处理演示
import pandas as pd

df = pd.DataFrame({
    'x': np.random.randn(1000),
    'y': np.random.randn(1000)
})

@interact(bins=(10, 100, 5), alpha=(0.1, 1.0, 0.1))
def plot_histogram(bins=30, alpha=0.7):
    plt.figure(figsize=(10, 4))
    plt.hist(df['x'], bins=bins, alpha=alpha, label='x')
    plt.hist(df['y'], bins=bins, alpha=alpha, label='y')
    plt.xlabel('Value')
    plt.ylabel('Frequency')
    plt.title(f'Histogram with {bins} bins')
    plt.legend()
    plt.show()

# 更复杂的widget组合
dropdown = widgets.Dropdown(
    options=['Option 1', 'Option 2', 'Option 3'],
    value='Option 1',
    description='选择:'
)

slider = widgets.IntSlider(
    value=50,
    min=0,
    max=100,
    step=1,
    description='数值:'
)

button = widgets.Button(description="点击我!")
output = widgets.Output()

def on_button_click(b):
    with output:
        output.clear_output()
        print(f"选择了: {dropdown.value}")
        print(f"滑块值: {slider.value}")

button.on_click(on_button_click)

display(widgets.VBox([dropdown, slider, button, output]))
```

#### Notebook 分享

分享 Jupyter Notebook 有多种方式：

```python
# 1. 导出为不同格式
# 通过 File -> Download as 菜单

# 或使用nbconvert命令行
!jupyter nbconvert --to html notebook.ipynb  # HTML
!jupyter nbconvert --to pdf notebook.ipynb   # PDF
!jupyter nbconvert --to python notebook.ipynb  # Python脚本
!jupyter nbconvert --to markdown notebook.ipynb  # Markdown
!jupyter nbconvert --to slides notebook.ipynb  # 幻灯片

# 2. nbviewer - 在线查看
# 将Notebook上传到GitHub，然后在 https://nbviewer.jupyter.org/ 查看
# 或者直接访问: https://nbviewer.jupyter.org/github/username/repo/blob/main/notebook.ipynb

# 3. Binder - 可交互的在线环境
# 创建 environment.yml 或 requirements.txt
# 然后访问: https://mybinder.org/

# 4. JupyterHub - 多用户服务器
# 适合团队或教学场景

# 5. Google Colab - 免费的云端Notebook
# 可以直接上传.ipynb文件或从GitHub导入
# https://colab.research.google.com/
```

最佳实践：

```python
# Notebook组织最佳实践

"""
1. 结构清晰
   - 使用Markdown单元格添加标题和说明
   - 按逻辑分段：导入 -> 数据加载 -> 清洗 -> 分析 -> 可视化

2. 代码整洁
   - 函数封装复杂逻辑
   - 添加注释和文档字符串

3. 可复现性
   - 记录依赖版本
   - 设置随机种子
   - 使用相对路径

4. 输出控制
   - 避免显示过大的数据框
   - 清理不必要的输出
"""

# 示例：良好结构的Notebook代码组织
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 配置
RANDOM_SEED = 42
np.random.seed(RANDOM_SEED)

# 常量定义
DATA_PATH = 'data/sample.csv'
FIGURE_SIZE = (12, 6)

def load_and_clean_data(path):
    """
    加载并清洗数据
    
    Parameters:
        path (str): 数据文件路径
    
    Returns:
        pd.DataFrame: 清洗后的数据
    """
    df = pd.read_csv(path)
    # 清洗逻辑...
    return df

def analyze_data(df):
    """分析数据"""
    # 分析逻辑...
    return results

def visualize_results(results):
    """可视化结果"""
    # 可视化逻辑...
    pass

# 主流程
if __name__ == '__main__':
    # 在实际Notebook中直接执行
    df = load_and_clean_data(DATA_PATH)
    results = analyze_data(df)
    visualize_results(results)
```

Jupyter Notebook 是数据科学工作流的枢纽。魔法命令提升开发效率，交互式小部件增强探索体验，多种分享方式让成果传播更加便捷。熟练掌握 Notebook 工作流，是数据科学家的必备技能。

### 4.7 大数据处理

当数据量超过单机内存限制时，需要借助大数据处理工具。Python 生态提供了 Dask、PySpark、Polars 等解决方案。

#### Dask：并行 DataFrame

Dask 提供了与 Pandas 类似的 API，但支持并行和分布式计算：

```python
# 安装: pip install dask[dataframe]

import dask.dataframe as dd
import pandas as pd
import numpy as np

# 创建大型合成数据集用于演示
np.random.seed(42)

# Dask可以从多个CSV文件创建DataFrame
# ddf = dd.read_csv('data/*.csv')

# 这里创建内存中的大数据集演示
pdf = pd.DataFrame({
    'id': range(1000000),
    'value': np.random.randn(1000000),
    'category': np.random.choice(['A', 'B', 'C'], 1000000),
    'date': pd.date_range('2024-01-01', periods=1000000, freq='min')
})

# 转换为Dask DataFrame
ddf = dd.from_pandas(pdf, npartitions=4)

print(f"分区数: {ddf.npartitions}")
print(f"数据类型:\n{ddf.dtypes}")

# 延迟计算 - Dask不会立即执行
mean_value = ddf['value'].mean()
print(f"\n延迟计算对象: {mean_value}")

# 调用compute()触发计算
result = mean_value.compute()
print(f"平均值计算结果: {result:.6f}")

# 分组聚合（分布式）
group_result = ddf.groupby('category')['value'].agg(['mean', 'std', 'count']).compute()
print(f"\n分组聚合结果:\n{group_result}")

# 筛选数据
filtered = ddf[ddf['value'] > 0]
print(f"\n筛选后记录数: {len(filtered)}")

# 复杂操作链
result = (ddf
    .assign(squared=ddf['value'] ** 2)
    .groupby('category')
    .agg({'value': 'mean', 'squared': 'sum'})
    .compute())
print(f"\n复杂操作结果:\n{result}")

# 保存到多个文件
# ddf.to_csv('output/part-*.csv', index=False)

# 与Pandas的API对比
# 大多数Pandas操作在Dask中同样适用
print(f"\n列名: {ddf.columns.tolist()}")
print(f"前5行:\n{ddf.head()}")
print(f"统计描述:\n{ddf.describe().compute()}")
```

Dask 的延迟执行模型：

```python
import dask
from dask import delayed

# 延迟装饰器：将函数转换为延迟计算
@delayed
def add(x, y):
    print(f"Adding {x} + {y}")
    return x + y

@delayed
def mul(x, y):
    print(f"Multiplying {x} * {y}")
    return x * y

# 构建计算图
a = add(1, 2)      # 不执行
b = add(3, 4)      # 不执行
c = mul(a, b)      # 不执行

print("计算图构建完成，尚未执行")
print(f"计算图类型: {type(c)}")

# 可视化计算图（需要graphviz）
# c.visualize()

# 触发执行
result = c.compute()
print(f"最终结果: {result}")  # (1+2) * (3+4) = 21

# Dask Bag - 处理非结构化数据
import dask.bag as db

# 从列表创建
b = db.from_sequence([1, 2, 3, 4, 5], npartitions=2)
result = b.map(lambda x: x ** 2).filter(lambda x: x > 5).compute()
print(f"\nBag操作结果: {result}")

# Dask Array - 大规模数组计算
import dask.array as da

# 创建大规模数组（无需加载到内存）
x = da.random.random((10000, 10000), chunks=(1000, 1000))
print(f"\nDask数组形状: {x.shape}")
print(f"分块大小: {x.chunks}")

# 延迟计算
y = x + x.T
z = y[::2, 5000:].mean(axis=1)

# 执行计算
result = z.compute()
print(f"计算结果大小: {result.shape}")
```

#### PySpark：分布式计算

PySpark 是 Apache Spark 的 Python API，用于大规模数据处理：

```python
# 安装: pip install pyspark

from pyspark.sql import SparkSession
from pyspark.sql.functions import col, avg, count, max, min, when

# 创建SparkSession
spark = SparkSession.builder \
    .appName("PythonDataAnalysis") \
    .config("spark.sql.adaptive.enabled", "true") \
    .getOrCreate()

print(f"Spark版本: {spark.version}")

# 创建示例数据
import pandas as pd
import numpy as np

np.random.seed(42)
pdf = pd.DataFrame({
    'id': range(10000),
    'name': np.random.choice(['Alice', 'Bob', 'Charlie', 'David', 'Eve'], 10000),
    'age': np.random.randint(18, 65, 10000),
    'salary': np.random.randint(3000, 30000, 10000),
    'department': np.random.choice(['IT', 'HR', 'Sales', 'Marketing'], 10000)
})

# 转换为Spark DataFrame
df = spark.createDataFrame(pdf)

# 显示数据
df.show(5)

# 基本操作
print("Schema:")
df.printSchema()

print(f"\n总行数: {df.count()}")

# 筛选
df_filtered = df.filter(col('age') > 30)
print(f"年龄>30的人数: {df_filtered.count()}")

# 选择列
df_selected = df.select('name', 'age', 'salary')
df_selected.show(5)

# 添加新列
df_with_bonus = df.withColumn('bonus', col('salary') * 0.1)
df_with_bonus.show(5)

# 条件列
df_with_level = df.withColumn(
    'level',
    when(col('salary') < 10000, 'Junior')
    .when(col('salary') < 20000, 'Senior')
    .otherwise('Lead')
)
df_with_level.show(5)

# 分组聚合
agg_result = df.groupBy('department').agg(
    count('*').alias('count'),
    avg('salary').alias('avg_salary'),
    max('salary').alias('max_salary'),
    min('salary').alias('min_salary')
).orderBy(col('avg_salary').desc())

agg_result.show()

# 转换为Pandas DataFrame
pandas_df = agg_result.toPandas()
print(f"\n转换后的Pandas DataFrame:\n{pandas_df}")

# 停止SparkSession
spark.stop()
```

Spark SQL 和机器学习：

```python
from pyspark.sql import SparkSession
from pyspark.ml.feature import VectorAssembler, StandardScaler
from pyspark.ml.classification import LogisticRegression
from pyspark.ml.evaluation import BinaryClassificationEvaluator

spark = SparkSession.builder.appName("MLExample").getOrCreate()

# 创建示例数据
import numpy as np
np.random.seed(42)

n = 10000
data = spark.createDataFrame([
    (float(np.random.randn()), float(np.random.randn()), float(np.random.randn()), int(np.random.randint(0, 2)))
    for _ in range(n)
], ['feature1', 'feature2', 'feature3', 'label'])

# 特征工程
assembler = VectorAssembler(
    inputCols=['feature1', 'feature2', 'feature3'],
    outputCol='features'
)
data_assembled = assembler.transform(data)

# 划分训练集和测试集
train_data, test_data = data_assembled.randomSplit([0.8, 0.2], seed=42)

# 训练模型
lr = LogisticRegression(featuresCol='features', labelCol='label')
model = lr.fit(train_data)

# 预测
predictions = model.transform(test_data)
predictions.select('features', 'label', 'prediction', 'probability').show(10)

# 评估
evaluator = BinaryClassificationEvaluator(labelCol='label')
auc = evaluator.evaluate(predictions)
print(f"AUC: {auc:.4f}")

spark.stop()
```

#### Polars：高性能 DataFrame

Polars 是用 Rust 编写的高性能 DataFrame 库，速度远超 Pandas：

```python
# 安装: pip install polars

import polars as pl
import numpy as np

np.random.seed(42)

# 创建DataFrame
df = pl.DataFrame({
    'id': range(1000000),
    'value': np.random.randn(1000000),
    'category': np.random.choice(['A', 'B', 'C'], 1000000),
})

print(f"DataFrame形状: {df.shape}")
print(f"数据类型:\n{df.dtypes}")
print(f"\n前5行:\n{df.head()}")

# 基本操作
print(f"\n描述统计:\n{df.describe()}")

# 筛选
filtered = df.filter(pl.col('value') > 0)
print(f"value > 0 的记录数: {len(filtered)}")

# 多条件筛选
filtered2 = df.filter((pl.col('value') > 0) & (pl.col('category') == 'A'))
print(f"value > 0 且 category == 'A' 的记录数: {len(filtered2)}")

# 分组聚合
agg = df.group_by('category').agg([
    pl.col('value').mean().alias('mean_value'),
    pl.col('value').std().alias('std_value'),
    pl.col('value').count().alias('count')
])
print(f"\n分组聚合结果:\n{agg}")

# 添加新列
df_with_new = df.with_columns([
    (pl.col('value') * 2).alias('value_doubled'),
    pl.when(pl.col('value') > 0).then('positive').otherwise('negative').alias('sign')
])
print(f"\n添加新列后:\n{df_with_new.head()}")

# 排序
df_sorted = df.sort('value', descending=True)
print(f"\n按value降序排列:\n{df_sorted.head()}")

# 选择列
selected = df.select(['id', 'value'])
print(f"\n选择列:\n{selected.head()}")

# 性能对比示例
import time

# 创建更大的数据集
large_df = pl.DataFrame({
    'a': np.random.randn(10_000_000),
    'b': np.random.randn(10_000_000),
    'c': np.random.choice(['X', 'Y', 'Z'], 10_000_000)
})

# Polars操作
start = time.time()
result_pl = large_df.group_by('c').agg([
    pl.col('a').mean(),
    pl.col('b').sum()
])
pl_time = time.time() - start
print(f"\nPolars分组聚合耗时: {pl_time:.4f}秒")

# 对比Pandas
import pandas as pd
large_pd = large_df.to_pandas()

start = time.time()
result_pd = large_pd.groupby('c').agg({'a': 'mean', 'b': 'sum'})
pd_time = time.time() - start
print(f"Pandas分组聚合耗时: {pd_time:.4f}秒")
print(f"Polars加速比: {pd_time/pl_time:.1f}x")

# 惰性执行 (Lazy API) - Polars的强大特性
lazy_df = df.lazy()

# 构建查询计划（不执行）
query = (lazy_df
    .filter(pl.col('value') > 0)
    .group_by('category')
    .agg(pl.col('value').mean())
    .sort('value', descending=True)
)

# 显示查询计划
print(f"\n查询计划:\n{query.explain()}")

# 执行查询
result = query.collect()
print(f"\n惰性执行结果:\n{result}")

# 读取CSV（惰性）
# lazy_df = pl.scan_csv('large_file.csv')
```

大数据处理工具的选择建议：

- **Dask**：适合熟悉 Pandas 的用户，单机多核或小型集群
- **PySpark**：适合企业级大数据，与 Hadoop 生态集成
- **Polars**：适合追求极致性能的单机处理，API 现代化

### 4.8 里程碑书籍

深入学习 Python 数据科学，以下书籍是不可或缺的参考：

#### 《Python 数据科学手册》- Jake VanderPlas

这本书被誉为数据科学的"瑞士军刀"，系统介绍了 NumPy、Pandas、Matplotlib、Scikit-learn 四大核心库。

**核心内容**：
- IPython 和 Jupyter 的深度使用技巧
- NumPy 数组计算的高级用法
- Pandas 数据操作完整指南
- Matplotlib 可视化精讲
- 机器学习基础与实践

**适合读者**：有一定 Python 基础，想系统学习数据科学的开发者。书中提供了大量 Jupyter Notebook 示例，适合边学边练。

**阅读建议**：重点阅读第2-4章（NumPy、Pandas、Matplotlib），这些是日常工作中使用频率最高的内容。第5章的机器学习内容可作为 Scikit-learn 的入门。

#### 《利用 Python 进行数据分析》- Wes McKinney

Wes McKinney 是 Pandas 的创始人，这本书是 Pandas 的官方权威指南。

**核心内容**：
- Python 数据分析生态全景
- IPython 和 Jupyter 工作流
- Pandas 全面详解（核心内容）
- 数据加载、清洗、规整、分析
- 数据可视化

**适合读者**：数据分析师、金融从业者、科研人员。如果你想精通 Pandas，这是必读之书。

**阅读建议**：第5-12章是精华，涵盖了 Pandas 的所有核心功能。建议配合实际数据集边读边实践，书中的示例代码质量极高。

#### 《Python 机器学习》- Sebastian Raschka

这本书是 Python 机器学习的经典教材，理论与实践并重。

**核心内容**：
- 机器学习基础概念
- Scikit-learn 完整教程
- 分类、回归、聚类算法
- 模型评估与调优
- 深度学习入门（使用 TensorFlow）

**适合读者**：想系统学习机器学习的数据科学家、工程师。书中包含大量数学推导，但也提供了清晰的 Python 实现。

**阅读建议**：前10章涵盖了传统机器学习的完整流程，建议精读。深度学习部分可作为拓展阅读，如需深入学习建议配合专门的深度学习书籍。

### 4.9 推荐 GitHub 项目

参与开源项目是提升技能的捷径。以下是数据科学领域的核心开源项目：

#### pandas-dev/pandas

**项目地址**：https://github.com/pandas-dev/pandas

**项目简介**：Pandas 是 Python 数据分析的事实标准。参与这个项目可以深入理解数据处理的底层实现。

**学习价值**：
- 阅读源码了解 DataFrame 的内部结构
- 学习高性能数据处理的最佳实践
- 贡献代码提升技术影响力

**入门建议**：从 "good first issue" 标签的 issue 开始，先提交文档改进或小的 bug 修复。

#### numpy/numpy

**项目地址**：https://github.com/numpy/numpy

**项目简介**：NumPy 是 Python 科学计算的基石，几乎所有数据科学库都依赖它。

**学习价值**：
- 理解数组计算的性能优化技巧
- 学习 C 扩展编写（NumPy 核心用 C 实现）
- 掌握广播机制等高级特性的实现

#### matplotlib/matplotlib

**项目地址**：https://github.com/matplotlib/matplotlib

**项目简介**：Matplotlib 是 Python 最基础的可视化库。

**学习价值**：
- 学习图形渲染的底层原理
- 理解 Figure/Axes/Axis 的架构设计
- 创建自定义可视化组件

#### scikit-learn/scikit-learn

**项目地址**：https://github.com/scikit-learn/scikit-learn

**项目简介**：Scikit-learn 是 Python 最流行的机器学习库，以一致的 API 设计著称。

**学习价值**：
- 学习机器学习算法的实现
- 理解统一的 estimator API 设计
- 掌握模型评估和选择的完整流程

**入门建议**：从阅读文档和示例开始，尝试实现一个新的 estimator 或改进现有算法。

---

通过本章的学习，你已经掌握了 Python 数据科学的核心工具链：从 NumPy 的数值计算到 Pandas 的数据处理，从 Matplotlib 的可视化到 Scikit-learn 的机器学习。这些技能将为你打开数据分析、商业智能、人工智能等领域的大门。记住，数据科学是一门实践学科，多做项目、多分析真实数据，才能真正掌握这些工具的精髓。

---

## 第五章：LLM 与大模型应用

人工智能正在重塑软件开发的方式。从智能代码补全到全自动代码生成，从智能客服到知识问答系统，大语言模型（LLM）已经成为现代 Python 开发者必须掌握的核心技术。本章将深入探讨 LLM 的原理与实践，帮助你构建真正可用的 AI 应用。

### 5.1 大模型基础概念

理解大语言模型的工作原理是构建高质量 AI 应用的基础。本节将介绍 GPT 架构的核心概念、Token 机制以及提示工程的基本原则。

#### GPT 架构原理简述

GPT（Generative Pre-trained Transformer）是 OpenAI 开发的一系列大语言模型，其核心是基于 Transformer 架构的解码器部分。理解 Transformer 是理解 GPT 的关键。

**Transformer 的核心组件：**

1. **自注意力机制（Self-Attention）**：允许模型在处理每个词时同时关注输入序列中的所有位置，计算它们之间的相关性权重。这是 Transformer 能够捕捉长距离依赖关系的基础。

2. **多头注意力（Multi-Head Attention）**：将注意力机制并行执行多次，每个"头"可以关注不同的特征子空间，从而捕捉更丰富的语义信息。

3. **位置编码（Positional Encoding）**：由于 Transformer 不像 RNN 那样按顺序处理输入，需要显式地注入位置信息，让模型知道词序关系。

4. **前馈神经网络（Feed-Forward Networks）**：每个 Transformer 块包含一个全连接前馈网络，对注意力输出进行进一步变换。

5. **层归一化（Layer Normalization）与残差连接（Residual Connections）**：帮助训练更深层的网络，防止梯度消失。

GPT 系列模型采用**仅解码器架构**（Decoder-only），通过自回归方式生成文本——每次预测下一个最可能的 Token，然后将其加入上下文继续生成。

**代码示例：理解注意力机制的基本概念**

```python
import numpy as np
import math

def softmax(x):
    """计算 softmax"""
    exp_x = np.exp(x - np.max(x, axis=-1, keepdims=True))
    return exp_x / np.sum(exp_x, axis=-1, keepdims=True)

def scaled_dot_product_attention(Q, K, V, mask=None):
    """
    缩放点积注意力机制简化实现
    Q: Query 矩阵 (batch, seq_len, d_k)
    K: Key 矩阵 (batch, seq_len, d_k)
    V: Value 矩阵 (batch, seq_len, d_v)
    """
    d_k = Q.shape[-1]
    
    # 计算注意力分数: Q @ K^T / sqrt(d_k)
    scores = np.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
    
    # 应用 mask（如因果掩码，防止看到未来信息）
    if mask is not None:
        scores = np.where(mask == 0, -1e9, scores)
    
    # Softmax 得到注意力权重
    attention_weights = softmax(scores)
    
    # 加权求和得到输出
    output = np.matmul(attention_weights, V)
    
    return output, attention_weights

# 示例：计算注意力
d_k, d_v = 64, 64
seq_len = 4
batch_size = 1

# 随机初始化 Q, K, V
np.random.seed(42)
Q = np.random.randn(batch_size, seq_len, d_k)
K = np.random.randn(batch_size, seq_len, d_k)
V = np.random.randn(batch_size, seq_len, d_v)

# 创建因果掩码（上三角为0，防止看到未来）
causal_mask = np.tril(np.ones((seq_len, seq_len)))

output, weights = scaled_dot_product_attention(Q, K, V, causal_mask)
print(f"注意力输出形状: {output.shape}")
print(f"注意力权重:\\n{weights[0]}")
```

#### Token 与分词：tiktoken 使用

大语言模型不直接处理原始文本，而是将文本转换为称为 Token 的整数序列。Token 可以是完整的词、子词或字符。理解 Token 机制对于控制成本和优化输出至关重要。

**关键概念：**

- **Token**：模型处理的最小单位，通常 1 Token ≈ 0.75 个英文单词或 0.5 个汉字
- **分词器（Tokenizer）**：将文本编码为 Token 序列的算法，常见算法包括 BPE（Byte Pair Encoding）
- **上下文窗口**：模型能处理的最大 Token 数量，决定了输入+输出的总长度限制

**tiktoken 是 OpenAI 开发的高性能分词库：**

```python
import tiktoken

# 获取不同模型的分词器
encodings = {
    "gpt-4": tiktoken.encoding_for_model("gpt-4"),
    "gpt-3.5-turbo": tiktoken.encoding_for_model("gpt-3.5-turbo"),
    "cl100k_base": tiktoken.get_encoding("cl100k_base")  # 通用编码
}

def count_tokens(text, model="gpt-4"):
    """计算文本的 Token 数量"""
    encoding = tiktoken.encoding_for_model(model)
    tokens = encoding.encode(text)
    return len(tokens), tokens

def show_token_breakdown(text, model="gpt-4"):
    """展示文本的 Token 分解"""
    encoding = tiktoken.encoding_for_model(model)
    tokens = encoding.encode(text)
    
    print(f"原始文本: {text}")
    print(f"Token 数量: {len(tokens)}")
    print(f"Token IDs: {tokens}")
    print("\\nToken 分解:")
    
    for i, token_id in enumerate(tokens):
        token_bytes = encoding.decode_single_token_bytes(token_id)
        try:
            token_text = token_bytes.decode('utf-8', errors='replace')
        except:
            token_text = str(token_bytes)
        print(f"  [{i}] ID={token_id}, 文本='{token_text}'")

# 测试不同语言的 Token 效率
test_texts = [
    "Hello, world!",  # 英语
    "你好，世界！",   # 中文
    "import numpy as np",  # 代码
    "def calculate_sum(a, b):\\n    return a + b"
]

for text in test_texts:
    token_count, tokens = count_tokens(text)
    print(f"\\n'{text[:30]}...' -> {token_count} tokens")

# 详细分解示例
show_token_breakdown("Hello, 世界! 🌍")

# 计算对话的 Token 成本
def estimate_chat_cost(messages, model="gpt-4", input_price=0.03, output_price=0.06):
    """
    估算对话成本
    input_price/output_price: 每 1K tokens 的价格（美元）
    """
    encoding = tiktoken.encoding_for_model(model)
    
    # OpenAI 的消息格式有特殊开销
    tokens_per_message = 3  # 每条消息的固定开销
    tokens_per_name = 1     # 如果有 name 字段
    
    total_tokens = 0
    for message in messages:
        total_tokens += tokens_per_message
        for key, value in message.items():
            total_tokens += len(encoding.encode(value))
            if key == "name":
                total_tokens += tokens_per_name
    total_tokens += 3  # 回复的固定开销
    
    # 估算输入输出各占一半
    input_cost = (total_tokens / 2 / 1000) * input_price
    output_cost = (total_tokens / 2 / 1000) * output_price
    
    return {
        "total_tokens": total_tokens,
        "estimated_input_cost": input_cost,
        "estimated_output_cost": output_cost,
        "total_estimated_cost": input_cost + output_cost
    }

# 示例对话成本估算
sample_messages = [
    {"role": "system", "content": "你是一个有帮助的助手。"},
    {"role": "user", "content": "请解释量子计算的基本原理，用简单的语言。"}
]

cost = estimate_chat_cost(sample_messages)
print(f"\\n成本估算:")
print(f"  总 Token 数: {cost['total_tokens']}")
print(f"  预估成本: ${cost['total_estimated_cost']:.4f}")
```

#### 上下文窗口与 Token 限制

每个大模型都有上下文窗口的限制，这决定了模型能"记住"的信息量。超出限制的内容会被截断或导致错误。

| 模型 | 上下文窗口 | 特点 |
|------|-----------|------|
| GPT-4 | 8K / 32K / 128K | 强大的长文本处理能力 |
| GPT-3.5-turbo | 16K | 性价比高 |
| Claude 3 | 200K | 超长上下文领先 |
| Llama 2 | 4K | 开源模型 |

**应对上下文限制的策略：**

1. **分块处理**：将长文档切分成小块，分别处理后再聚合
2. **摘要压缩**：使用递归摘要，将之前的内容压缩成关键信息
3. **检索增强（RAG）**：只在需要时检索相关片段，而非加载全部内容
4. **滑动窗口**：保留最近的对话历史，丢弃较早的内容

```python
class ConversationManager:
    """管理对话历史，自动处理上下文长度限制"""
    
    def __init__(self, max_tokens=4000, model="gpt-3.5-turbo"):
        self.max_tokens = max_tokens
        self.model = model
        self.encoding = tiktoken.encoding_for_model(model)
        self.messages = []
    
    def add_message(self, role, content):
        """添加消息，必要时压缩历史"""
        self.messages.append({"role": role, "content": content})
        self._ensure_context_limit()
    
    def _count_tokens(self, messages):
        """计算消息列表的 Token 数"""
        total = 0
        for msg in messages:
            total += 3  # 消息开销
            total += len(self.encoding.encode(msg.get("content", "")))
            total += len(self.encoding.encode(msg.get("role", "")))
        total += 3  # 回复开销
        return total
    
    def _ensure_context_limit(self):
        """确保不超出上下文限制"""
        while self._count_tokens(self.messages) > self.max_tokens:
            # 保留 system 消息，移除最早的 user/assistant 对话
            if len(self.messages) > 1 and self.messages[0]["role"] == "system":
                self.messages.pop(1)
            else:
                self.messages.pop(0)
    
    def get_messages(self):
        return self.messages.copy()
    
    def summarize_history(self, llm_client):
        """将历史对话压缩为摘要"""
        if len(self.messages) <= 2:
            return
        
        # 保留 system 消息和最近的对话
        system_msgs = [m for m in self.messages if m["role"] == "system"]
        recent_msgs = self.messages[-2:]  # 最近一轮对话
        
        # 中间部分需要摘要
        to_summarize = self.messages[len(system_msgs):-2]
        if len(to_summarize) < 2:
            return
        
        summary_prompt = "请用一两句话总结以下对话的关键信息:\\n"
        for msg in to_summarize:
            summary_prompt += f"{msg['role']}: {msg['content']}\\n"
        
        # 这里应该调用实际的 LLM，示例使用占位符
        summary = f"[历史对话摘要: 讨论了{len(to_summarize)}条消息的内容]"
        
        self.messages = system_msgs + [{"role": "assistant", "content": summary}] + recent_msgs

# 使用示例
manager = ConversationManager(max_tokens=2000)
manager.add_message("system", "你是一个专业的编程助手。")
manager.add_message("user", "Python 中的装饰器是什么？")
manager.add_message("assistant", "装饰器是 Python 中一种用于修改函数或类行为的高级特性...")
manager.add_message("user", "能给我个例子吗？")

print(f"当前对话 Token 数: {manager._count_tokens(manager.get_messages())}")
print(f"消息数: {len(manager.get_messages())}")
```


---

## 第六章：Python 记忆训练与代码模板实战

编程学习有一个被忽视的真理：**高手与新手的差距，很大程度上体现在对代码模式的内化程度上**。就像作家能随手写出流畅的句子，是因为他们背诵过无数佳句；程序员能行云流水地编码，是因为他们将常用的代码模式化为了自己的"肌肉记忆"。本章将系统性地介绍 Python 代码记忆训练的方法，并提供经过精心筛选的 20 个核心概念和 30 个经典代码模板，帮助你在 21 天内建立起扎实的代码直觉。

### 6.1 记忆训练方法论

#### 为什么背诵对编程学习有效

编程本质上是一门语言艺术。你使用 Python 这门语言与计算机对话，表达你的想法和逻辑。就像学习任何自然语言一样，**大量的输入和内化是不可或缺的**。背诵在编程学习中的价值体现在三个层面：

**第一，降低认知负荷**。当你面对一个新问题时，如果基础语法和常用模式已经内化，你的大脑就能将更多认知资源投入到问题本身的分析上。想象一下，如果你连"如何打开文件"都需要查文档，思维就会被频繁打断，难以形成连贯的问题解决思路。

**第二，建立模式识别能力**。编程中的很多问题都有相似的结构。当你背诵了大量代码模板后，你会开始"看到"问题背后的模式——"这是一个生产者-消费者场景"、"这需要一个装饰器来处理"、"这里应该用上下文管理器"。这种模式识别能力是资深程序员的核心竞争力。

**第三，加速编码流畅度**。流畅的编码体验是进入"心流"状态的前提。当代码从指尖自然流出，而不需要频繁停顿思考语法细节时，你会体验到编程真正的乐趣，效率也会成倍提升。

#### "代码作文模型"概念

我们将编程学习与语言学习类比，提出"代码作文模型"。就像中小学生通过背诵范文来提高写作能力一样，编程学习者可以通过背诵代码模板来提升编码能力。

在这个模型中：
- **基础语法** = 词汇和语法规则
- **代码模板** = 作文范文和句式
- **项目结构** = 文章结构和段落组织
- **实战项目** = 完整作文

这个模型的核心理念是：**先积累，后创造**。没有足够的积累，创造就是空中楼阁。

#### 三个层次的记忆目标

根据"代码作文模型"，我们将记忆目标分为三个层次：

**1. 基本概念（词汇层）**

这是记忆的基础层，包括 Python 的核心概念、数据类型、内置函数等。就像学习语言需要掌握词汇一样，编程需要掌握基本概念。

记忆要求：能够准确地定义概念，并在 3 秒内写出示例代码。

**2. 代码模式（句型层）**

这是记忆的核心层，包括常用的代码模板、设计模式、算法实现等。这些是你解决具体问题的"句式"。

记忆要求：能够不看参考独立默写代码模板，并能根据场景进行变形。

**3. 项目结构（篇章层）**

这是记忆的高级层，包括完整项目的组织方式、模块划分、架构设计等。这是将"句式"组织成"文章"的能力。

记忆要求：理解项目结构的设计原理，能够快速搭建项目骨架。

#### 如何有效背诵代码：理解→拆解→默写→应用

背诵代码不是死记硬背，而是遵循科学的学习循环：

**第一步：理解（Understand）**

在背诵任何代码之前，必须确保你理解了代码的每一行在做什么。问自己：
- 这段代码解决什么问题？
- 每一行代码的作用是什么？
- 有没有替代的实现方式？为什么选这种？

理解是记忆的前提。不理解就背诵，效率极低且容易遗忘。

**第二步：拆解（Deconstruct）**

将代码拆分成逻辑单元。一段 20 行的代码可能有 3-4 个逻辑块。识别这些块，理解它们之间的关系。

例如，一个文件处理模板可以拆解为：
1. 文件打开
2. 数据处理
3. 异常处理
4. 资源关闭

**第三步：默写（Write from Memory）**

这是最关键的一步。看完代码后，合上参考资料，尝试独立写出完整代码。第一次可能只能写出 50%，没关系，对照参考，标记遗漏的部分，再次默写。重复这个过程直到能够 100% 正确默写。

**第四步：应用（Apply）**

将背诵的代码应用到实际场景中。可以是对现有项目的重构，也可以是解决新的问题。应用是检验记忆效果的唯一标准。

### 6.2 必须背诵的核心概念（20个）

以下是 Python 最核心的 20 个概念，按照数据类型、控制流、函数、OOP、高级特性分类。每个概念包含一句话定义和一句话示例。

| 概念 | 一句话定义 | 一句话示例 |
|------|-----------|-----------|
| **列表推导式** | 用一行代码创建列表的简洁语法 | `[x*2 for x in range(10)]` |
| **字典推导式** | 用一行代码创建字典的简洁语法 | `{k: v for k, v in zip(keys, values)}` |
| **集合推导式** | 用一行代码创建集合的简洁语法 | `{x for x in data if x > 0}` |
| **生成器表达式** | 惰性求值的迭代器创建语法 | `(x*2 for x in range(1000000))` |
| **装饰器** | 在不修改原函数的情况下扩展功能 | `@staticmethod` |
| **生成器** | 使用 yield 实现惰性求值的迭代器 | `def gen(): yield 1` |
| **上下文管理器** | 使用 with 自动管理资源的进入和退出 | `with open('f') as f:` |
| **闭包** | 函数记住并访问其词法作用域的变量 | `def outer(): x=1; def inner(): return x` |
| **Lambda 表达式** | 创建匿名函数的简洁语法 | `lambda x: x**2` |
| **解包操作** | 将可迭代对象展开为独立元素 | `a, b = [1, 2]` 或 `*rest, last = [1,2,3]` |
| **切片操作** | 获取序列子集的强大语法 | `lst[1:5:2]` 表示第1到第4个，步长2 |
| **魔术方法** | 以双下划线命名的特殊方法，定义对象行为 | `__init__`, `__str__`, `__len__` |
| **属性装饰器** | 将方法伪装成属性的访问方式 | `@property def name(self): return self._name` |
| **描述符** | 实现属性访问控制的协议 | `__get__`, `__set__`, `__delete__` |
| **元类** | 创建类的类，控制类的创建过程 | `class Meta(type): pass` |
| **鸭子类型** | 不关心对象类型，只关心对象能否完成操作 | `if hasattr(obj, 'quack'): obj.quack()` |
| **迭代器协议** | 实现 `__iter__` 和 `__next__` 使对象可迭代 | `class MyIter: def __iter__(self): return self` |
| **可调用对象** | 实现 `__call__` 使实例像函数一样调用 | `class Adder: def __call__(self, x): return x+1` |
| **抽象基类** | 定义接口规范，强制子类实现特定方法 | `from abc import ABC, abstractmethod` |
| **命名元组** | 带字段名的轻量级不可变数据结构 | `from collections import namedtuple` |

#### 背诵要点

对于这 20 个概念，建议按照以下优先级记忆：

**高优先级（必须熟练掌握）**：列表推导式、装饰器、生成器、上下文管理器、闭包、Lambda 表达式、解包操作、切片操作、魔术方法、属性装饰器

**中优先级（理解并能使用）**：字典推导式、集合推导式、生成器表达式、鸭子类型、迭代器协议

**进阶优先级（了解概念）**：描述符、元类、可调用对象、抽象基类、命名元组

每个概念的记忆标准是：能够在 3 秒内写出示例代码，并能解释其使用场景。

### 6.3 必须背诵的经典代码模板（30个）

以下 30 个代码模板按场景分类，每个模板包含用途说明、完整代码和记忆要点。**建议将这些代码手抄到笔记本上，每天默写一遍**。

#### 数据操作类（8个）

**模板1：列表去重并保持顺序**

```python
# 用途：去除列表重复元素，保持原始顺序
def unique(seq):
    """列表去重并保持顺序"""
    seen = set()
    result = []
    for item in seq:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

# 使用示例
data = [1, 2, 2, 3, 1, 4, 3]
print(unique(data))  # [1, 2, 3, 4]
```

**记忆要点**：使用 set 查重，list 保持顺序。时间复杂度 O(n)。

---

**模板2：字典按值排序**

```python
# 用途：按字典的值进行排序，返回排序后的键值对
def sort_dict_by_value(d, reverse=False):
    """字典按值排序，默认升序"""
    return dict(sorted(d.items(), key=lambda x: x[1], reverse=reverse))

# 使用示例
scores = {'Alice': 85, 'Bob': 92, 'Charlie': 78}
print(sort_dict_by_value(scores, reverse=True))  # {'Bob': 92, 'Alice': 85, 'Charlie': 78}
```

**记忆要点**：`sorted()` + `dict.items()` + `key=lambda`。`reverse=True` 表示降序。

---

**模板3：二维列表转置**

```python
# 用途：将矩阵（二维列表）行列互换
def transpose(matrix):
    """二维列表转置"""
    return [list(row) for row in zip(*matrix)]

# 使用示例
matrix = [[1, 2, 3], [4, 5, 6]]
print(transpose(matrix))  # [[1, 4], [2, 5], [3, 6]]
```

**记忆要点**：`zip(*matrix)` 是转置的核心，`*` 用于解包，`zip` 将对应元素配对。

---

**模板4：查找列表最频繁元素**

```python
from collections import Counter

# 用途：找出列表中出现次数最多的元素
def most_frequent(seq):
    """查找列表最频繁元素"""
    if not seq:
        return None
    counter = Counter(seq)
    return counter.most_common(1)[0][0]

# 使用示例
data = ['apple', 'banana', 'apple', 'orange', 'apple']
print(most_frequent(data))  # 'apple'
```

**记忆要点**：`Counter.most_common(n)` 返回前 n 个最频繁的元素及其计数。

---

**模板5：合并两个字典**

```python
# 用途：合并两个字典，支持 Python 3.9+ 的新语法
def merge_dicts(dict1, dict2):
    """合并两个字典，dict2 的值优先"""
    # Python 3.9+
    return dict1 | dict2
    # 兼容旧版本
    # return {**dict1, **dict2}
    # 或者
    # result = dict1.copy()
    # result.update(dict2)
    # return result

# 使用示例
d1 = {'a': 1, 'b': 2}
d2 = {'b': 3, 'c': 4}
print(merge_dicts(d1, d2))  # {'a': 1, 'b': 3, 'c': 4}
```

**记忆要点**：Python 3.9+ 用 `|` 运算符，旧版本用 `{**d1, **d2}` 解包语法。

---

**模板6：扁平化嵌套列表**

```python
from collections.abc import Iterable

# 用途：将任意深度的嵌套列表扁平化为一维列表
def flatten(lst):
    """扁平化嵌套列表"""
    for item in lst:
        if isinstance(item, Iterable) and not isinstance(item, (str, bytes)):
            yield from flatten(item)
        else:
            yield item

# 使用示例
nested = [1, [2, [3, 4]], 5, [[6]]]
print(list(flatten(nested)))  # [1, 2, 3, 4, 5, 6]
```

**记忆要点**：递归 + `yield from` 是扁平化的经典模式。注意排除字符串避免无限递归。

---

**模板7：安全获取嵌套字典值**

```python
# 用途：安全地获取嵌套字典中的值，避免 KeyError
def get_nested(d, *keys, default=None):
    """安全获取嵌套字典值"""
    for key in keys:
        if isinstance(d, dict) and key in d:
            d = d[key]
        else:
            return default
    return d

# 使用示例
data = {'user': {'profile': {'name': 'Alice', 'age': 30}}}
print(get_nested(data, 'user', 'profile', 'name'))  # 'Alice'
print(get_nested(data, 'user', 'settings', 'theme', default='dark'))  # 'dark'
```

**记忆要点**：逐层检查，遇到缺失立即返回默认值。`*keys` 接收可变数量的键。

---

**模板8：实现 LRU 缓存**

```python
from functools import lru_cache

# 用途：使用装饰器为函数添加 LRU 缓存
@lru_cache(maxsize=128)
def fibonacci(n):
    """带缓存的斐波那契数列"""
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# 使用示例
print(fibonacci(100))  # 瞬间完成，因为有缓存
print(fibonacci.cache_info())  # 查看缓存统计
```

**记忆要点**：`functools.lru_cache` 是最简单的缓存方案。`maxsize` 控制缓存大小，None 表示无限。

#### 文件操作类（5个）

**模板9：读取大文件（内存安全）**

```python
# 用途：逐行读取大文件，避免内存溢出
def read_large_file(filepath):
    """内存安全的文件读取"""
    with open(filepath, 'r', encoding='utf-8') as f:
        for line in f:
            yield line.strip()

# 使用示例
for line in read_large_file('large_file.txt'):
    process(line)  # 逐行处理，内存占用恒定
```

**记忆要点**：使用生成器逐行读取，而不是 `readlines()` 一次性加载。`strip()` 去除换行符。

---

**模板10：批量重命名文件**

```python
import os
import re

# 用途：批量重命名目录中的文件
def batch_rename(directory, pattern, replacement):
    """批量重命名文件"""
    for filename in os.listdir(directory):
        new_name = re.sub(pattern, replacement, filename)
        if new_name != filename:
            old_path = os.path.join(directory, filename)
            new_path = os.path.join(directory, new_name)
            os.rename(old_path, new_path)
            print(f'Renamed: {filename} -> {new_name}')

# 使用示例
# batch_rename('./photos', r'IMG_(\d+)', r'vacation_\1')
```

**记忆要点**：`os.listdir()` 获取文件列表，`re.sub()` 做模式替换，`os.rename()` 执行重命名。

---

**模板11：递归遍历目录**

```python
import os
from pathlib import Path

# 用途：递归遍历目录，获取所有文件
def walk_directory(directory, pattern='*'):
    """递归遍历目录，返回匹配的文件"""
    path = Path(directory)
    return list(path.rglob(pattern))

# 使用示例
python_files = walk_directory('./src', '*.py')
for f in python_files:
    print(f)  # 所有 .py 文件的 Path 对象
```

**记忆要点**：`pathlib.Path.rglob()` 是递归遍历的现代方式，返回 Path 对象更易用。

---

**模板12：JSON 读写与异常处理**

```python
import json
from pathlib import Path

# 用途：安全地读写 JSON 文件
class JSONStorage:
    """JSON 文件存储"""
    def __init__(self, filepath):
        self.filepath = Path(filepath)
    
    def load(self, default=None):
        """加载 JSON 数据"""
        try:
            with open(self.filepath, 'r', encoding='utf-8') as f:
                return json.load(f)
        except (FileNotFoundError, json.JSONDecodeError):
            return default if default is not None else {}
    
    def save(self, data):
        """保存 JSON 数据"""
        self.filepath.parent.mkdir(parents=True, exist_ok=True)
        with open(self.filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

# 使用示例
storage = JSONStorage('data/config.json')
storage.save({'theme': 'dark', 'lang': 'zh'})
config = storage.load()
```

**记忆要点**：封装成类，处理文件不存在和 JSON 解析错误。`ensure_ascii=False` 支持中文，`indent=2` 格式化输出。

---

**模板13：CSV 读写与数据清洗**

```python
import csv
from pathlib import Path

def read_csv_clean(filepath):
    """读取 CSV 并进行数据清洗"""
    rows = []
    with open(filepath, 'r', encoding='utf-8-sig', newline='') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # 清洗数据：去除空白，处理空值
            cleaned = {
                k: v.strip() if v else None
                for k, v in row.items()
            }
            rows.append(cleaned)
    return rows

def write_csv(filepath, data, fieldnames):
    """写入 CSV 文件"""
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)

# 使用示例
# data = read_csv_clean('input.csv')
# write_csv('output.csv', data, ['name', 'age', 'email'])
```

**记忆要点**：使用 `DictReader`/`DictWriter` 处理表头。`utf-8-sig` 处理 Excel 导出的 BOM。`newline=''` 防止空行。

#### 函数与类设计类（7个）

**模板14：单例模式实现**

```python
# 用途：确保类只有一个实例
class Singleton:
    """单例模式 - 使用 __new__"""
    _instance = None
    
    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

# 装饰器方式
from functools import wraps

def singleton(cls):
    """单例装饰器"""
    instances = {}
    @wraps(cls)
    def wrapper(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    return wrapper

# 使用示例
@singleton
class Database:
    def __init__(self):
        self.connection = "connected"

db1 = Database()
db2 = Database()
print(db1 is db2)  # True
```

**记忆要点**：两种实现方式——`__new__` 方式和装饰器方式。装饰器方式更灵活，可以应用于任意类。

---

**模板15：工厂模式实现**

```python
# 用途：根据条件创建不同类型的对象
class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class AnimalFactory:
    """动物工厂"""
    _animals = {
        'dog': Dog,
        'cat': Cat,
    }
    
    @classmethod
    def create(cls, animal_type):
        """创建动物实例"""
        animal_class = cls._animals.get(animal_type.lower())
        if animal_class is None:
            raise ValueError(f"Unknown animal: {animal_type}")
        return animal_class()
    
    @classmethod
    def register(cls, name, animal_class):
        """注册新动物类型"""
        cls._animals[name.lower()] = animal_class

# 使用示例
dog = AnimalFactory.create('dog')
print(dog.speak())  # Woof!
```

**记忆要点**：工厂类维护一个类型注册表，通过字符串创建对应实例。支持动态注册新类型。

---

**模板16：上下文管理器类**

```python
from contextlib import contextmanager

# 用途：自定义上下文管理器，自动管理资源
class DatabaseConnection:
    """数据库连接上下文管理器"""
    def __init__(self, connection_string):
        self.connection_string = connection_string
        self.connection = None
    
    def __enter__(self):
        print(f"Connecting to {self.connection_string}")
        self.connection = f"Connection({self.connection_string})"
        return self.connection
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"Closing connection")
        self.connection = None
        # 返回 False 让异常传播，True 则抑制异常
        return False

# 装饰器方式
@contextmanager
def managed_resource(name):
    """使用装饰器创建上下文管理器"""
    print(f"Acquiring {name}")
    resource = f"Resource({name})"
    try:
        yield resource
    finally:
        print(f"Releasing {name}")

# 使用示例
with DatabaseConnection("localhost:5432") as conn:
    print(f"Using {conn}")

with managed_resource("file") as res:
    print(f"Using {res}")
```

**记忆要点**：类方式实现 `__enter__` 和 `__exit__`，装饰器方式使用 `@contextmanager` + `yield`。

---

**模板17：属性装饰器应用**

```python
# 用途：使用 @property 实现属性访问控制
class Temperature:
    """温度类 - 演示 property 用法"""
    def __init__(self, celsius=0):
        self._celsius = celsius
    
    @property
    def celsius(self):
        """获取摄氏度"""
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        """设置摄氏度，带验证"""
        if value < -273.15:
            raise ValueError("Temperature below absolute zero!")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        """华氏度 - 只读属性"""
        return self._celsius * 9/5 + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        """通过华氏度设置"""
        self.celsius = (value - 32) * 5/9

# 使用示例
t = Temperature(25)
print(t.celsius)     # 25
t.celsius = 30
print(t.fahrenheit)  # 86.0
t.fahrenheit = 100
print(t.celsius)     # 37.78
```

**记忆要点**：`@property` 将方法转为只读属性，`@name.setter` 定义 setter。可以创建计算属性。

---

**模板18：回调函数与注册机制**

```python
from typing import Callable, List

# 用途：实现事件监听和回调机制
class EventEmitter:
    """事件发射器"""
    def __init__(self):
        self._listeners: dict[str, List[Callable]] = {}
    
    def on(self, event: str, callback: Callable):
        """注册事件监听"""
        if event not in self._listeners:
            self._listeners[event] = []
        self._listeners[event].append(callback)
        return self  # 支持链式调用
    
    def off(self, event: str, callback: Callable = None):
        """取消事件监听"""
        if event in self._listeners:
            if callback is None:
                self._listeners[event].clear()
            else:
                self._listeners[event] = [
                    cb for cb in self._listeners[event] if cb != callback
                ]
    
    def emit(self, event: str, *args, **kwargs):
        """触发事件"""
        for callback in self._listeners.get(event, []):
            try:
                callback(*args, **kwargs)
            except Exception as e:
                print(f"Error in callback: {e}")

# 使用示例
emitter = EventEmitter()
emitter.on('data', lambda x: print(f"Received: {x}"))
emitter.on('error', lambda e: print(f"Error: {e}"))
emitter.emit('data', 42)
```

**记忆要点**：使用字典存储事件-回调映射，支持多个回调。`emit` 时遍历执行，做好异常隔离。

---

**模板19：函数重载模拟**

```python
from functools import singledispatch
from typing import Any

# 用途：根据参数类型执行不同逻辑
@singledispatch
def process(data):
    """默认处理函数"""
    raise NotImplementedError(f"Cannot process {type(data)}")

@process.register(int)
def _(data):
    """处理整数"""
    return f"Integer: {data}"

@process.register(str)
def _(data):
    """处理字符串"""
    return f"String: {data.upper()}"

@process.register(list)
def _(data):
    """处理列表"""
    return f"List with {len(data)} items"

# 使用示例
print(process(42))           # Integer: 42
print(process("hello"))      # String: HELLO
print(process([1, 2, 3]))    # List with 3 items
```

**记忆要点**：`functools.singledispatch` 根据第一个参数类型分派。注意装饰器需要应用于不同函数名或匿名函数。

---

**模板20：链式调用设计**

```python
# 用途：实现流畅的链式调用接口
class QueryBuilder:
    """查询构建器 - 链式调用示例"""
    def __init__(self):
        self._select = []
        self._where = []
        self._order_by = None
    
    def select(self, *columns):
        """选择列"""
        self._select.extend(columns)
        return self
    
    def where(self, condition):
        """添加条件"""
        self._where.append(condition)
        return self
    
    def order_by(self, column, desc=False):
        """排序"""
        self._order_by = f"{column} {'DESC' if desc else 'ASC'}"
        return self
    
    def build(self):
        """构建查询"""
        select_clause = ', '.join(self._select) if self._select else '*'
        where_clause = ' AND '.join(self._where) if self._where else '1=1'
        sql = f"SELECT {select_clause} FROM table WHERE {where_clause}"
        if self._order_by:
            sql += f" ORDER BY {self._order_by}"
        return sql

# 使用示例
query = (QueryBuilder()
    .select('name', 'email')
    .where('age > 18')
    .where('active = 1')
    .order_by('created_at', desc=True)
    .build())
print(query)
```

**记忆要点**：每个方法返回 `self` 实现链式调用。`build()` 或类似方法结束链式调用并返回结果。

#### 并发编程类（5个）

**模板21：线程池并行处理**

```python
from concurrent.futures import ThreadPoolExecutor, as_completed
import time

# 用途：使用线程池并行执行 I/O 密集型任务
def parallel_process(data_list, process_func, max_workers=4):
    """并行处理数据列表"""
    results = []
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        # 提交所有任务
        future_to_item = {
            executor.submit(process_func, item): item 
            for item in data_list
        }
        # 获取结果
        for future in as_completed(future_to_item):
            item = future_to_item[future]
            try:
                result = future.result()
                results.append((item, result))
            except Exception as e:
                print(f"Error processing {item}: {e}")
    return results

# 使用示例
def fetch_data(url):
    time.sleep(0.1)  # 模拟网络请求
    return f"Data from {url}"

urls = [f"https://api.example.com/{i}" for i in range(10)]
results = parallel_process(urls, fetch_data, max_workers=5)
```

**记忆要点**：`ThreadPoolExecutor` 适合 I/O 密集型任务。`as_completed` 按完成顺序获取结果。

---

**模板22：进程池并行计算**

```python
from concurrent.futures import ProcessPoolExecutor
import math

# 用途：使用进程池并行执行 CPU 密集型任务
def parallel_compute(data_chunks, compute_func, max_workers=None):
    """并行计算"""
    with ProcessPoolExecutor(max_workers=max_workers) as executor:
        results = list(executor.map(compute_func, data_chunks))
    return results

# 使用示例
def is_prime(n):
    """判断质数"""
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

numbers = [15485863, 15485867, 15485933, 15485959]
results = parallel_compute(numbers, is_prime)
print(list(zip(numbers, results)))
```

**记忆要点**：`ProcessPoolExecutor` 适合 CPU 密集型任务，绕过 GIL。`map` 保持输入输出顺序。

---

**模板23：异步 HTTP 请求**

```python
import asyncio
import aiohttp

# 用途：使用 asyncio 和 aiohttp 进行异步 HTTP 请求
async def fetch_url(session, url):
    """获取单个 URL"""
    try:
        async with session.get(url, timeout=10) as response:
            return {'url': url, 'status': response.status}
    except Exception as e:
        return {'url': url, 'error': str(e)}

async def fetch_all(urls):
    """并发获取多个 URL"""
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_url(session, url) for url in urls]
        results = await asyncio.gather(*tasks, return_exceptions=True)
        return results

# 使用示例
urls = [
    'https://httpbin.org/get',
    'https://httpbin.org/delay/1',
    'https://httpbin.org/delay/2',
]
# asyncio.run(fetch_all(urls))  # Python 3.7+
```

**记忆要点**：`aiohttp` 是异步 HTTP 的标准选择。`asyncio.gather` 并发执行多个协程。`async with` 管理会话生命周期。

---

**模板24：生产者消费者队列**

```python
import asyncio
from asyncio import Queue

# 用途：实现生产者-消费者模式
async def producer(queue: Queue, n):
    """生产者"""
    for i in range(n):
        item = f"item_{i}"
        await queue.put(item)
        print(f"Produced {item}")
        await asyncio.sleep(0.1)
    await queue.put(None)  # 结束信号

async def consumer(queue: Queue, name):
    """消费者"""
    while True:
        item = await queue.get()
        if item is None:  # 结束信号
            queue.put_nowait(None)  # 传递给其他消费者
            break
        print(f"Consumer {name} processing {item}")
        await asyncio.sleep(0.2)
        queue.task_done()

async def main():
    queue = Queue(maxsize=5)
    prod = asyncio.create_task(producer(queue, 10))
    cons1 = asyncio.create_task(consumer(queue, "A"))
    cons2 = asyncio.create_task(consumer(queue, "B"))
    await prod
    await cons1
    await cons2

# asyncio.run(main())
```

**记忆要点**：`asyncio.Queue` 用于协程间通信。`None` 作为结束信号，`task_done()` 标记任务完成。

---

**模板25：协程并发控制**

```python
import asyncio
from asyncio import Semaphore

# 用途：限制并发数量，防止资源过载
async def limited_gather(tasks, limit=5):
    """限制并发数量的 gather"""
    semaphore = Semaphore(limit)
    
    async def sem_task(task):
        async with semaphore:
            return await task
    
    return await asyncio.gather(*[sem_task(t) for t in tasks])

# 使用示例
async def fetch_with_limit(url):
    await asyncio.sleep(0.5)
    return f"Data from {url}"

async def main():
    urls = [f"https://example.com/{i}" for i in range(20)]
    tasks = [fetch_with_limit(url) for url in urls]
    results = await limited_gather(tasks, limit=5)
    return results

# asyncio.run(main())
```

**记忆要点**：`asyncio.Semaphore` 控制并发数量。包装任务函数，在其中获取信号量。

#### 实用工具类（5个）

**模板26：命令行参数解析**

```python
import argparse
import sys

def create_parser():
    """创建命令行解析器"""
    parser = argparse.ArgumentParser(
        description='示例程序',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog='''
示例:
  python script.py input.txt -o output.txt -v
  python script.py --config config.json
        '''
    )
    
    parser.add_argument('input', help='输入文件')
    parser.add_argument('-o', '--output', help='输出文件')
    parser.add_argument('-v', '--verbose', action='store_true', help='详细输出')
    parser.add_argument('-n', '--number', type=int, default=1, help='重复次数')
    parser.add_argument('--config', default='config.json', help='配置文件')
    
    return parser

def main():
    parser = create_parser()
    args = parser.parse_args()
    
    if args.verbose:
        print(f"处理 {args.input}...")
    
    # 处理逻辑
    result = f"处理结果: {args.input}"
    
    if args.output:
        with open(args.output, 'w') as f:
            f.write(result)
    else:
        print(result)

if __name__ == '__main__':
    main()
```

**记忆要点**：`argparse.ArgumentParser` 是标准库方案。使用 `type`、`default`、`action` 控制参数行为。`epilog` 添加使用示例。

---

**模板27：日志配置模板**

```python
import logging
import sys
from pathlib import Path

def setup_logging(
    name='app',
    level=logging.INFO,
    log_file=None,
    format_string=None
):
    """配置日志"""
    if format_string is None:
        format_string = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    
    logger = logging.getLogger(name)
    logger.setLevel(level)
    
    # 清除已有处理器
    logger.handlers.clear()
    
    # 控制台处理器
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setLevel(level)
    console_handler.setFormatter(logging.Formatter(format_string))
    logger.addHandler(console_handler)
    
    # 文件处理器
    if log_file:
        Path(log_file).parent.mkdir(parents=True, exist_ok=True)
        file_handler = logging.FileHandler(log_file, encoding='utf-8')
        file_handler.setLevel(level)
        file_handler.setFormatter(logging.Formatter(format_string))
        logger.addHandler(file_handler)
    
    return logger

# 使用示例
logger = setup_logging('myapp', log_file='logs/app.log')
logger.info('程序启动')
logger.warning('这是一个警告')
logger.error('发生错误')
```

**记忆要点**：配置处理器（Handler）、级别（Level）、格式（Format）。记得 `handlers.clear()` 避免重复日志。

---

**模板28：配置文件读取（YAML/INI）**

```python
import os
from pathlib import Path
from configparser import ConfigParser

try:
    import yaml
    HAS_YAML = True
except ImportError:
    HAS_YAML = False

class Config:
    """配置管理类"""
    def __init__(self, config_path=None):
        self._config = {}
        if config_path:
            self.load(config_path)
        self._load_env_overrides()
    
    def load(self, path):
        """加载配置文件"""
        path = Path(path)
        if path.suffix in ['.yaml', '.yml'] and HAS_YAML:
            with open(path, 'r', encoding='utf-8') as f:
                self._config.update(yaml.safe_load(f) or {})
        elif path.suffix == '.ini':
            parser = ConfigParser()
            parser.read(path, encoding='utf-8')
            self._config.update({s: dict(parser[s]) for s in parser.sections()})
        else:
            raise ValueError(f"Unsupported config format: {path.suffix}")
    
    def _load_env_overrides(self):
        """从环境变量加载覆盖值"""
        prefix = 'APP_'
        for key, value in os.environ.items():
            if key.startswith(prefix):
                # APP_DATABASE_HOST -> database.host
                parts = key[len(prefix):].lower().split('_')
                self._set_nested(parts, value)
    
    def _set_nested(self, keys, value):
        """设置嵌套配置值"""
        current = self._config
        for key in keys[:-1]:
            current = current.setdefault(key, {})
        current[keys[-1]] = value
    
    def get(self, key, default=None):
        """获取配置值，支持点号分隔的键"""
        keys = key.split('.')
        current = self._config
        for k in keys:
            if isinstance(current, dict) and k in current:
                current = current[k]
            else:
                return default
        return current

# 使用示例
# config = Config('config.yaml')
# db_host = config.get('database.host', 'localhost')
```

**记忆要点**：支持 YAML/INI，环境变量覆盖（`APP_` 前缀），点号分隔访问嵌套配置。

---

**模板29：简单 HTTP 服务器**

```python
from http.server import HTTPServer, BaseHTTPRequestHandler
import json
from urllib.parse import urlparse, parse_qs

class SimpleHandler(BaseHTTPRequestHandler):
    """简单 HTTP 处理器"""
    
    def log_message(self, format, *args):
        """自定义日志"""
        print(f"[{self.log_date_time_string()}] {args[0]}")
    
    def _send_json(self, data, status=200):
        """发送 JSON 响应"""
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())
    
    def do_GET(self):
        """处理 GET 请求"""
        parsed = urlparse(self.path)
        path = parsed.path
        params = parse_qs(parsed.query)
        
        if path == '/api/health':
            self._send_json({'status': 'ok'})
        elif path == '/api/hello':
            name = params.get('name', ['World'])[0]
            self._send_json({'message': f'Hello, {name}!'})
        else:
            self._send_json({'error': 'Not found'}, 404)
    
    def do_POST(self):
        """处理 POST 请求"""
        if self.path == '/api/echo':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            data = json.loads(body) if body else {}
            self._send_json({'echo': data})
        else:
            self._send_json({'error': 'Not found'}, 404)

def run_server(port=8000):
    """运行服务器"""
    server = HTTPServer(('', port), SimpleHandler)
    print(f"Server running on http://localhost:{port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down...")
        server.shutdown()

# 使用示例
# run_server(8000)
```

**记忆要点**：继承 `BaseHTTPRequestHandler`，实现 `do_GET`/`do_POST`。`urlparse` 解析 URL，`parse_qs` 解析参数。

---

**模板30：定时任务调度**

```python
import asyncio
import schedule
import time
from datetime import datetime

def job():
    """定时执行的任务"""
    print(f"[{datetime.now()}] 执行任务...")

# 使用 schedule 库
def run_scheduler():
    """运行定时任务调度器"""
    # 设置任务
    schedule.every(10).seconds.do(job)
    schedule.every().minute.at(':30').do(job)
    schedule.every().hour.do(job)
    schedule.every().day.at('10:30').do(job)
    schedule.every().monday.do(job)
    
    while True:
        schedule.run_pending()
        time.sleep(1)

# 使用 asyncio
def async_scheduler():
    """异步定时任务"""
    async def periodic_task(interval, coro):
        while True:
            await coro()
            await asyncio.sleep(interval)
    
    async def my_task():
        print(f"[{datetime.now()}] 异步任务执行")
    
    async def main():
        await asyncio.gather(
            periodic_task(5, my_task),
            # 可以添加更多任务
        )
    
    asyncio.run(main())

# 使用示例
# run_scheduler()
```

**记忆要点**：`schedule` 库适合简单定时任务，`asyncio` 适合需要并发的场景。记得在循环中 `sleep` 避免 CPU 空转。

### 6.4 常用场景完整解决方案（10个）

以下 10 个场景是完整可用的代码块（50-100行），可以直接复制使用或作为项目起点。

#### 场景1：数据处理流水线

```python
"""
数据处理流水线：读取 CSV → 清洗 → 转换 → 保存
"""
import csv
import json
from pathlib import Path
from datetime import datetime
from typing import List, Dict, Any, Callable

class DataPipeline:
    """数据处理流水线"""
    
    def __init__(self):
        self.cleaners: List[Callable] = []
        self.transformers: List[Callable] = []
    
    def add_cleaner(self, cleaner: Callable):
        """添加清洗步骤"""
        self.cleaners.append(cleaner)
        return self
    
    def add_transformer(self, transformer: Callable):
        """添加转换步骤"""
        self.transformers.append(transformer)
        return self
    
    def load_csv(self, filepath: str) -> List[Dict[str, Any]]:
        """加载 CSV 文件"""
        with open(filepath, 'r', encoding='utf-8-sig', newline='') as f:
            return list(csv.DictReader(f))
    
    def clean(self, data: List[Dict]) -> List[Dict]:
        """执行清洗"""
        for cleaner in self.cleaners:
            data = [cleaner(row) for row in data if row]
        return data
    
    def transform(self, data: List[Dict]) -> List[Dict]:
        """执行转换"""
        for transformer in self.transformers:
            data = [transformer(row) for row in data]
        return data
    
    def save_json(self, data: List[Dict], filepath: str):
        """保存为 JSON"""
        Path(filepath).parent.mkdir(parents=True, exist_ok=True)
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
    
    def run(self, input_file: str, output_file: str):
        """运行完整流水线"""
        print(f"[{datetime.now()}] 开始处理...")
        
        data = self.load_csv(input_file)
        print(f"  加载完成: {len(data)} 条记录")
        
        data = self.clean(data)
        print(f"  清洗完成: {len(data)} 条记录")
        
        data = self.transform(data)
        print(f"  转换完成")
        
        self.save_json(data, output_file)
        print(f"[{datetime.now()}] 处理完成: {output_file}")
        
        return data

# 使用示例
if __name__ == '__main__':
    # 定义清洗函数
    def remove_empty(row):
        """移除空值过多的行"""
        non_empty = sum(1 for v in row.values() if v and v.strip())
        return row if non_empty > len(row) / 2 else None
    
    def strip_whitespace(row):
        """去除字段空白"""
        return {k: v.strip() if isinstance(v, str) else v for k, v in row.items()}
    
    # 定义转换函数
    def parse_numbers(row):
        """解析数字字段"""
        if 'age' in row:
            try:
                row['age'] = int(row['age'])
            except (ValueError, TypeError):
                row['age'] = None
        return row
    
    def add_timestamp(row):
        """添加处理时间戳"""
        row['processed_at'] = datetime.now().isoformat()
        return row
    
    # 创建并运行流水线
    pipeline = (DataPipeline()
        .add_cleaner(remove_empty)
        .add_cleaner(strip_whitespace)
        .add_transformer(parse_numbers)
        .add_transformer(add_timestamp))
    
    # pipeline.run('input.csv', 'output.json')
```

#### 场景2：Web API 客户端

```python
"""
Web API 客户端：带重试、超时、日志的 HTTP 请求封装
"""
import time
import logging
from typing import Optional, Dict, Any
from urllib.parse import urljoin

try:
    import requests
    from requests.adapters import HTTPAdapter
    from urllib3.util.retry import Retry
except ImportError:
    raise ImportError("请安装 requests: pip install requests")

logger = logging.getLogger(__name__)

class APIClient:
    """带重试和错误处理的 API 客户端"""
    
    def __init__(
        self,
        base_url: str,
        api_key: Optional[str] = None,
        timeout: int = 30,
        max_retries: int = 3,
        backoff_factor: float = 0.5
    ):
        self.base_url = base_url.rstrip('/')
        self.api_key = api_key
        self.timeout = timeout
        
        # 配置 session
        self.session = requests.Session()
        
        # 设置重试策略
        retry_strategy = Retry(
            total=max_retries,
            backoff_factor=backoff_factor,
            status_forcelist=[429, 500, 502, 503, 504],
            allowed_methods=["HEAD", "GET", "OPTIONS", "POST", "PUT", "DELETE"]
        )
        adapter = HTTPAdapter(max_retries=retry_strategy)
        self.session.mount("http://", adapter)
        self.session.mount("https://", adapter)
        
        # 设置默认 headers
        self.session.headers.update({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
        if api_key:
            self.session.headers['Authorization'] = f'Bearer {api_key}'
    
    def request(
        self,
        method: str,
        endpoint: str,
        **kwargs
    ) -> Dict[str, Any]:
        """发送 HTTP 请求"""
        url = urljoin(self.base_url + '/', endpoint.lstrip('/'))
        
        # 设置超时
        kwargs.setdefault('timeout', self.timeout)
        
        start_time = time.time()
        try:
            response = self.session.request(method, url, **kwargs)
            response.raise_for_status()
            
            elapsed = time.time() - start_time
            logger.info(f"{method} {url} - {response.status_code} ({elapsed:.2f}s)")
            
            return response.json() if response.content else {}
            
        except requests.exceptions.HTTPError as e:
            logger.error(f"HTTP Error: {e}")
            raise
        except requests.exceptions.RequestException as e:
            logger.error(f"Request Error: {e}")
            raise
    
    def get(self, endpoint: str, params: Optional[Dict] = None) -> Dict:
        """GET 请求"""
        return self.request('GET', endpoint, params=params)
    
    def post(self, endpoint: str, json: Optional[Dict] = None, **kwargs) -> Dict:
        """POST 请求"""
        return self.request('POST', endpoint, json=json, **kwargs)
    
    def put(self, endpoint: str, json: Optional[Dict] = None, **kwargs) -> Dict:
        """PUT 请求"""
        return self.request('PUT', endpoint, json=json, **kwargs)
    
    def delete(self, endpoint: str, **kwargs) -> Dict:
        """DELETE 请求"""
        return self.request('DELETE', endpoint, **kwargs)

# 使用示例
if __name__ == '__main__':
    client = APIClient(
        base_url='https://api.example.com',
        api_key='your-api-key',
        timeout=30,
        max_retries=3
    )
    
    # GET 请求
    # data = client.get('/users', params={'page': 1})
    
    # POST 请求
    # result = client.post('/users', json={'name': 'Alice', 'email': 'alice@example.com'})
```

#### 场景3：数据库操作封装

```python
"""
数据库操作封装：连接池、上下文管理、CRUD 封装
"""
from contextlib import contextmanager
from typing import List, Dict, Any, Optional
import logging

try:
    import sqlite3
except ImportError:
    raise ImportError("SQLite 是标准库，应该始终可用")

logger = logging.getLogger(__name__)

class Database:
    """数据库操作封装"""
    
    def __init__(self, db_path: str = ':memory:'):
        self.db_path = db_path
        self._connection = None
    
    @property
    def connection(self):
        """获取数据库连接"""
        if self._connection is None:
            self._connection = sqlite3.connect(
                self.db_path,
                check_same_thread=False
            )
            self._connection.row_factory = sqlite3.Row
        return self._connection
    
    @contextmanager
    def transaction(self):
        """事务上下文管理器"""
        conn = self.connection
        try:
            yield conn
            conn.commit()
        except Exception as e:
            conn.rollback()
            logger.error(f"Transaction failed: {e}")
            raise
    
    def execute(
        self,
        sql: str,
        parameters: tuple = (),
        fetch: bool = False
    ) -> Optional[List[Dict]]:
        """执行 SQL"""
        with self.transaction() as conn:
            cursor = conn.execute(sql, parameters)
            if fetch:
                return [dict(row) for row in cursor.fetchall()]
            return None
    
    def fetch_one(self, sql: str, parameters: tuple = ()) -> Optional[Dict]:
        """获取单条记录"""
        with self.transaction() as conn:
            cursor = conn.execute(sql, parameters)
            row = cursor.fetchone()
            return dict(row) if row else None
    
    def fetch_all(self, sql: str, parameters: tuple = ()) -> List[Dict]:
        """获取多条记录"""
        return self.execute(sql, parameters, fetch=True) or []
    
    def insert(self, table: str, data: Dict[str, Any]) -> int:
        """插入数据"""
        columns = ', '.join(data.keys())
        placeholders = ', '.join('?' * len(data))
        sql = f"INSERT INTO {table} ({columns}) VALUES ({placeholders})"
        
        with self.transaction() as conn:
            cursor = conn.execute(sql, tuple(data.values()))
            return cursor.lastrowid
    
    def update(
        self,
        table: str,
        data: Dict[str, Any],
        where: str,
        where_params: tuple = ()
    ) -> int:
        """更新数据"""
        set_clause = ', '.join(f"{k} = ?" for k in data.keys())
        sql = f"UPDATE {table} SET {set_clause} WHERE {where}"
        
        with self.transaction() as conn:
            cursor = conn.execute(sql, tuple(data.values()) + where_params)
            return cursor.rowcount
    
    def delete(self, table: str, where: str, where_params: tuple = ()) -> int:
        """删除数据"""
        sql = f"DELETE FROM {table} WHERE {where}"
        
        with self.transaction() as conn:
            cursor = conn.execute(sql, where_params)
            return cursor.rowcount
    
    def create_table(self, table: str, schema: Dict[str, str]):
        """创建表"""
        columns = ', '.join(f"{name} {dtype}" for name, dtype in schema.items())
        sql = f"CREATE TABLE IF NOT EXISTS {table} ({columns})"
        self.execute(sql)
    
    def close(self):
        """关闭连接"""
        if self._connection:
            self._connection.close()
            self._connection = None

# 使用示例
if __name__ == '__main__':
    db = Database('example.db')
    
    # 创建表
    db.create_table('users', {
        'id': 'INTEGER PRIMARY KEY AUTOINCREMENT',
        'name': 'TEXT NOT NULL',
        'email': 'TEXT UNIQUE',
        'created_at': 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP'
    })
    
    # 插入
    user_id = db.insert('users', {'name': 'Alice', 'email': 'alice@example.com'})
    print(f"Inserted user: {user_id}")
    
    # 查询
    user = db.fetch_one('SELECT * FROM users WHERE id = ?', (user_id,))
    print(f"Found user: {user}")
    
    # 更新
    updated = db.update('users', {'name': 'Alice Smith'}, 'id = ?', (user_id,))
    print(f"Updated rows: {updated}")
    
    # 关闭
    db.close()
```

#### 场景4：配置管理系统

```python
"""
配置管理系统：多环境配置、环境变量覆盖、类型转换
"""
import os
import json
from pathlib import Path
from typing import Any, Dict, Optional, TypeVar, Type
from dataclasses import dataclass, field, asdict

T = TypeVar('T')

@dataclass
class DatabaseConfig:
    """数据库配置"""
    host: str = 'localhost'
    port: int = 5432
    username: str = 'postgres'
    password: str = ''
    database: str = 'app'
    pool_size: int = 10

@dataclass
class CacheConfig:
    """缓存配置"""
    enabled: bool = True
    ttl: int = 3600
    max_size: int = 1000

@dataclass
class AppConfig:
    """应用配置"""
    debug: bool = False
    secret_key: str = 'change-me-in-production'
    database: DatabaseConfig = field(default_factory=DatabaseConfig)
    cache: CacheConfig = field(default_factory=CacheConfig)
    allowed_hosts: list = field(default_factory=lambda: ['*'])

class ConfigManager:
    """配置管理器"""
    
    ENV_PREFIX = 'APP_'
    
    def __init__(self, config_path: Optional[str] = None, env: Optional[str] = None):
        self.env = env or os.getenv('APP_ENV', 'development')
        self.config_path = config_path or self._find_config_file()
        self._config: AppConfig = AppConfig()
        self._load()
    
    def _find_config_file(self) -> Optional[str]:
        """查找配置文件"""
        possible_paths = [
            f'config.{self.env}.json',
            'config.json',
            os.path.expanduser('~/.config/myapp/config.json'),
        ]
        for path in possible_paths:
            if Path(path).exists():
                return path
        return None
    
    def _load(self):
        """加载配置"""
        # 1. 加载配置文件
        if self.config_path and Path(self.config_path).exists():
            self._load_from_file(self.config_path)
        
        # 2. 环境特定覆盖
        env_config = f'config.{self.env}.json'
        if Path(env_config).exists():
            self._load_from_file(env_config)
        
        # 3. 环境变量覆盖
        self._load_from_env()
    
    def _load_from_file(self, path: str):
        """从文件加载配置"""
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        self._update_config(data)
    
    def _update_config(self, data: Dict[str, Any]):
        """更新配置对象"""
        for key, value in data.items():
            if hasattr(self._config, key):
                current = getattr(self._config, key)
                if isinstance(current, (DatabaseConfig, CacheConfig)):
                    for sub_key, sub_value in value.items():
                        setattr(current, sub_key, sub_value)
                else:
                    setattr(self._config, key, value)
    
    def _load_from_env(self):
        """从环境变量加载配置"""
        for key, value in os.environ.items():
            if key.startswith(self.ENV_PREFIX):
                # APP_DATABASE_HOST -> database.host
                config_key = key[len(self.ENV_PREFIX):].lower()
                self._set_nested(config_key, value)
    
    def _set_nested(self, key: str, value: str):
        """设置嵌套配置值"""
        parts = key.split('_', 1)
        if len(parts) == 2:
            section, sub_key = parts
            if hasattr(self._config, section):
                section_obj = getattr(self._config, section)
                if hasattr(section_obj, sub_key):
                    # 类型转换
                    current = getattr(section_obj, sub_key)
                    typed_value = self._convert_type(value, type(current))
                    setattr(section_obj, sub_key, typed_value)
        elif hasattr(self._config, key):
            current = getattr(self._config, key)
            typed_value = self._convert_type(value, type(current))
            setattr(self._config, key, typed_value)
    
    def _convert_type(self, value: str, target_type: Type[T]) -> T:
        """转换类型"""
        if target_type == bool:
            return value.lower() in ('true', '1', 'yes', 'on')
        if target_type == list:
            return [x.strip() for x in value.split(',')]
        if target_type == int:
            return int(value)
        if target_type == float:
            return float(value)
        return value
    
    @property
    def config(self) -> AppConfig:
        """获取配置对象"""
        return self._config
    
    def get(self, key: str, default: Any = None) -> Any:
        """通过点号分隔的键获取配置值"""
        parts = key.split('.')
        current = self._config
        for part in parts:
            if hasattr(current, part):
                current = getattr(current, part)
            else:
                return default
        return current

# 使用示例
if __name__ == '__main__':
    # 创建配置管理器
    config_mgr = ConfigManager(env='development')
    config = config_mgr.config
    
    print(f"Debug: {config.debug}")
    print(f"DB Host: {config.database.host}")
    print(f"Cache TTL: {config.cache.ttl}")
    
    # 使用 get 方法
    print(f"DB Host via get: {config_mgr.get('database.host')}")
```

#### 场景5：缓存装饰器

```python
"""
缓存装饰器：带过期时间、内存限制的装饰器
"""
import time
import functools
import threading
from collections import OrderedDict
from typing import Optional, Callable, Any
from dataclasses import dataclass, field

@dataclass
class CacheEntry:
    """缓存条目"""
    value: Any
    expires_at: float
    access_count: int = field(default=0)
    last_accessed: float = field(default_factory=time.time)

class MemoryCache:
    """内存缓存"""
    
    def __init__(
        self,
        max_size: int = 100,
        default_ttl: int = 300,
        cleanup_interval: int = 60
    ):
        self.max_size = max_size
        self.default_ttl = default_ttl
        self._cache: OrderedDict[str, CacheEntry] = OrderedDict()
        self._lock = threading.RLock()
        self._cleanup_interval = cleanup_interval
        self._last_cleanup = time.time()
    
    def get(self, key: str) -> Optional[Any]:
        """获取缓存值"""
        with self._lock:
            self._maybe_cleanup()
            
            entry = self._cache.get(key)
            if entry is None:
                return None
            
            if time.time() > entry.expires_at:
                del self._cache[key]
                return None
            
            # 更新访问信息
            entry.access_count += 1
            entry.last_accessed = time.time()
            self._cache.move_to_end(key)
            
            return entry.value
    
    def set(
        self,
        key: str,
        value: Any,
        ttl: Optional[int] = None
    ):
        """设置缓存值"""
        with self._lock:
            ttl = ttl or self.default_ttl
            expires_at = time.time() + ttl
            
            # 淘汰最久未使用的
            while len(self._cache) >= self.max_size:
                self._cache.popitem(last=False)
            
            self._cache[key] = CacheEntry(value, expires_at)
    
    def delete(self, key: str) -> bool:
        """删除缓存"""
        with self._lock:
            if key in self._cache:
                del self._cache[key]
                return True
            return False
    
    def clear(self):
        """清空缓存"""
        with self._lock:
            self._cache.clear()
    
    def _maybe_cleanup(self):
        """定期清理过期条目"""
        now = time.time()
        if now - self._last_cleanup < self._cleanup_interval:
            return
        
        expired = [
            key for key, entry in self._cache.items()
            if now > entry.expires_at
        ]
        for key in expired:
            del self._cache[key]
        
        self._last_cleanup = now
    
    def stats(self) -> dict:
        """获取统计信息"""
        with self._lock:
            return {
                'size': len(self._cache),
                'max_size': self.max_size,
                'hit_count': sum(e.access_count for e in self._cache.values())
            }

# 装饰器实现
def cached(
    cache: Optional[MemoryCache] = None,
    ttl: Optional[int] = None,
    key_func: Optional[Callable] = None
):
    """缓存装饰器"""
    _cache = cache or MemoryCache()
    
    def decorator(func: Callable) -> Callable:
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # 生成缓存键
            if key_func:
                cache_key = key_func(*args, **kwargs)
            else:
                cache_key = f"{func.__name__}:{str(args)}:{str(sorted(kwargs.items()))}"
            
            # 尝试从缓存获取
            result = _cache.get(cache_key)
            if result is not None:
                return result
            
            # 执行函数
            result = func(*args, **kwargs)
            _cache.set(cache_key, result, ttl)
            return result
        
        # 暴露缓存操作方法
        wrapper.cache = _cache
        wrapper.clear_cache = _cache.clear
        wrapper.cache_stats = _cache.stats
        
        return wrapper
    return decorator

# 使用示例
if __name__ == '__main__':
    @cached(ttl=5)
    def slow_function(n):
        """模拟耗时操作"""
        time.sleep(1)
        return n ** 2
    
    # 第一次调用（慢）
    print(slow_function(5))  # 等待 1 秒
    
    # 第二次调用（快，从缓存读取）
    print(slow_function(5))  # 立即返回
    
    print(f"Cache stats: {slow_function.cache_stats()}")
    
    # 等待缓存过期
    time.sleep(6)
    print(slow_function(5))  # 再次等待 1 秒
```

#### 场景6：命令行工具框架

```python
"""
命令行工具框架：子命令、参数解析、帮助信息
"""
import sys
import argparse
from abc import ABC, abstractmethod
from typing import List, Optional

class Command(ABC):
    """命令基类"""
    
    @property
    @abstractmethod
    def name(self) -> str:
        """命令名称"""
        pass
    
    @property
    @abstractmethod
    def description(self) -> str:
        """命令描述"""
        pass
    
    @abstractmethod
    def add_arguments(self, parser: argparse.ArgumentParser):
        """添加命令参数"""
        pass
    
    @abstractmethod
    def execute(self, args) -> int:
        """执行命令，返回退出码"""
        pass

class InitCommand(Command):
    """初始化命令"""
    
    @property
    def name(self) -> str:
        return 'init'
    
    @property
    def description(self) -> str:
        return '初始化项目'
    
    def add_arguments(self, parser: argparse.ArgumentParser):
        parser.add_argument('name', help='项目名称')
        parser.add_argument('--template', default='basic', help='项目模板')
        parser.add_argument('--force', action='store_true', help='强制覆盖')
    
    def execute(self, args) -> int:
        print(f"初始化项目: {args.name}")
        print(f"使用模板: {args.template}")
        if args.force:
            print("强制覆盖模式")
        return 0

class ServeCommand(Command):
    """启动服务命令"""
    
    @property
    def name(self) -> str:
        return 'serve'
    
    @property
    def description(self) -> str:
        return '启动开发服务器'
    
    def add_arguments(self, parser: argparse.ArgumentParser):
        parser.add_argument('-p', '--port', type=int, default=8000, help='端口号')
        parser.add_argument('-H', '--host', default='127.0.0.1', help='主机地址')
        parser.add_argument('--reload', action='store_true', help='自动重载')
    
    def execute(self, args) -> int:
        print(f"启动服务器: http://{args.host}:{args.port}")
        if args.reload:
            print("自动重载已启用")
        # 实际启动服务器的代码...
        return 0

class CLI:
    """命令行接口"""
    
    def __init__(self, name: str, version: str = '1.0.0'):
        self.name = name
        self.version = version
        self.commands: List[Command] = []
    
    def register(self, command: Command):
        """注册命令"""
        self.commands.append(command)
        return self
    
    def create_parser(self) -> argparse.ArgumentParser:
        """创建参数解析器"""
        parser = argparse.ArgumentParser(
            prog=self.name,
            description=f'{self.name} - 命令行工具',
            formatter_class=argparse.RawDescriptionHelpFormatter
        )
        parser.add_argument('-v', '--version', action='version', version=f'%(prog)s {self.version}')
        
        # 子命令
        subparsers = parser.add_subparsers(dest='command', help='可用命令')
        
        for cmd in self.commands:
            cmd_parser = subparsers.add_parser(
                cmd.name,
                help=cmd.description,
                description=cmd.description
            )
            cmd.add_arguments(cmd_parser)
        
        return parser
    
    def run(self, args: Optional[List[str]] = None) -> int:
        """运行 CLI"""
        parser = self.create_parser()
        parsed = parser.parse_args(args)
        
        if not parsed.command:
            parser.print_help()
            return 1
        
        # 找到并执行命令
        for cmd in self.commands:
            if cmd.name == parsed.command:
                try:
                    return cmd.execute(parsed)
                except Exception as e:
                    print(f"错误: {e}", file=sys.stderr)
                    return 1
        
        print(f"未知命令: {parsed.command}", file=sys.stderr)
        return 1

# 使用示例
if __name__ == '__main__':
    cli = CLI('mytool', version='1.0.0')
    cli.register(InitCommand())
    cli.register(ServeCommand())
    sys.exit(cli.run())
```

#### 场景7：多线程任务调度器

```python
"""
多线程任务调度器：任务队列、线程池、结果收集
"""
import queue
import threading
import time
from concurrent.futures import Future
from typing import Callable, Any, Optional, List
from dataclasses import dataclass
from enum import Enum

class TaskStatus(Enum):
    """任务状态"""
    PENDING = 'pending'
    RUNNING = 'running'
    COMPLETED = 'completed'
    FAILED = 'failed'

@dataclass
class Task:
    """任务"""
    id: str
    func: Callable
    args: tuple
    kwargs: dict
    future: Future
    status: TaskStatus = TaskStatus.PENDING
    result: Any = None
    error: Optional[Exception] = None

class TaskScheduler:
    """多线程任务调度器"""
    
    def __init__(self, max_workers: int = 4, queue_size: int = 100):
        self.max_workers = max_workers
        self.task_queue = queue.Queue(maxsize=queue_size)
        self.workers: List[threading.Thread] = []
        self._shutdown = False
        self._task_counter = 0
        self._lock = threading.Lock()
        
        # 启动工作线程
        self._start_workers()
    
    def _start_workers(self):
        """启动工作线程"""
        for i in range(self.max_workers):
            worker = threading.Thread(target=self._worker_loop, name=f'Worker-{i}')
            worker.daemon = True
            worker.start()
            self.workers.append(worker)
    
    def _worker_loop(self):
        """工作线程循环"""
        while not self._shutdown:
            try:
                task = self.task_queue.get(timeout=1)
                if task is None:  # 结束信号
                    break
                
                self._execute_task(task)
                self.task_queue.task_done()
            except queue.Empty:
                continue
    
    def _execute_task(self, task: Task):
        """执行任务"""
        task.status = TaskStatus.RUNNING
        try:
            result = task.func(*task.args, **task.kwargs)
            task.result = result
            task.status = TaskStatus.COMPLETED
            task.future.set_result(result)
        except Exception as e:
            task.error = e
            task.status = TaskStatus.FAILED
            task.future.set_exception(e)
    
    def submit(self, func: Callable, *args, **kwargs) -> Future:
        """提交任务"""
        with self._lock:
            self._task_counter += 1
            task_id = f"task-{self._task_counter}"
        
        future = Future()
        task = Task(
            id=task_id,
            func=func,
            args=args,
            kwargs=kwargs,
            future=future
        )
        
        self.task_queue.put(task, block=True)
        return future
    
    def map(self, func: Callable, items: List[Any]) -> List[Future]:
        """批量提交任务"""
        return [self.submit(func, item) for item in items]
    
    def shutdown(self, wait: bool = True):
        """关闭调度器"""
        self._shutdown = True
        
        # 发送结束信号
        for _ in self.workers:
            self.task_queue.put(None)
        
        if wait:
            for worker in self.workers:
                worker.join()
    
    @property
    def queue_size(self) -> int:
        """获取队列大小"""
        return self.task_queue.qsize()

# 使用示例
if __name__ == '__main__':
    def slow_task(n):
        """模拟耗时任务"""
        time.sleep(0.5)
        return n ** 2
    
    # 创建调度器
    scheduler = TaskScheduler(max_workers=3)
    
    # 提交任务
    futures = []
    for i in range(10):
        future = scheduler.submit(slow_task, i)
        futures.append((i, future))
    
    # 收集结果
    for i, future in futures:
        try:
            result = future.result(timeout=5)
            print(f"Task {i}: {result}")
        except Exception as e:
            print(f"Task {i} failed: {e}")
    
    # 关闭
    scheduler.shutdown()
```

#### 场景8：简单的 Web 服务器

```python
"""
简单的 Web 服务器：Flask/FastAPI 最小可用结构
"""

# ============ Flask 版本 ============
try:
    from flask import Flask, jsonify, request, g
    from functools import wraps
    import time
    
    flask_available = True
except ImportError:
    flask_available = False

if flask_available:
    app = Flask(__name__)
    
    # 错误处理
    @app.errorhandler(404)
    def not_found(e):
        return jsonify({'error': 'Not found'}), 404
    
    @app.errorhandler(500)
    def server_error(e):
        return jsonify({'error': 'Internal server error'}), 500
    
    # 请求日志中间件
    def log_request(f):
        @wraps(f)
        def decorated(*args, **kwargs):
            start = time.time()
            response = f(*args, **kwargs)
            duration = time.time() - start
            print(f"{request.method} {request.path} - {duration:.3f}s")
            return response
        return decorated
    
    # 健康检查
    @app.route('/health')
    def health():
        return jsonify({'status': 'ok', 'timestamp': time.time()})
    
    # REST API 示例
    users = {}
    
    @app.route('/api/users', methods=['GET'])
    @log_request
    def list_users():
        return jsonify(list(users.values()))
    
    @app.route('/api/users', methods=['POST'])
    @log_request
    def create_user():
        data = request.get_json()
        user_id = str(len(users) + 1)
        user = {
            'id': user_id,
            'name': data.get('name'),
            'email': data.get('email')
        }
        users[user_id] = user
        return jsonify(user), 201
    
    @app.route('/api/users/<user_id>', methods=['GET'])
    def get_user(user_id):
        user = users.get(user_id)
        if not user:
            return jsonify({'error': 'User not found'}), 404
        return jsonify(user)
    
    @app.route('/api/users/<user_id>', methods=['DELETE'])
    def delete_user(user_id):
        if user_id in users:
            del users[user_id]
            return '', 204
        return jsonify({'error': 'User not found'}), 404

# ============ FastAPI 版本 ============
try:
    from fastapi import FastAPI, HTTPException, Request
    from fastapi.responses import JSONResponse
    from pydantic import BaseModel
    import time
    
    fastapi_available = True
except ImportError:
    fastapi_available = False

if fastapi_available:
    fastapp = FastAPI(title='Simple API', version='1.0.0')
    
    # 中间件
    @fastapp.middleware("http")
    async def log_requests(request: Request, call_next):
        start = time.time()
        response = await call_next(request)
        duration = time.time() - start
        print(f"{request.method} {request.url.path} - {duration:.3f}s")
        return response
    
    # 数据模型
    class UserCreate(BaseModel):
        name: str
        email: str
    
    class User(BaseModel):
        id: str
        name: str
        email: str
    
    # 数据存储
    fast_users = {}
    
    # 路由
    @fastapp.get('/health')
    def health_check():
        return {'status': 'ok', 'timestamp': time.time()}
    
    @fastapp.get('/api/users', response_model=list[User])
    def list_users():
        return list(fast_users.values())
    
    @fastapp.post('/api/users', response_model=User, status_code=201)
    def create_user(user: UserCreate):
        user_id = str(len(fast_users) + 1)
        new_user = User(id=user_id, name=user.name, email=user.email)
        fast_users[user_id] = new_user
        return new_user
    
    @fastapp.get('/api/users/{user_id}', response_model=User)
    def get_user(user_id: str):
        if user_id not in fast_users:
            raise HTTPException(status_code=404, detail='User not found')
        return fast_users[user_id]
    
    @fastapp.delete('/api/users/{user_id}', status_code=204)
    def delete_user(user_id: str):
        if user_id not in fast_users:
            raise HTTPException(status_code=404, detail='User not found')
        del fast_users[user_id]
        return None

# 使用示例
if __name__ == '__main__':
    if flask_available:
        print("Flask server available")
        # app.run(debug=True, port=5000)
    
    if fastapi_available:
        print("FastAPI server available")
        # import uvicorn
        # uvicorn.run(fastapp, host='0.0.0.0', port=8000)
```

#### 场景9：数据验证与序列化

```python
"""
数据验证与序列化：Pydantic 模型定义与验证
"""
try:
    from pydantic import BaseModel, Field, validator, root_validator
    from pydantic import EmailStr, HttpUrl
    from typing import List, Optional
    from datetime import datetime
    from enum import Enum
    
    pydantic_available = True
except ImportError:
    pydantic_available = False
    print("请安装 pydantic: pip install pydantic[email]")

if pydantic_available:
    class UserRole(str, Enum):
        """用户角色"""
        ADMIN = 'admin'
        USER = 'user'
        GUEST = 'guest'
    
    class Address(BaseModel):
        """地址模型"""
        street: str = Field(..., min_length=1, max_length=100)
        city: str = Field(..., min_length=1, max_length=50)
        zip_code: str = Field(..., regex=r'^\d{5,6}$')
        country: str = Field(default='CN', min_length=2, max_length=2)
    
    class User(BaseModel):
        """用户模型"""
        id: Optional[int] = None
        username: str = Field(..., min_length=3, max_length=20, regex=r'^[a-zA-Z][a-zA-Z0-9_]*$')
        email: EmailStr
        age: int = Field(..., ge=0, le=150)
        role: UserRole = UserRole.USER
        is_active: bool = True
        addresses: List[Address] = []
        created_at: datetime = Field(default_factory=datetime.now)
        tags: List[str] = Field(default=[], max_items=10)
        
        @validator('username')
        def username_alphanumeric(cls, v):
            """验证用户名"""
            if not v[0].isalpha():
                raise ValueError('Username must start with a letter')
            return v.lower()
        
        @validator('tags', each_item=True)
        def tags_lowercase(cls, v):
            """标签转小写"""
            return v.lower()
        
        @root_validator
        def check_age_for_admin(cls, values):
            """管理员年龄检查"""
            role = values.get('role')
            age = values.get('age')
            if role == UserRole.ADMIN and age and age < 18:
                raise ValueError('Admin must be at least 18 years old')
            return values
    
    class UserUpdate(BaseModel):
        """用户更新模型"""
        email: Optional[EmailStr] = None
        age: Optional[int] = Field(None, ge=0, le=150)
        addresses: Optional[List[Address]] = None
        
        class Config:
            # 允许部分更新
            extra = 'forbid'

# 使用示例
if __name__ == '__main__' and pydantic_available:
    # 创建有效用户
    try:
        user = User(
            id=1,
            username='Alice99',
            email='alice@example.com',
            age=25,
            role=UserRole.ADMIN,
            addresses=[
                Address(street='123 Main St', city='Beijing', zip_code='100000')
            ],
            tags=['developer', 'python']
        )
        print(f"Created user: {user.json(indent=2)}")
    except Exception as e:
        print(f"Validation error: {e}")
    
    # 尝试创建无效用户
    try:
        invalid_user = User(
            username='99invalid',  # 以数字开头
            email='not-an-email',
            age=-5  # 负数年龄
        )
    except Exception as e:
        print(f"Expected validation error: {e}")
    
    # 从字典创建
    data = {
        'username': 'Bob',
        'email': 'bob@example.com',
        'age': 30
    }
    user2 = User(**data)
    print(f"User from dict: {user2.dict()}")
```

#### 场景10：自动化测试模板

```python
"""
自动化测试模板：pytest 测试结构、夹具、参数化
"""
import pytest
from typing import List, Dict
from dataclasses import dataclass

# ============ 被测试的代码 ============
@dataclass
class Calculator:
    """计算器类"""
    history: List[Dict] = None
    
    def __post_init__(self):
        if self.history is None:
            self.history = []
    
    def add(self, a: float, b: float) -> float:
        result = a + b
        self._log('add', a, b, result)
        return result
    
    def divide(self, a: float, b: float) -> float:
        if b == 0:
            raise ValueError("Cannot divide by zero")
        result = a / b
        self._log('divide', a, b, result)
        return result
    
    def _log(self, operation: str, a: float, b: float, result: float):
        self.history.append({
            'operation': operation,
            'operands': (a, b),
            'result': result
        })

def is_even(n: int) -> bool:
    """判断偶数"""
    return n % 2 == 0

# ============ 测试代码 ============

# 模块级夹具
@pytest.fixture(scope='module')
def calculator():
    """创建计算器实例"""
    return Calculator()

# 函数级夹具
@pytest.fixture
def fresh_calculator():
    """每次测试都创建新的计算器"""
    return Calculator()

# 参数化夹具
@pytest.fixture(params=[
    (1, 2, 3),
    (-1, 1, 0),
    (0, 0, 0),
    (1.5, 2.5, 4.0),
])
def add_test_case(request):
    """加法测试用例"""
    return request.param

# 基础测试
class TestCalculator:
    """计算器测试类"""
    
    def test_add(self, fresh_calculator):
        """测试加法"""
        assert fresh_calculator.add(2, 3) == 5
        assert fresh_calculator.add(-1, 1) == 0
    
    def test_divide(self, fresh_calculator):
        """测试除法"""
        assert fresh_calculator.divide(10, 2) == 5
        assert fresh_calculator.divide(3, 2) == 1.5
    
    def test_divide_by_zero(self, fresh_calculator):
        """测试除以零异常"""
        with pytest.raises(ValueError) as exc_info:
            fresh_calculator.divide(10, 0)
        assert "Cannot divide by zero" in str(exc_info.value)
    
    def test_history(self, fresh_calculator):
        """测试历史记录"""
        fresh_calculator.add(1, 2)
        fresh_calculator.add(3, 4)
        assert len(fresh_calculator.history) == 2
        assert fresh_calculator.history[0]['operation'] == 'add'
    
    # 参数化测试
    @pytest.mark.parametrize("a,b,expected", [
        (1, 2, 3),
        (-1, 1, 0),
        (0, 0, 0),
        (1.5, 2.5, 4.0),
        (-5, -5, -10),
    ])
    def test_add_parametrized(self, fresh_calculator, a, b, expected):
        """参数化测试加法"""
        assert fresh_calculator.add(a, b) == expected
    
    # 使用参数化夹具
    def test_add_with_fixture(self, fresh_calculator, add_test_case):
        """使用参数化夹具测试"""
        a, b, expected = add_test_case
        assert fresh_calculator.add(a, b) == expected

# 函数测试
class TestIsEven:
    """is_even 函数测试"""
    
    @pytest.mark.parametrize("n,expected", [
        (0, True),
        (2, True),
        (4, True),
        (1, False),
        (3, False),
        (-1, False),
        (-2, True),
    ])
    def test_is_even(self, n, expected):
        """测试偶数判断"""
        assert is_even(n) == expected

# 使用 mock 的测试
try:
    from unittest.mock import Mock, patch, MagicMock
    mock_available = True
except ImportError:
    mock_available = False

if mock_available:
    class TestWithMock:
        """使用 Mock 的测试"""
        
        def test_mock_function(self):
            """测试 mock 函数"""
            mock = Mock(return_value=42)
            assert mock() == 42
            mock.assert_called_once()
        
        @patch('builtins.open')
        def test_file_operation(self, mock_open):
            """测试文件操作"""
            mock_file = MagicMock()
            mock_file.read.return_value = 'test content'
            mock_open.return_value.__enter__.return_value = mock_file
            
            with open('test.txt') as f:
                content = f.read()
            
            assert content == 'test content'
            mock_open.assert_called_once_with('test.txt')

# 异步测试
try:
    import asyncio
    async_available = True
except ImportError:
    async_available = False

if async_available:
    @pytest.mark.asyncio
    class TestAsync:
        """异步测试"""
        
        async def test_async_operation(self):
            """测试异步操作"""
            async def async_add(a, b):
                await asyncio.sleep(0.1)
                return a + b
            
            result = await async_add(2, 3)
            assert result == 5

# 使用示例
if __name__ == '__main__':
    # 运行测试
    # pytest test_example.py -v
    # pytest test_example.py::TestCalculator -v
    # pytest test_example.py -v --tb=short
    pass
```

### 6.5 记忆训练计划（21天）

以下是具体的 21 天学习计划。每天的背诵内容 + 默写练习 + 小项目应用，确保理论与实战结合。

#### Week 1：基础概念（每天3个）

**Day 1: 数据类型相关概念**

- **背诵内容**：
  1. 列表推导式：用一行代码创建列表的简洁语法
  2. 字典推导式：用一行代码创建字典的简洁语法
  3. 集合推导式：用一行代码创建集合的简洁语法

- **默写练习**：
  - 默写三种推导式的语法格式
  - 写出 3 个每种推导式的实际例子

- **小项目应用**：
  - 读取一个文件，用列表推导式提取所有数字
  - 用字典推导式统计单词频率

---

**Day 2: 控制流与函数**

- **背诵内容**：
  1. 生成器表达式：惰性求值的迭代器创建语法
  2. Lambda 表达式：创建匿名函数的简洁语法
  3. 解包操作：将可迭代对象展开为独立元素

- **默写练习**：
  - 默写生成器表达式与列表推导式的区别
  - 默写 Lambda 的常见使用场景
  - 默写 `*` 和 `**` 解包的用法

- **小项目应用**：
  - 用 Lambda 排序一个复杂数据结构
  - 用解包操作简化函数参数传递

---

**Day 3: 数据结构操作**

- **背诵内容**：
  1. 切片操作：获取序列子集的强大语法
  2. 闭包：函数记住并访问其词法作用域的变量
  3. 迭代器协议：实现 `__iter__` 和 `__next__` 使对象可迭代

- **默写练习**：
  - 默写切片的各种用法（正序、倒序、步长）
  - 默写一个闭包函数的例子
  - 默写一个自定义迭代器类

- **小项目应用**：
  - 用切片操作实现字符串处理功能
  - 实现一个自定义的 Range 迭代器

---

**Day 4: 文件与异常**

- **背诵内容**：
  1. 上下文管理器：使用 with 自动管理资源的进入和退出
  2. 鸭子类型：不关心对象类型，只关心对象能否完成操作
  3. 可调用对象：实现 `__call__` 使实例像函数一样调用

- **默写练习**：
  - 默写 `with` 语句的执行流程
  - 默写一个自定义上下文管理器类
  - 默写一个可调用对象的例子

- **小项目应用**：
  - 实现一个支持上下文管理器的临时文件类
  - 实现一个可调用计数器

---

**Day 5: 模块与包**

- **背诵内容**：
  1. 装饰器：在不修改原函数的情况下扩展功能
  2. 生成器：使用 yield 实现惰性求值的迭代器
  3. 魔术方法：以双下划线命名的特殊方法，定义对象行为

- **默写练习**：
  - 默写一个不带参数的装饰器
  - 默写一个带参数的装饰器
  - 默写常用的魔术方法（`__init__`、`__str__`、`__len__` 等）

- **小项目应用**：
  - 实现一个计时装饰器
  - 实现一个简单的类，包含常用魔术方法

---

**Day 6: 复习与默写**

- **背诵内容**：
  - 复习 Week 1 的所有 15 个概念

- **默写练习**：
  - 不看任何资料，默写全部 15 个概念的定义和示例
  - 对照答案，标记错误和不熟悉的地方
  - 针对薄弱点重点复习

- **小项目应用**：
  - 完成一个综合练习：读取文件、处理数据、输出结果，使用本周学到的所有概念

---

**Day 7: 实战应用**

- **背诵内容**：
  - 回顾 Week 1 所有概念

- **实战项目**：
  - **项目**：实现一个日志分析工具
  - **要求**：
    - 使用列表推导式过滤日志
    - 使用字典推导式统计错误类型
    - 使用生成器读取大文件
    - 使用装饰器记录函数执行时间
    - 使用上下文管理器处理文件

---

#### Week 2：代码模板（每天4-5个）

**Day 8: 数据操作类模板（模板1-4）**

- **背诵内容**：
  - 模板1：列表去重并保持顺序
  - 模板2：字典按值排序
  - 模板3：二维列表转置
  - 模板4：查找列表最频繁元素

- **默写练习**：
  - 每个模板独立默写 3 遍
  - 理解每行代码的作用

- **小项目应用**：
  - 用这些模板处理一个实际的数据集

---

**Day 9: 数据操作类模板（模板5-8）**

- **背诵内容**：
  - 模板5：合并两个字典
  - 模板6：扁平化嵌套列表
  - 模板7：安全获取嵌套字典值
  - 模板8：实现 LRU 缓存

- **默写练习**：
  - 每个模板独立默写 3 遍
  - 特别关注 LRU 缓存的装饰器用法

- **小项目应用**：
  - 实现一个带缓存的 API 请求工具

---

**Day 10: 文件操作类模板（模板9-13）**

- **背诵内容**：
  - 模板9：读取大文件（内存安全）
  - 模板10：批量重命名文件
  - 模板11：递归遍历目录
  - 模板12：JSON 读写与异常处理
  - 模板13：CSV 读写与数据清洗

- **默写练习**：
  - 每个模板独立默写 2 遍
  - 理解异常处理的位置和方式

- **小项目应用**：
  - 实现一个文件批量处理工具

---

**Day 11: 函数与类设计类模板（模板14-17）**

- **背诵内容**：
  - 模板14：单例模式实现
  - 模板15：工厂模式实现
  - 模板16：上下文管理器类
  - 模板17：属性装饰器应用

- **默写练习**：
  - 每个模板独立默写 2 遍
  - 理解设计模式的适用场景

- **小项目应用**：
  - 实现一个简单的数据库连接池

---

**Day 12: 函数与类设计类模板（模板18-20）**

- **背诵内容**：
  - 模板18：回调函数与注册机制
  - 模板19：函数重载模拟
  - 模板20：链式调用设计

- **默写练习**：
  - 每个模板独立默写 2 遍
  - 理解事件驱动编程的思想

- **小项目应用**：
  - 实现一个简单的任务调度器

---

**Day 13: 并发编程类模板（模板21-25）**

- **背诵内容**：
  - 模板21：线程池并行处理
  - 模板22：进程池并行计算
  - 模板23：异步 HTTP 请求
  - 模板24：生产者消费者队列
  - 模板25：协程并发控制

- **默写练习**：
  - 每个模板独立默写 2 遍
  - 理解线程、进程、协程的区别和适用场景

- **小项目应用**：
  - 实现一个并发的网页抓取器

---

**Day 14: 复习与综合**

- **背诵内容**：
  - 复习全部 22 个代码模板

- **默写练习**：
  - 不看资料，默写全部模板
  - 标记不熟悉的模板，重点复习

- **小项目应用**：
  - 实现一个综合工具：文件处理 + 数据清洗 + 并发处理

---

#### Week 3：场景实战（每天1-2个场景）

**Day 15: 场景1-2**

- **场景1：数据处理流水线**
- **场景2：Web API 客户端**

- **背诵/理解**：
  - 理解代码结构和设计思路
  - 默写关键类和函数

- **实战**：
  - 运行代码，确保能正常工作
  - 修改代码以适应你的需求
  - 添加新的功能

---

**Day 16: 场景3-4**

- **场景3：数据库操作封装**
- **场景4：配置管理系统**

- **背诵/理解**：
  - 理解上下文管理器的应用
  - 理解配置的多层覆盖机制

- **实战**：
  - 将配置系统应用到之前的项目中
  - 使用数据库封装存储数据

---

**Day 17: 场景5**

- **场景5：缓存装饰器**

- **背诵/理解**：
  - 理解缓存淘汰策略
  - 理解装饰器的实现方式

- **实战**：
  - 将缓存装饰器应用到 API 客户端
  - 测试缓存命中率和性能提升

---

**Day 18: 场景6-7**

- **场景6：命令行工具框架**
- **场景7：多线程任务调度器**

- **背诵/理解**：
  - 理解命令行框架的设计模式
  - 理解任务队列的工作原理

- **实战**：
  - 为数据处理流水线添加命令行接口
  - 使用任务调度器优化并发处理

---

**Day 19: 场景8-9**

- **场景8：简单的 Web 服务器**
- **场景9：数据验证与序列化**

- **背诵/理解**：
  - 理解 REST API 的设计
  - 理解数据验证的重要性

- **实战**：
  - 运行 Flask/FastAPI 服务器
  - 为 API 添加 Pydantic 验证

---

**Day 20: 场景10**

- **场景10：自动化测试模板**

- **背诵/理解**：
  - 理解测试金字塔
  - 理解夹具、参数化、Mock 的用法

- **实战**：
  - 为之前写的代码编写测试
  - 确保测试覆盖率 > 80%

---

**Day 21: 综合项目实战**

- **项目目标**：
  - 综合运用本章学到的所有内容

- **项目要求**：
  - 一个命令行工具
  - 使用配置文件管理设置
  - 使用并发提高效率
  - 使用缓存优化性能
  - 完整的测试覆盖
  - 良好的代码结构

- **项目示例**：
  - 网页内容抓取与分析工具
  - 日志分析工具
  - 批量文件处理器
  - 数据迁移工具

### 6.6 如何验证记忆效果

记忆训练的效果需要通过实际检验来确认。以下是几种验证方法：

#### 自我测试清单

使用以下清单定期检查自己的记忆状况：

**概念层检查表**：
- [ ] 能够在 3 秒内写出任意概念的示例代码
- [ ] 能够解释概念之间的区别（如生成器 vs 迭代器）
- [ ] 能够说明概念的适用场景和不适用场景
- [ ] 能够在代码中正确识别正在使用的概念

**模板层检查表**：
- [ ] 能够在不看参考的情况下独立默写模板
- [ ] 能够根据需求选择合适的模板
- [ ] 能够根据场景修改模板（如修改参数、添加功能）
- [ ] 能够发现代码中的模板误用

**场景层检查表**：
- [ ] 能够独立搭建项目结构
- [ ] 能够快速组合多个模板解决复杂问题
- [ ] 能够在项目中正确应用设计模式
- [ ] 能够根据需求调整项目架构

#### 代码默写方法

默写是检验记忆效果的最直接方式。以下是有效的默写训练方法：

**分段默写法**：
1. 将长代码分成 3-5 个逻辑段
2. 逐段默写，确保每段完全正确
3. 最后整体默写一遍

**对比修正法**：
1. 默写完成后，立即与标准答案对比
2. 标记所有差异（包括空格、换行）
3. 分析错误原因（是没记住？还是理解错了？）
4. 重新默写，直到完全一致

**延迟测试法**：
1. 学习后等待 1 小时再默写
2. 学习后等待 1 天再默写
3. 学习后等待 1 周再默写
4. 通过率应该保持稳定（>90%）

#### 从模板到变形的训练

真正的掌握不是死记模板，而是能够灵活运用。变形训练方法：

**参数变形**：
- 原模板：列表去重
- 变形：字典去重、集合去重、自定义对象去重

**结构变形**：
- 原模板：单例模式
- 变形：有限实例模式、带参数的单例、线程安全的单例

**场景变形**：
- 原模板：LRU 缓存
- 变形：TTL 缓存、磁盘缓存、分布式缓存

每次变形训练后，要问自己：
- 这个变形还有哪些可以优化的地方？
- 这个变形的边界条件是什么？
- 这个变形与原版的核心区别在哪里？

#### 实战项目检验

最终的检验标准是能否在实际项目中运用所学。建议：

**小项目检验（1-2 天）**：
- 选择一个简单的实际问题
- 限制自己只能使用背诵过的模板
- 完成后代码 review，标记哪些地方用到了模板

**中项目检验（1 周）**：
- 参与一个真实项目或完成一个独立项目
- 刻意寻找机会应用背诵的模板
- 记录使用场景和效果

**代码审查**：
- 让他人 review 你的代码
- 特别关注模板的应用是否得当
- 听取关于代码组织结构的反馈

### 6.7 记忆技巧与注意事项

#### 间隔重复法

记忆研究告诉我们，**遗忘是有规律的**。艾宾浩斯遗忘曲线显示，新学习的内容在 20 分钟后会遗忘 42%，1 小时后遗忘 56%，1 天后遗忘 74%。对抗遗忘的最佳武器是间隔重复。

**推荐的复习间隔**：
- 第一次复习：学习后 20 分钟
- 第二次复习：学习后 1 小时
- 第三次复习：学习后 9 小时（当天睡前）
- 第四次复习：学习后 1 天
- 第五次复习：学习后 3 天
- 第六次复习：学习后 1 周
- 第七次复习：学习后 1 个月

**实践建议**：
- 使用 Anki 等间隔重复软件管理复习
- 每天安排固定的时间复习（如早晨 30 分钟）
- 复习时不仅要"看"，还要"写"

#### 理解先于记忆

**不要死记硬背你不理解的代码**。如果你不理解代码为什么这样写，即使记住了也很容易遗忘，更无法在实战中灵活运用。

**理解检查清单**：
- 这段代码解决什么问题？
- 为什么要用这种方案而不是其他方案？
- 每一行代码的作用是什么？去掉会怎样？
- 这段代码的边界条件是什么？
- 这段代码的性能特征是什么？

只有回答了这些问题，才应该开始记忆。

#### 建立概念联结

孤立的知识点很难记忆。**将新概念与已有知识建立联结**，可以大大提高记忆效率。

**联结策略**：
- **类比联结**：装饰器就像 Java 的注解、Python 的 property 就像其他语言的 getter/setter
- **对比联结**：列表推导式 vs 生成器表达式、线程 vs 进程 vs 协程
- **场景联结**：什么时候用装饰器？什么时候用上下文管理器？
- **层级联结**：基础语法 → 代码模式 → 项目结构

#### 避免死记硬背

死记硬背是最低效的记忆方式。以下是一些应该避免的做法：

**❌ 不要这样做**：
- 机械地抄写代码而不理解
- 记忆代码的字母顺序而不是逻辑结构
- 试图一次性记忆太多内容
- 只在学习时看代码，从不默写
- 从不实践，只停留在理论层面

**✅ 应该这样做**：
- 先理解再记忆
- 分块记忆，逐个攻克
- 多次默写，对比修正
- 应用到实际项目
- 定期复习，间隔重复

#### 定期复习计划

完成 21 天计划后，需要建立长期复习机制：

**每日复习（5 分钟）**：
- 随机抽取 2-3 个概念或模板默写
- 抽查昨天的薄弱点

**每周复习（30 分钟）**：
- 复习本周学习的所有内容
- 完成一个小练习

**每月复习（2 小时）**：
- 完整复习本章所有内容
- 完成一个综合项目
- 更新自己的代码模板库

**持续实践**：
- 在日常编码中有意识地应用背诵的模板
- 定期整理自己的代码片段库
- 与他人分享和交流，教学相长

---

记忆训练不是一蹴而就的事情，而是一个持续积累的过程。**坚持 21 天，你会惊讶于自己的进步；坚持 3 个月，这些代码模式将成为你思维的一部分**。编程能力的提升没有捷径，但有方法。本章提供的代码模板和训练计划，就是通往高效编程的阶梯。

**现在开始，背诵你的第一个模板吧。**

---

