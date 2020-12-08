var score;
var question;
function updateyes() {
    score = score + 5;
    loading();
}

function updateno() {
    loading();
}

function ClearDoc () {
    document.open ();
    document.close ();
}

function next() {
    if (question == 1) { 
        document.write('<button onclick="firstc()">Next</button>');}
    if (question == 2) { 
        document.write('<button onclick="secondc()">Next</button>');}
    if (question == 3) { 
        document.write('<button onclick="thirdc()">Next</button>');}
    if (question == 4) { 
        document.write('<button onclick="fourthc()">Next</button>');}
    if (question == 5) { 
        document.write('<button onclick="fifthc()">Next</button>');}
    if (question == 6) { 
        document.write('<button onclick="sixthc()">Next</button>');}
    if (question == 7) { 
        document.write('<button onclick="seventhc()">Next</button>');}
    if (question == 8) { 
        document.write('<button onclick="eighthc()">Next</button>');}
    if (question == 9) { 
        document.write('<button onclick="ninthc()">Next</button>');}
    if (question == 10) { 
        document.write('<button onclick="tenthc()">Next</button>');}
    if (question == 11) { 
        document.write('<button onclick="eleventhc()">Next</button>');}
    if (question == 12) { 
        document.write('<button onclick="twelfthc()">Next</button>');}
    if (question == 13) { 
        document.write('<button onclick="thirteenthc()">Next</button>');}
    if (question == 14) { 
        document.write('<button onclick="fourteenthc()">Next</button>');}
    if (question == 15) { 
        document.write('<button onclick="fifteenthc()">Next</button>');}
    if (question == 16) { 
        document.write('<button onclick="sixteenthc()">Next</button>');}
    if (question == 17) { 
        document.write('<button onclick="seventeenthc()">Next</button>');}
    if (question == 18) { 
        document.write('<button onclick="eighteenthc()">Next</button>');}
    if (question == 19) { 
        document.write('<button onclick="nineteenthc()">Next</button>');}
    if (question == 20) { 
        document.write('<button onclick="twentiethc()">Next</button>');}
}

