
    // Document on load.
    $(function() {

 var newColour=["#fa574b","#3ec2ee","#e51000","#1c40fb"];
        republicansAndDemocratsCount();
            
	setInterval(republicansAndDemocratsCount, 1000);
        candidatePopularHashTags(); 
        getfbMentionCount();
         ajaxPopular("Trump");
         PopularElection("Trump");
         ajaxPopularLink();
         ajaxNews();
	 ajaxLatest();
        getPersonDataCloud("WCR1","TRUMP",newColour[0] );
        getPersonDataCloud("WCD1","CLINTON",newColour[1] );
        getPersonDataCloud("WCD2","BERNIE",newColour[3] );
        getPersonDataCloud("WCR2","CRUZ",newColour[2] );
	//ajaxGarphTop("11","22","33");
         setInterval(ajaxLatest, 5000);
       ajaxGarphSentiment("js/SentimetGraphServer.jag","11","22","33");
	drawCommunityGraph("communityGraph");


     });

