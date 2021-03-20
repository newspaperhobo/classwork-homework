let missingHomeworks = Number(prompt(`Go to the sidebar in Moodle, and click "Grades." 

Count how many assignments under the "Course Project" and "Homework" sections have a score of "Keep Working" or "Past Due." 

Enter that number below. 

If you aren't missing anything, write 0 below.`));

let questionsAboutThisUnit = prompt(`Do you have any questions about Unit 4.2: Decision Making that you'd like Sonia or Melissa to answer? Type yes or no below.`);

let ppSitemap = prompt(`Have you finished making a sitemap for your personal project? Type yes or no below.`);

let ppWireframes = prompt(`Have you finished making wireframes for your personal project? Type yes or no below.`);

let link = `<a href="https://codesquad.moodlecloud.com/mod/page/view.php?id=1704" target="_blank"> Find resources for sitemapping and wireframing here.</a>`;

if (missingHomeworks > 0) {
    document.getElementById('liOne').innerHTML = "Start with the earliest assignment that you have a Keep Working or Past Due grade for in Moodle. Do the assignment and resubmit it in Moodle. Complete as many Keep Working and Past Due assignments as you can today.";
} else {
    document.getElementById('liOne').innerHTML = "Congratulations on being caught up on homework. We appreciate your effort! Continue to the next to-do list item.";
}

if (questionsAboutThisUnit == "yes" || questionsAboutThisUnit === "Yes" || questionsAboutThisUnit == "y" || questionsAboutThisUnit == "Y") {
    document.getElementById('liTwo').innerHTML = "Message Sonia or Melissa your question about Unit 4.2 or request a breakout room with either of them to answer your question.";
} else {
    document.getElementById('liTwo').innerHTML = "It seems like you don't have any questions about Unit 4.2 at this time. Continue to the next to-do list item.";
}

if (ppSitemap == "no" || ppSitemap === "No" || ppSitemap == "n" || ppSitemap == "N") {
    document.getElementById('liThree').innerHTML = "Start mapping out the pages on your personal project website with a sitemap." + link;
} else {
    document.getElementById('liThree').innerHTML = "Woah! You're a rockstar! Move on to the next step. Continue to the next to-do list item.";
}

if (ppWireframes == "no" || ppWireframes === "No" || ppWireframes == "n" || ppWireframes == "N") {
    document.getElementById('liFour').innerHTML = "Start planning out the visual layouts for all the pages that will be a part of your personal project." + link;
} else {
    document.getElementById('liFour').innerHTML = "Holy crap! Share your web design ways with us all! Continue to the next to-do list item.";
}


if (missingHomeworks > 0) {
    console.log(`You'll be working on catching up on missing work today.`);
} else if (ppSitemap === "not done") {
    console.log(`You'll be working on making the sitemap for your personal project today.`);
} else if (ppWireframes === "not done") {
    console.log(`You'll be working on making wireframes for your personal project today.`);    
} else {
    console.log(`You'll be working on building out the front end of your personal project today.`);
};

if (questionsAboutThisUnit > 0) {
    console.log(`Ask Sonia or Melissa your question when time allows.`);
};