function loading() {
    ClearDoc();
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>');
    document.write('        <body>');
    if (question == 1) { 
        document.write('<img src="first.gif" class="logo"><br>');
        document.write('<div><p>If a video is using a popular sound or trend, it is likely that many people will enjoy the video and it is worth recommending to new users.</p></div>'); 
        }
    if (question == 2) { 
        document.write('<img src="second.gif" class="logo"><br>');
        document.write('<div><p>Because many of the most popular videos, made by the most popular creators, are of trending dances, videos with this type of content will be boosted and are worth recommending to new users.</p></div>'); 
        }
    if (question == 3) { 
        document.write('<img src="third.gif" class="logo"><br>');
        document.write('<div><p>Popular music will be captivating to a majority of users, so it is likely that the video will be attractive and it is worth recommending to new users.</p></div>'); 
        }
    if (question == 4) { 
        document.write('<img src="fourth.gif" class="logo"><br>');
        document.write('<div><p>Comedic videos do well because they are entertaining to many users. Especially when a comedic video uses a popular "meme" sound or format, it is likely that many will enjoy the video and it is worth recommending to new users.</p></div>'); 
        }
    if (question == 5) { 
        document.write('<img src="fifth.gif" class="logo"><br>');
        document.write('<div><p>If a previous version of the video has already found success, a remade version with better quality and more attractive attributes will likely be enjoyed by many users. Such recycled content is often worth recommending to new users.</p></div>'); 
        }
    if (question == 6) { 
        document.write('<img src="sixth.gif" class="logo"><br>');
        document.write('<div><p>When the main character is the focus of a video, a good environment makes it more attractive to users, thus making the video worth recommending to new users.</p></div>'); 
        }
    if (question == 7) { 
        document.write('<img src="seventh.gif" class="logo"><br>');
        document.write('<div><p>The better quality a video is, the more entertaining and pleasurable it is to watch. Videos with good lighting are more likely to be liked by many and are worth recommending to new users.</p></div>'); 
        }
    if (question == 8) { 
        document.write('<img src="eighth.gif" class="logo"><br>');
        document.write('<div><p>The better quality a video is, the more entertaining and pleasurable it is to watch. If a video has a good resolution, it is worth recommending to new users.</p></div>'); 
        }
    if (question == 9) { 
        document.write('<img src="ninth.gif" class="logo"><br>');
        document.write("<div><p>When the main character of the video is the focus, if the character's appearance is good, the video will be more attractive, and thus worth recommending to new users.</p></div>"); 
        }
    if (question == 10) { 
        document.write('<img src="tenth.gif" class="logo"><br>');
        document.write('<div><p>If the main character is the focus of the video, the video will be most likely to be liked by other users if the main character is attractive and beautiful. If the character does not look alluring and beautiful as defined by social standards, the video is not worth recommending to new users.</p></div>'); 
        }
    if (question == 11) { 
        document.write('<img src="eleventh.gif" class="logo"><br>');
        document.write("<div><p>Users are most likely to like videos depicting characters and lifestyles that are beautiful, attractive, and enticing. Videos made by creators with many resources that show extravagant lifestyles and elicit positive aspirational feelings are more likely to be liked by users and are worth recommending to new users.</p></div>"); 
        }
    if (question == 12) { 
        document.write('<img src="twelfth.gif" class="logo"><br>');
        document.write('<div><p>Most popular videos are of young people and most users are also less than 34 years old. Thus, videos featuring characters that are not young are not likely to be appealing to most users and are not worth recommending to new users.</p></div>'); 
        }
    if (question == 13) { 
        document.write('<img src="thirteenth.gif" class="logo"><br>');
        document.write('<div><p>Users are more likely to like videos featuring characters that they can relate to, which often means videos with characters of the same race. As users will have more creators of the same race as them on their FYP, those creators of the minority race/ethnicity are less likely to be boosted, and their videos are not worth recommending to new users.</p></div>'); 
        }
    if (question == 14) { 
        document.write('<img src="fourteenth.gif" class="logo"><br>');
        document.write('<div><p>Videos that are most popular are entertaining, captivating, and amusing. If your videos are not aimed at evoking pleasurable emotions in users and instead may trigger distress in users, they are less likely to be liked by users and are not worth recommending to new users.</p></div>'); 
        }
    if (question == 15) { 
        document.write('<img src="fifteenth.gif" class="logo"><br>');
        document.write("<div><p>Users are most likely to like videos that have visually appealing content. Videos that have the main character as the focus will be most attractive to users if the character's appearance is good. Videos where the character goes against social norms by presenting a body type that is not socially acceptable are not worth recommending to new users.</p></div>"); 
        }
    if (question == 16) { 
        document.write('<img src="sixteenth.gif" class="logo"><br>');
        document.write('<div><p>Users can be expected to like videos that are not only entertaining and attractive, but also agreeable and validating. Because political content is polarizing and can be upsetting to some users, political videos that are not favorable to the majority are less likely to be liked by users and are not worth recommending to new users.</p></div>'); 
        }
    if (question == 17) { 
        document.write('<img src="seventeenth.gif" class="logo"><br>');
        document.write('<div><p>Users are more likely to like videos that are entertaining and attractive, which often include characters that they can relate to or are attracted to. Creators of such a unique identity are not likely to appeal to a majority of users, and thus are less likely to be boosted and their videos are not worth recommending to new users.</p></div>'); 
        }
    if (question == 18) { 
        document.write('<img src="eighteenth.gif" class="logo"><br>');
        document.write('<div><p>Users usually like videos that are entertaining and not too thought-provoking. Content that is not patriotic will probably distress users of the same country, and will not be acceptable to those in power in that country, thus these videos are not worth recommending to new users.</p></div>'); 
        }
    if (question == 19) { 
        document.write('<img src="nineteenth.gif" class="logo"><br>');
        document.write('<div><p>If the main character is the focus of the video, the video will be most likely to be liked by other users if the main character is appealing and relatable. If the character does not look normal or conventionally attractive, the video is less likely to be liked, and the video is not worth recommending.</p></div>'); 
        }
    if (question == 20) { 
        document.write('<img src="twentieth.gif" id="last"><br>');
        document.write("<div><p>Videos that go viral are entirely dependent user interactions. A creator becomes famous due to numerous popular videos with millions of views and likes. If the content of a creator's videos are entertaining, captivating, attractive, beautiful, and appeal to the majority, their videos are worth recommending.</p></div>"); 
        }

    setTimeout(next, 1); 
    document.write('        </body>');
    document.write('    </html>');
}

