myApp.factory('myService', ['Restangular','$cookies', function(Restangular,$cookies){
	
	var newUser = {

		currentId: null, //see if reqd.
		allCategories: [],
		allArticles: [],
		recommendedArticles: [],

		createUser: function(){
			Restangular.one("users").post(null)
				.then(function(response){
					$cookies.put('currentUserId',response.id);
					
					newUser.currentId = response.id;
					console.log("created user "+ newUser.currentId);
			});
		},

		getInitialArticles: function(){
			Restangular.all("initialArticles").getList()
				.then(function(response){
					newUser.recommendedArticles = response;
					console.log("got initial articles");
					for (var i = newUser.recommendedArticles.length - 1; i >= 0; i--) {
						if(newUser.recommendedArticles[i].image_url == null){
							 newUser.recommendedArticles[i].image_url = "http://www.thestartv.com/wp-content/uploads/2016/09/Cuppa-News-ID-board.png";
						}
						else{
							newUser.recommendedArticles[i].image_url = "https://static01.nyt.com/" + newUser.recommendedArticles[i].image_url;
						}
					}
				})
		},

		recommendedArticles: function(){
			Restangular.one("users",newUser.currentId).all("recommendedArticles").getList()
				.then(function(response){
					newUser.recommendedArticles = response;
					console.log(newUser.currentId);
					console.log("got recommendedArticles");
					for (var i = newUser.recommendedArticles.length - 1; i >= 0; i--) {
						if(newUser.recommendedArticles[i].image_url == null){
							 newUser.recommendedArticles[i].image_url = "http://www.thestartv.com/wp-content/uploads/2016/09/Cuppa-News-ID-board.png";
						}
						else{
							newUser.recommendedArticles[i].image_url = "https://static01.nyt.com/" + newUser.recommendedArticles[i].image_url;
						}
					}
				})

		},

		getCurrentUser: function(){
			newUser.currentId = $cookies.get('currentUserId');
			if (!angular.isDefined(newUser.currentId)) {
				console.log("no cookie found.");
				newUser.createUser();
				newUser.getInitialArticles();

			}
			else{
				console.log("cookie found");
				newUser.recommendedArticles();
			}
		},

		sendArticleReadByUser: function(articleId){
			Restangular.one("users",newUser.currentId).one("articles",articleId).post(null)
				.then(function(){
					console.log(newUser.currentId+" "+articleId);
			})
		},

		getAllCategories: function(){

			console.log(newUser.allCategories);

			if (newUser.allCategories.length == 0) {
				Restangular.all("categories").getList()
					.then(function(response){
						console.log(newUser.allCategories);
						newUser.allCategories = response;
						console.log(newUser.allCategories);
					})
			}
		},

		getArticles: function(categoryId){	
				Restangular.one("category",categoryId).getList()
					.then(function(response){
						newUser.allArticles = response;
					})
		},
	}
	return newUser;
}])

