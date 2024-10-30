import os
import json

def generate_nav_json():
    # 获取当前文件夹下的 archive 目录
    archive_path = 'archive'
    nav_items = []
    
    # 确保 archive 文件夹存在
    if not os.path.exists(archive_path):
        print("Error: archive 文件夹不存在")
        return
    
    # 遍历 archive 文件夹中的所有文件
    for filename in os.listdir(archive_path):
        if filename.endswith('.md'):
            # 创建每个文件的导航项
            nav_item = {
                "title": os.path.splitext(filename)[0],  # 移除 .md 后缀
                "path": f"archive/{filename}"
            }
            nav_items.append(nav_item)
    
    # 按标题字母顺序排序
    nav_items.sort(key=lambda x: x['title'])
    
    # 写入 nav.json 文件
    with open('nav.json', 'w', encoding='utf-8') as f:
        json.dump(nav_items, f, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    generate_nav_json()