function intro() {
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('         <body class="question">');
    document.write('            <p>What is the FYP (For You Page) algorithm?</p>');
    document.write("            <p>\"When you open TikTok and land in your For You feed, you're presented with a stream of videos curated to your interests, making it easy to find content and creators you love. This feed is powered by a recommendation system that delivers content to each user that is likely to be of interest to that particular user. Part of the magic of TikTok is that there's no one For You feed – while different people may come upon some of the same standout videos, each person's feed is unique and tailored to that specific individual.\"</p>");
    document.write('            <p>Can the FYP help you get famous?</p>');
    document.write('            <button onclick="start()">Begin</button>');
    document.write('        </body>');
    document.write('    </html>');
}

function start() {
    ClearDoc();
    score = 0;
    question = 1;
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('         <body class="question">');
    document.write('            <p>Will you make videos following trends?</p>');
    document.write('            <button onclick="updateyes()">Yes</button>');
    document.write('            <button onclick="updateno()">No</button>');
    document.write('        </body>');
    document.write('    </html>');

}

function firstc() {
    ClearDoc();
    question = 2;
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('            <p>Will you make dancing videos?</p>');
    document.write('            <button onclick="updateyes()">Yes</button>');
    document.write('            <button onclick="updateno()">No</button>');
    document.write('        </body>');
    document.write('    </html>');
}

function secondc() {
    ClearDoc();
    question = 3;
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('            <p>Will your videos feature mainstream popular music?</p>');
    document.write('            <button onclick="updateyes()">Yes</button>');
    document.write('            <button onclick="updateno()">No</button>');
    document.write('        </body>');
    document.write('    </html>');
}

function thirdc() {
    ClearDoc();
    question = 4;
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('            <p>Will your videos be comedic or funny?</p>');
    document.write('            <button onclick="updateyes()">Yes</button>');
    document.write('            <button onclick="updateno()">No</button>');
    document.write('        </body>');
    document.write('    </html>');
}

function fourthc() {
    ClearDoc();
    question = 5;
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write("            <p>Will you remake other people's videos that have done well?</p>");
    document.write('            <button onclick="updateyes()">Yes</button>');
    document.write('            <button onclick="updateno()">No</button>');
    document.write('        </body>');
    document.write('    </html>');
}

function fifthc() {
    ClearDoc();
    question = 6;
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('            <p>Will you shoot your videos in a captivating environment, like a well-decorated room, a beautiful backdrop, or a large mansion?</p>');
    document.write('            <button onclick="updateyes()">Yes</button>');
    document.write('            <button onclick="updateno()">No</button>');
    document.write('        </body>');
    document.write('    </html>');
}

function sixthc() {
    ClearDoc();
    question = 7;
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('            <p>Will your videos be well-lit, with close to professional lighting?</p>');
    document.write('            <button onclick="updateyes()">Yes</button>');
    document.write('            <button onclick="updateno()">No</button>');
    document.write('        </body>');
    document.write('    </html>');
}

function seventhc() {
    ClearDoc();
    question = 8;
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('            <p>Will your videos have HD quality?</p>');
    document.write('            <button onclick="updateyes()">Yes</button>');
    document.write('            <button onclick="updateno()">No</button>');
    document.write('        </body>');
    document.write('    </html>');
}

function eighthc() {
    ClearDoc();
    question = 9;
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('           <p>Will you be dressed in fashionable, flattering clothes in your videos?</p>');
    document.write('            <button onclick="updateyes()">Yes</button>');
    document.write('           <button onclick="updateno()">No</button>');
    document.write('       </body>');
    document.write('   </html>');
}

