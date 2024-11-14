'use server'

const generateInstagramEmbed = (url) => {
    const instagramUrl = new URL(url);
    const postId = instagramUrl.pathname.split('/')[2];
  
    const embedCode = `<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
    <div style="padding:16px;">
      <a href="${url}" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">      
      </a>    
    </div>
  </blockquote>
  <script async src="//www.instagram.com/embed.js"></script>`;
  
    return embedCode;
  }

  export default generateInstagramEmbed;