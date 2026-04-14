#!/bin/bash
# Whitenote 备份脚本
# 备份内容到本地归档目录

set -e

SITE_NAME="whitenote"
SOURCE_DIR="/root/.openclaw/workspace/${SITE_NAME}"
BACKUP_DIR="/root/.openclaw/backups/${SITE_NAME}"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_NAME="${SITE_NAME}_${DATE}"

echo "📦 开始备份 ${SITE_NAME}..."
echo "   时间: $(date)"

# 创建备份目录
mkdir -p "${BACKUP_DIR}"

# 创建压缩包
cd "$(dirname ${SOURCE_DIR})"
tar -czf "${BACKUP_DIR}/${BACKUP_NAME}.tar.gz" \
  --exclude='node_modules' \
  --exclude='.vitepress/cache' \
  --exclude='.vitepress/.temp' \
  --exclude='.git/objects' \
  --exclude='.tmp' \
  "${SITE_NAME}/"

# 生成备份清单
echo "{
  \"timestamp\": \"${DATE}\",
  \"source\": \"${SOURCE_DIR}\",
  \"backup_file\": \"${BACKUP_NAME}.tar.gz\",
  \"size\": $(stat -c%s "${BACKUP_DIR}/${BACKUP_NAME}.tar.gz" 2>/dev/null || echo 0)
}" > "${BACKUP_DIR}/${BACKUP_NAME}.json"

# 清理旧备份（保留最近 10 个）
cd "${BACKUP_DIR}"
ls -t *.tar.gz | tail -n +11 | xargs -r rm -f
ls -t *.json | tail -n +11 | xargs -r rm -f

echo "✅ 备份完成: ${BACKUP_NAME}.tar.gz"
echo "📁 位置: ${BACKUP_DIR}"
echo "📊 保留备份数: $(ls *.tar.gz 2>/dev/null | wc -l)"
