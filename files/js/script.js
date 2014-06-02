(function(window,$) {

	/* =======================================================================
	Constructer
	========================================================================== */
	$(document).ready(function(){

		showArticle();
        load_article();
		return false;

	});

    function load_article(){
        var newses = [
"A1001120120701M009-13-007.json",
"A1001120120701M009-13-008.json",
"A1001120120701M037-13-004.json",
"A1001120120702M001-14-011.json",
"A1001120120702M008-12-003.json",
"A1001120120702M008-12-005.json",
"A1001120120703E009204-001.json",
"A1001120120703M001-14-011.json",
"A1001120120703M016-12-002.json",
"A1001120120703M016-12-005.json",
"A1001120120704E007204-001.json",
"A1001120120704M001-14-012.json",
"A1001120120704M014-12-002.json",
"A1001120120704M014-12-006.json",
"A1001120120704MIGA-2A-003.json",
"A1001120120705M001-14-009.json",
"A1001120120705M014-13-004.json",
"A1001120120705M014-13-006.json",
"A1001120120705M014-13-007.json",
"A1001120120705MIGA-2A-007.json",
"A1001120120706M001-14-018.json",
"A1001120120706M014-14-002.json",
"A1001120120706M014-14-006.json",
"A1001120120707M001-14-010.json",
"A1001120120707M014-13-002.json",
"A1001120120707M014-13-006.json",
"A1001120120708M001-14-011.json",
"A1001120120708M009-12-005.json",
"A1001120120708M009-12-006.json",
"A1001120120709E002204-002.json",
"A1001120120710M001-14-008.json",
"A1001120120710M014-12-002.json",
"A1001120120710M014-12-005.json",
"A1001120120711M001-14T012.json",
"A1001120120711M014-13-002.json",
"A1001120120711M014-13-006.json",
"A1001120120712M001-14-011.json",
"A1001120120712M005-14-003.json",
"A1001120120712M012-12-002.json",
"A1001120120712M012-12-004.json",
"A1001120120712M012-12-006.json",
"A1001120120713M001-14-011.json",
"A1001120120713M016-13-006.json",
"A1001120120713M016-13-007.json"
            ];

        var index = Math.floor(Math.random()*10);
        var news_id = newses[index];

        $.ajax({
            url: "/json/" + news_id,
            data: location.search,
            dataType: "json",
            type: "GET",
            success: function(data, textStatus, xhr) {
		        var parent = $("#selectTitle");
                var title = parent.find('li');
                title.text(data['title']);

		        var parent = $("#article");
                var title = parent.find('dt');
                title.text(data['title']);

                var text = parent.find('dd.text');
                var news_text = data["text"].substring(0, 140) + ' ...';
                text.text(news_text);

                var url = parent.find('dd.url');
                url.text("http://www.asahi.com/articles/ASG5M65P2G5MUUPI00W.htmh");


                var chara = $("#character img");
                chara[0].src = "files/img/" + data["emotion"] + ".png";
            }
        });

        var index = Math.floor(Math.random()*10);
        var news_id = newses[index];

        $.ajax({
            url: "/json/" + news_id,
            data: location.search,
            dataType: "json",
            type: "GET",
            success: function(data, textStatus, xhr) {
		        var parent = $("#selectTitle");
                var title = parent.find('li').last();
                title.text(data['title']);

		        var parent = $("#article");
                var title = parent.find('dt').last();
                title.text(data['title']);

                var text = parent.find('dd.text').last();
                var news_text = data["text"].substring(0, 140) + ' ...';
                text.text(news_text);

                var url = parent.find('dd.url').last();
                url.text("http://www.asahi.com/articles/ASG5M65P2G5MUUPI00W.htmh");
            }
        });
    }

	/* =======================================================================
	Show Article
	========================================================================== */
	function showArticle() {

		var $parent  = $("#selectTitle");
		var $btn     = $parent.find("li");
		var $article = $("#article").find("dl");
		var parentH  = $parent.height();


		$btn.on({

		  mouseover : function(){

		  	$(this).css("opacity",0.6)

		  },

		  mouseout : function(){

		  	$(this).css("opacity",1)

		  },

		  click : function(){

		  	var thumb = $btn.index(this) + 1;
		  	var h;

		  	if(thumb==1) {

		  		h = parentH;

		  	} else {


		  		h = parentH + $($article[0]).height() + $("#header").height() + 20;

		  	}

			$parent.animate({
				'marginTop': -h
			});

		  }
		});

		$article.on('click', function() {

			$parent.animate({
				'marginTop': 0
			});

			return false;

		});


		return false;

	}


	return false;


})(window,jQuery);
