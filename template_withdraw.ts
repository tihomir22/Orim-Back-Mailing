export const TEMPLATE_HTML = (message: string) => {
  let messageBox = "";
  message
    .split(/\r?\n/)
    .filter((entry) => entry.length > 1)
    .forEach((entry) => {
      messageBox += `<p>${entry}</p>`;
    });
  return `
 <div>
  <div class='content'>
  ${messageBox}
  </div>
  <div class='signature'>
  <div dir="ltr" data-smartmail="gmail_signature"><div dir="ltr"><div>Orim Games Studio<br></div><div>Earn while you having fun with our amazing games!</div><div><a href="https://orimgames.com/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://orimgames.com/&amp;source=gmail&amp;ust=1669033307458000&amp;usg=AOvVaw3yzlKRIjKzQ0541Z6hDPK1">https://orimgames.com/</a></div><div><a href="https://twitter.com/OrimGames" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://twitter.com/OrimGames&amp;source=gmail&amp;ust=1669033307458000&amp;usg=AOvVaw1W3HQyunhGMJUZzzoy26HZ">https://twitter.com/OrimGames</a><br></div><div>For bussines inquiries <a href="mailto:gamesorim@gmail.com" target="_blank">gamesorim@gmail.com</a></div><div><br></div><div><img width="96" height="91" src="https://ci3.googleusercontent.com/mail-sig/AIorK4x53i98pkoIH3NNR1_-8EYYbBO2c91IXPaEGCFc7xDL5kORPpkx9oHCBUpqUBFwT3QFbVlwXwA" class="CToWUd" data-bit="iit"></div><div><font size="1" color="#000000" style="background-color:rgb(255,255,255)"><span style="font-family:Oswald,sans-serif">© Copyrights 2022&nbsp;</span><a href="https://orimgames.com/#" style="margin:0px;padding:0px;border:none;outline:none;line-height:inherit;font-family:Oswald,sans-serif" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://orimgames.com/%23&amp;source=gmail&amp;ust=1669033307458000&amp;usg=AOvVaw1ESq8Fw2_LkbBRVjhTvBCY">Orim Games</a><span style="font-family:Oswald,sans-serif">&nbsp;- All Rights Reserved</span></font><br></div></div></div>
  </div>
 </div>
`;
};