function ninthc() {
    ClearDoc();
    question = 10;
    document.write('   <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('       <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('           <p>Are you good-looking according to social beauty standards?</p>');
    document.write('           <button onclick="updateyes()">Yes</button>');
    document.write('         <button onclick="updateno()">No</button>');
    document.write('     </body>');
    document.write('  </html>');
}

function tenthc() {
    ClearDoc();
    question = 11;
    document.write('   <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('       <script src = "quiz1.js"></script>');
    document.write('       <body class=question>');
    document.write('           <p>Are you very successful, rich or famous?</p>');
    document.write('           <button onclick="updateyes()">Yes</button>');
    document.write('           <button onclick="updateno()">No</button>');
    document.write('       </body>');
    document.write('   </html>');
}

function eleventhc() {
    ClearDoc();
    question = 12;
    document.write('   <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('       <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('           <p>Are you young/youthful? Are you less than 34 years old?</p>');
    document.write('           <button onclick="updateyes()">Yes</button>');
    document.write('           <button onclick="updateno()">No</button>');
    document.write('       </body>');
    document.write('   </html>');
}

function twelfthc() {
    ClearDoc();
    question = 13;
    document.write('   <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('       <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('           <p>Are you a member of the majority race/ethnicity in your country?</p>');
    document.write('            <button onclick="updateyes()">Yes</button>');
    document.write('           <button onclick="updateno()">No</button>');
    document.write('       </body>');
    document.write('   </html>');
}

function thirteenthc() {
    ClearDoc();
    question = 14;
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('            <p>Are you going to make videos raising awareness about unpleasant issues?</p>');
    document.write('            <button onclick="updateno()">Yes</button>');
    document.write('            <button onclick="updateyes()">No</button>');
    document.write('        </body>');
    document.write('    </html>');
}

function fourteenthc() {
    ClearDoc();
    question = 15;
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('            <p>Do you have the most socially acceptable, desirable, and attractive body type?</p>');
    document.write('            <button onclick="updateyes()">Yes</button>');
    document.write('            <button onclick="updateno()">No</button>');
    document.write('        </body>');
    document.write('    </html>');
}

function fifteenthc() {
    ClearDoc();
    question = 16;
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('            <p>Are you going to make videos with a political stance?</p>');
    document.write('            <button onclick="updateno()">Yes</button>');
    document.write('            <button onclick="updateyes()">No</button>');
    document.write('        </body>');
    document.write('    </html>');
}

function sixteenthc() {
    ClearDoc();
    question = 17;
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('            <p>Are you of an uncommon sexual orientation or gender identity that goes against social norms?</p>');
    document.write('            <button onclick="updateno()">Yes</button>');
    document.write('            <button onclick="updateyes()">No</button>');
    document.write('        </body>');
    document.write('    </html>');
}

function seventeenthc() {
    ClearDoc();
    question = 18;
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('            <p>Are you going to make videos in which you speak out against the government of your country?</p>');
    document.write('            <button onclick="updateno()">Yes</button>');
    document.write('            <button onclick="updateyes()">No</button>');
    document.write('        </body>');
    document.write('    </html>');
}

function eighteenthc() {
    ClearDoc();
    question = 19;
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('            <p>Are you disabled, have any bodily deformities that present visually, or otherwise present atypically?</p>');
    document.write('            <button onclick="updateno()">Yes</button>');
    document.write('            <button onclick="updateyes()">No</button>');
    document.write('        </body>');
    document.write('    </html>');
}

function nineteenthc() {
    ClearDoc();
    question = 20;
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('        <body class="question">');
    document.write('            <p>Do you want to be TikTok famous?</p>');
    document.write('            <button onclick="updateyes()">Yes</button>');
    document.write('            <button onclick="updateno()">No</button>');
    document.write('        </body>');
    document.write('    </html>');
}

function twentiethc() {
    ClearDoc();
    document.write('    <html>');
    document.write('        <head><link rel="stylesheet" href="styling.css"></head>')
    document.write('        <script src = "quiz1.js"></script>');
    document.write('        <body>');
    document.write('            <button onclick="results()">See Results</button>');
    document.write('            <p id="result"></p>');
    document.write('            <button onclick="start()">Try Again</button>');
    document.write('    </html>');
}

var time;
var count = 5;
var count2 = 0;
var which = 0;

function results() {
    if (count == 5) {
        glitch(1);
        count2++;
        if (count2 == 50) { count = 0; }
    }
    else if (count2 == 50) {
        glitch(0);
        count++;
        if (count == 5) { count2 = 0; }
    }
    document.getElementById("result").innerHTML = 'You are ' + score + '% likely to be TikTok famous)';
    setTimeout(anyone, time);
}

function glitch(which2) {
    if (which2 == 1) {
        time = Math.random()*10;
    }
    else if (which2 == 0) {
        time = Math.random();
        time = 1000 + (1000 * time);
    }
}

function anyone() {
    if (count == 5) {
        glitch(1);
        count2++;
        if (count2 == 50) { count = 0; }
    }
    else if (count2 == 50) {
        glitch(0);
        count++;
        if (count == 5) { count2 = 0; }
    }
    document.getElementById("result").innerHTML = 'ANYONE CAN BE TIKTOK FAMOUS.';
    setTimeout(results, time);
}