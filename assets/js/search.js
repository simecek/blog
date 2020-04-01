
var documents = [{
    "id": 0,
    "url": "https://simecek.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://simecek.github.io/about/",
    "title": "About Me",
    "body": "This is a blog about machines, deoxyribonucleic acids, clouds and all my mistakes. I love R, python, shiny, ditto, docker, dplyr, ggplot2, git, jupyter, numpy, pikachu, pyspark, pytorch, ubuntu and whiscash. If you know which of those are pokemons, I love you too. For more info about me, see my personal page, LinkedIn and a list of my publications. "
    }, {
    "id": 2,
    "url": "https://simecek.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 3,
    "url": "https://simecek.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 4,
    "url": "https://simecek.github.io/2020/04/01/cases-and-deaths-per-million.html",
    "title": "COVID-19 Deaths Per Capita",
    "body": "2020/04/01 -           Deaths Per Million Of Inhabitants : Since reaching at least 1 death per million    Tip: Click (Shift+ for multiple) on countries in the legend to filter the visualization.       Last Available Total Deaths By Country:              date   Deaths per Million   Log of Deaths per Million       Country                  Albania   2020-03-31   5. 119127   1. 632984       Austria   2020-03-31   14. 652933   2. 684641       Belgium   2020-03-31   61. 683376   4. 122014       China   2020-03-31   2. 347612   0. 853399       Czechia   2020-03-31   2. 919487   1. 071408       Denmark   2020-03-31   15. 697078   2. 753475       Finland   2020-03-31   3. 077909   1. 124250       France   2020-03-31   52. 538923   3. 961554       Germany   2020-03-31   9. 438072   2. 244752       Greece   2020-03-31   4. 390770   1. 479505       Hungary   2020-03-31   1. 645827   0. 498243       Ireland   2020-03-31   14. 910775   2. 702084       Italy   2020-03-31   209. 366924   5. 344088       Netherlands   2020-03-31   61. 047415   4. 111651       Norway   2020-03-31   7. 351024   1. 994840       Portugal   2020-03-31   15. 489608   2. 740169       Romania   2020-03-31   4. 166814   1. 427152       Slovenia   2020-03-31   7. 211621   1. 975694       South Korea   2020-03-31   3. 177579   1. 156120       Spain   2020-03-31   182. 593551   5. 207263       Sweden   2020-03-31   18. 162187   2. 899342       Switzerland   2020-03-31   51. 085390   3. 933499       United Kingdom   2020-03-31   27. 092128   3. 299243       United States   2020-03-31   11. 936776   2. 479624     Appendix : Log of death per million explained for Czechia TBD "
    }, {
    "id": 5,
    "url": "https://simecek.github.io/2020/03/08/Jupyter-Notebook-on-Amazon-EC2-Virtual-Machine.html",
    "title": "Jupyter Notebook In The Cloud (Amazon EC2)",
    "body": "2020/03/08 - Motivation: If your computation needs overgrow a memory and disk size of your laptop, you need to look around for another solution: using Google Colab, running your package as a docker image elsewhere etc. Here, we will focus on one possibility - running Jupyter Notebook on a virtual machine in the cloud. Specifically, we will speak about Amazon EC2. However, with slight modifications, it applies to Google Cloud or Microsoft Azure as well. In the cloud, you can get any memory or number of CPUs you want. But because you pay for them, you want to turn your virtual machine down as much as possible. This guide should make this switching on/off process easy for you. I expect you to know AWS EC2 and Jupyter Notebook. Ideally, you already have the virtual machine running and you are looking for tricks to simplify the on/off process. Trick #1: Get Elastic IP address: Typically, the machine gets a new IP address after you restart it. This might be impractical, to avoid that you need to get a new Elastic IP and link it to your machine. Create Elastic IP: log into Amazon EC2, choose NETWORK &amp; SECURITY / Elastic IP from the left menu (you should get to the page below), click on “Allocate Elastic IP address” button, keep default parameters -&gt; click on allocate. New elastic IP appears (52. 205. 224. 57 on the page below), not yet assigned to any instance.  Link Elastic IP to your instance: Now, select your newly created Elastic IP and click on Actions button, select “Associate Address” and choose your instance. It should start working immediately (you might want to reboot the instance, just to be extra sure). Trick #2: Set a password for your Jupyter Notebook: Unless you set the password, you will need to copy a new token every time Jupyter NB restarts. Log in to your virtual machine and run jupyter notebook password (you might need to activate your environment first). Restart the Jupyter and test that it asks for the password. Trick #3: Start and stop your virtual machine from the command line: The syntax is the following: ``` aws ec2 start-instances –instance-ids “YOUR_INSTANCE_ID” aws ec2 stop-instances –instance-ids “YOUR_INSTANCE_ID” ``` I highly recommend adding these as aliases to your . bashrc file. For example, those are mine: ``` alias aws-start=’aws ec2 start-instances –instance-ids “i-0b95ee7b6dd3d4398”’ alias aws-stop=’aws ec2 stop-instances –instance-ids “i-0b95ee7b6dd3d4398”’ alias aws-info=’aws ec2 describe-instance-status –instance-ids “i-0b95ee7b6dd3d4398”’ alias aws-ssh=’ssh -i ~/. ssh/petrs. pem ubuntu@52. 205. 224. 57’ ``` Trick #4: Running Jupyter Notebook as a service: I. e. Jupyter notebook starts automatically when the instance starts. This is the most difficult part and I highly recommend reading this guide before going further. Create a file ‘jupyter. service’, this is example of mine (using pyenv environments) ``` [Unit] Description=Jupyter Notebook [Service] Type=simple PIDFile=/run/jupyter. pid ExecStart=/bin/bash -c “export PATH=\“/home/ubuntu/. pyenv/bin:$PATH\“;eval \”$(pyenv init -)\“;eval \”$(pyenv virtualenv-init -)\“;pyenv activate venv3. 6. 9;jupyter-notebook –notebook-dir=/home/ubuntu –ip=0. 0. 0. 0” User=ubuntu Group=ubuntu WorkingDirectory=/home/ubuntu Restart=always RestartSec=10 [Install] WantedBy=multi-user. target ``` Then run the following commands in the shell (on your AWS virtual machine) ``` sudo cp jupyter. service /etc/systemd/system/ sudo systemctl enable jupyter. service sudo systemctl daemon-reload sudo systemctl start jupyter. service ``` Time to pray. If everything works, your Jupyter Notebook is running and you can access it at http://YOUR_ELASTIC_IP:8888 You can also check the service as follows: ``` systemctl status jupyter. service ``` Trick #5: Shutting down the instance automatically: If you are worried that you forgot to shut down the instance, you can set up a cron job to shut it down for you. Open cron table. You need sudo privileges to shut down the machine, so the right command is sudo crontab -e Add a cron job. Add one line at the end of the file and save. I recommend switching off the machine daily (at 6pm CET) at so, my line is the following ``` 0 17 * * * /sbin/shutdown -h “now” ``` If you want to switch off the machine at a different time or only for some days of the week, see the cron documentation. If you DO NOW want the machine to stop on a given day, you can always access the table by sudo crontab -e and comment out the line (until you finish your job). "
    }, {
    "id": 6,
    "url": "https://simecek.github.io/2020/02/25/Oops,-I-did-it-again!.html",
    "title": "Oops, I did it again!",
    "body": "2020/02/25 - I have been contributing my photos to Google Maps since 2017. Until today, my pictures have collected almost two million views. Some of them make me proud: El Capitan in Yosemite National Park, streets and corners of San Francisco, all the Bay area food you can eat and capture on a camera. And what is the most popular one? Not El Captain, not the ocean, not even cosy coffee shops in Prague but… IKEA in Palo Alto (300+ thousand views).  In hindsight, it is obvious why. My Motorola X4 camera can’t compete with iPhone or Google Pixel and I am not much of a photographer. When my photo gets popular, it is because most people did not find the scene worth capturing but the place is heavily visited on Google Maps. My photo might not be nice but it is nevertheless useful. Similarly, there are pieces of my work and code, I am proud of. And other pieces that - for some reason - people keep using. Because it is not always easy to recognize them in advance, I will keep this blog as a journal of my experiments and my mistakes. The blog itself is an experiment with fastai’s fastpages. And in the process of setting it up, I accidentally send a very stupid pull request to the original repo. So, everything is going just great. "
    }, {
    "id": 7,
    "url": "https://simecek.github.io/fastpages/jupyter/2020/02/20/test.html",
    "title": "Fastpages Notebook Blog Post",
    "body": "2020/02/20 -           About This notebook is a demonstration of some of capabilities of fastpages with notebooks. With fastpages you can save your jupyter notebooks into the _notebooks folder at the root of your repository, and they will be automatically be converted to Jekyll compliant blog posts! Front Matter : Front Matter is a markdown cell at the beginning of your notebook that allows you to inject metadata into your notebook. For example: Setting toc: true will automatically generate a table of contentsSetting badges: true will automatically include GitHub and Google Colab links to your notebook. Setting comments: true will enable commenting on your blog post, powered by utterances. More details and options for front matter can be viewed on the front matter section of the README. Markdown Shortcuts : put a #hide flag at the top of any cell you want to completely hide in the docs put a #collapse flag at the top of any cell if you want to hide that cell by default, but stil have it be visible to the reader:              #collapseimport pandas as pdimport altair as alt       put a #collapse_show flag at the top of any cell if you want to show that cell by default, but give the reader the option to hide it:              #collapse_showcars = &#39;https://vega. github. io/vega-datasets/data/cars. json&#39;movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;sp500 = &#39;https://vega. github. io/vega-datasets/data/sp500. csv&#39;stocks = &#39;https://vega. github. io/vega-datasets/data/stocks. csv&#39;flights = &#39;https://vega. github. io/vega-datasets/data/flights-5k. json&#39;       Interactive Charts With Altair : Charts made with Altair remain interactive.  Example charts taken from this repo, specifically this notebook. Example 1: DropDown :       # single-value selection over [Major_Genre, MPAA_Rating] pairs# use specific hard-wired values as the initial selected valuesselection = alt. selection_single(  name=&#39;Select&#39;,  fields=[&#39;Major_Genre&#39;, &#39;MPAA_Rating&#39;],  init={&#39;Major_Genre&#39;: &#39;Drama&#39;, &#39;MPAA_Rating&#39;: &#39;R&#39;},  bind={&#39;Major_Genre&#39;: alt. binding_select(options=genres), &#39;MPAA_Rating&#39;: alt. binding_radio(options=mpaa)}) # scatter plot, modify opacity based on selectionalt. Chart(movies). mark_circle(). add_selection(  selection). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=&#39;IMDB_Rating:Q&#39;,  tooltip=&#39;Title:N&#39;,  opacity=alt. condition(selection, alt. value(0. 75), alt. value(0. 05)))    Example 2: Tooltips :       alt. Chart(movies). mark_circle(). add_selection(  alt. selection_interval(bind=&#39;scales&#39;, encodings=[&#39;x&#39;])). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=alt. Y(&#39;IMDB_Rating:Q&#39;, axis=alt. Axis(minExtent=30)), # use min extent to stabilize axis title placement  tooltip=[&#39;Title:N&#39;, &#39;Release_Date:N&#39;, &#39;IMDB_Rating:Q&#39;, &#39;Rotten_Tomatoes_Rating:Q&#39;]). properties(  width=600,  height=400)    Example 3: More Tooltips :       # select a point for which to provide details-on-demandlabel = alt. selection_single(  encodings=[&#39;x&#39;], # limit selection to x-axis value  on=&#39;mouseover&#39;, # select on mouseover events  nearest=True,  # select data point nearest the cursor  empty=&#39;none&#39;   # empty selection includes no data points)# define our base line chart of stock pricesbase = alt. Chart(). mark_line(). encode(  alt. X(&#39;date:T&#39;),  alt. Y(&#39;price:Q&#39;, scale=alt. Scale(type=&#39;log&#39;)),  alt. Color(&#39;symbol:N&#39;))alt. layer(  base, # base line chart    # add a rule mark to serve as a guide line  alt. Chart(). mark_rule(color=&#39;#aaa&#39;). encode(    x=&#39;date:T&#39;  ). transform_filter(label),    # add circle marks for selected time points, hide unselected points  base. mark_circle(). encode(    opacity=alt. condition(label, alt. value(1), alt. value(0))  ). add_selection(label),  # add white stroked text to provide a legible background for labels  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5, stroke=&#39;white&#39;, strokeWidth=2). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),  # add text labels for stock prices  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),    data=stocks). properties(  width=700,  height=400)    Data Tables : You can display tables per the usual way in your blog:       movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;df = pd. read_json(movies)# display table with pandasdf[[&#39;Title&#39;, &#39;Worldwide_Gross&#39;,   &#39;Production_Budget&#39;, &#39;IMDB_Rating&#39;]]. head()           Title   Worldwide_Gross   Production_Budget   IMDB_Rating         0   The Land Girls   146083. 0   8000000. 0   6. 1       1   First Love, Last Rites   10876. 0   300000. 0   6. 9       2   I Married a Strange Person   203134. 0   250000. 0   6. 8       3   Let's Talk About Sex   373615. 0   300000. 0   NaN       4   Slam   1087521. 0   1000000. 0   3. 4     Images : Local Images : You can reference local images and they will be copied and rendered on your blog automatically.  You can include these with the following markdown syntax: ![](my_icons/fastai_logo. png) Remote Images : Remote images can be included with the following markdown syntax: ![](https://image. flaticon. com/icons/svg/36/36686. svg) Animated Gifs : Animated Gifs work, too! ![](https://upload. wikimedia. org/wikipedia/commons/7/71/ChessPawnSpecialMoves. gif) Captions : You can include captions with markdown images like this: ![](https://www. fast. ai/images/fastai_paper/show_batch. png  Credit: https://www. fast. ai/2020/02/13/fastai-A-Layered-API-for-Deep-Learning/ ) Other Elements Tweetcards : Typing &gt; twitter: https://twitter. com/jakevdp/status/1204765621767901185?s=20 will render this:Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019 Youtube Videos : Typing &gt; youtube: https://youtu. be/XfoYk_Z5AkI will render this: Boxes / Callouts : Typing &gt; Warning: There will be no second warning! will render this:    Warning: There will be no second warning! Typing &gt; Important: Pay attention! It's important. will render this:    Important: Pay attention! It&#8217;s important. Typing &gt; Tip: This is my tip. will render this:    Tip: This is my tip. Typing &gt; Note: Take note of this. will render this:    Note: Take note of this. Typing &gt; Note: A doc link to [an example website: fast. ai](https://www. fast. ai/) should also work fine. will render in the docs:    Note: A doc link to an example website: fast. ai should also work fine. "
    }, {
    "id": 8,
    "url": "https://simecek.github.io/fastpages/markdown/2020/01/14/test-markdown-post.html",
    "title": "Example Markdown Post",
    "body": "2020/01/14 - Basic setup: Jekyll requires blog post files to be named according to the following format: YEAR-MONTH-DAY-filename. md Where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, and filename is whatever file name you choose, to remind yourself what this post is about. . md is the file extension for markdown files. The first line of the file should start with a single hash character, then a space, then your title. This is how you create a “level 1 heading” in markdown. Then you can create level 2, 3, etc headings as you wish but repeating the hash character, such as you see in the line ## File names above. Basic formatting: You can use italics, bold, code font text, and create links. Here’s a footnote 1. Here’s a horizontal rule: Lists: Here’s a list:  item 1 item 2And a numbered list:  item 1 item 2Boxes and stuff:  This is a quotation    You can include alert boxes…and…    You can include info boxesImages: Code: General preformatted text: # Do a thingdo_thing()Python code and output: # Prints '2'print(1+1)2Tables:       Column 1   Column 2         A thing   Another thing   Tweetcards: Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019Footnotes:       This is the footnote.  &#8617;    "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}