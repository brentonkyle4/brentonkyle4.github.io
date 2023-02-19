

        let tester = "https://www.reddit.com/r/" + "Threesome" + "/top.json";

        fetch(tester)
        .then(response => response.json())
        .then(data => {
          const posts = data.data.children;
          for (let i = 0; i < 30; i++) {
            const post = posts[i].data;

            const postEl = document.createElement("div");
            postEl.classList.add("post");

            let mediaLink = "";
            let height = 0;
            let width = 0;

            

            if (post.url.includes("imgur"))
            {
              mediaLink = "https://imgur.com/" + post.url.slice(20, 27) + "/embed";

              /*width = post.preview.reddit_video_preview.width;
              width = width / 500;
              height = post.preview.reddit_video_preview.height;
              height = (height * width) + 100;*/

              postEl.innerHTML = `
              <div class="letter">
              <div style="position:relative; display:block; width: 318px;">
              <iframe width="318px" height="auto"
                src="${mediaLink}"
                frameborder="0" allowfullscreen="" scrolling="no" style="min-height: 1000px;"> 
              </iframe>
            </div>
                </div>
              `;
              

              document.querySelector(".posts").appendChild(postEl);
            }
            else if (post.url.includes("redd.it"))
            {
              mediaLink = post.url;

              if (post.is_video == false)
              {
                postEl.innerHTML = `
                <div class="letter">
                    <div>
                        <img src="${mediaLink}" class="reddit-card">
                    </div>      
                </div>
                `;
              }
              else
              {
                postEl.innerHTML = `
                <div class="letter">
                    <div>
                        <video autoplay loop class="reddit-card">
                            <source src="${mediaLink}">
                        </video>
                    </div>     
                </div>
                `;
              }

              document.querySelector(".posts").appendChild(postEl);
            }
            else if (post.url.includes("redgifs"))
            {
              mediaLink = post.url;

              width = post.preview.reddit_video_preview.width;
              width = width / 500;
              height = post.preview.reddit_video_preview.height;
              height = (height / width);

              postEl.innerHTML = `
              <div class="letter">
                  <div style="position:relative; display:block; width: 100%; height: 600px">
                <iframe width="100%" height="100%"
                  src="${mediaLink}"
                  frameborder="0" allowfullscreen="" scrolling="no" style="position:absolute; top:0; left:0; border:none">
                </iframe>
              </div>
              </div>
              `;

              document.querySelector(".posts").appendChild(postEl);
            }
          }
        });