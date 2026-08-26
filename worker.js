import HTML_CONTENT from "./index.html";

export default {
  async fetch(request) {
    return new Response(HTML_CONTENT, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
}
