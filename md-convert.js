/**
 * Markdown 转换规则集合
 */
function convertMarkdownToHtml(mdContent) {
    // 如果输入为空，直接返回
    if (!mdContent) return '';
    
    let htmlContent = mdContent;
    



    // 规则1: 转换图片格式
    // 匹配 markdown 图片语法 ![alt文本](图片URL)
    const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
    // 替换为 HTML 图片标签 <img src="图片URL" alt="alt文本">
    htmlContent = htmlContent.replace(imageRegex, '<img src="$2" alt="$1">');
    




    // 规则2: 转换链接格式
    // 匹配 markdown 链接语法 [链接文本](URL)
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    // 替换为 HTML 链接标签 <a href="URL">链接文本</a>
    htmlContent = htmlContent.replace(linkRegex, '<a href="$2">$1</a>');
    
    return htmlContent;
}




// 修改导出方式，改为直接暴露到全局
window.convertMarkdownToHtml = convertMarkdownToHtml;
