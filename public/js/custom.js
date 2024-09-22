// 这里编写自定义js脚本；将被静态引入到页面中
document.addEventListener("DOMContentLoaded", function() {
    var script = document.createElement("script");
    script.defer = true;
    script.src = "https://umami-aoikaze.vercel.app/script.js";
    script.setAttribute("data-website-id", "22e5faf2-4b71-4019-a56b-803f304b6978");
    document.head.appendChild(script);
  });
