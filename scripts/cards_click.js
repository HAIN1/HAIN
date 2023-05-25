var b = document.querySelectorAll('.view');
var w = document.querySelector('.cardWrapper');
var m = document.querySelector('.cardMain');
var artist = m.querySelector('.hain');
var project = m.querySelector('.hainsub');
var desc = m.querySelector('.cardDesc');
var sub = m.querySelector('.cardDescSub');

// clicking on a "view this project" button will
// open a card at the right side of the screen
// with the project's details
b.forEach(btn => {
  btn.addEventListener('click', event =>{
    // plays an animation as well
    w.style.animation = 'cardSlide ease 300ms';
    w.style.animationFillMode = 'forwards';
    if(btn.dataset.art == 'foodformat'){
      artist.textContent = 'winnie celestine';
      project.textContent = 'Food Format';
      desc.textContent = `In "food format" Winnie Celestine's vibrant and dynamic paintings transport us to a world where food transcends its physical form. Through her cubist-inspired style, Celestine deconstructs culinary elements and reassembles them into kaleidoscopic compositions that ignite our senses. Her masterful use of color, texture, and brushwork invites us to savor the intricate details of each dish, while simultaneously unraveling the layers of cultural and personal narratives woven into her creations. "A Feast for the Eyes" celebrates the transformative power of food, inviting us to contemplate its role as a source of nourishment for both the body and the soul.`;
      sub.textContent = `I wanted to deconstruct and reconstruct the elements of various dishes, capturing the harmony of flavors, textures, and colors. Each detail tells a story of culinary exploration, inviting you to savor the fusion of tastes and embark on a visual feast.`;
    }
    if(btn.dataset.art == 'onthirst'){
      artist.textContent = 'chloe rosales';
      project.textContent = 'On Thirst';
      desc.textContent = `In her thought-provoking series, "on thirst," Chloe Rosales captures social dynamics embedded within our relationship with thirst. documenting the varied expressions of thirst across different socio-economic classes, shedding light on the disparities and inequalities that exist. Rosales' photographs invite us to confront truths that arise when examining the basic human need for hydration. Through compelling visual narratives, she challenges us to question our assumptions, biases, and the systems that perpetuate unequal access to resources. "Thirst" serves as a  reminder of the complex web of factors that shape our understanding of this fundamental human experience.`;
      sub.textContent = `“on thirst” seeks to  document the varied ways in which people from different classes seek to satisfy thirst. From the scarcity of resources to the abundance of privilege, each photograph reveals the intimate disparities that exist and invites us to reflect on the divides that shape our understanding of this fundamental necessity.`;
    }
    if(btn.dataset.art == 'rythmsofoccupation'){
      artist.textContent = 'skai malik';
      project.textContent = 'Rythms Of Occupation';
      desc.textContent = `Malik's evocative performance piece, "Rhythms of occupation," delves into the intricate relationship between agriculture, fishery, and human existence. Through a mesmerizing choreography of movement, sound, and symbolism, Malik interprets the toil, resilience, and ultimate fruition found within these labor-intensive domains. By embodying the struggles, rhythms, and rituals of agricultural and fishery practices, Malik invites us to contemplate our connection to the land, the sea, and the sustenance they provide. "rhythyms" transcends mere performance and becomes a transcendent experience, illuminating the profound symbiosis between humans, nature, and the nourishment that sustains us.`;
      sub.textContent = `I wanted to embody the labor of love that sustains essential industries. for the audience to Witness the resilience of farmers, harvesters, and all those who toil to bring food to our tables. Through this performance, I pay tribute to their unwavering dedication and the bountiful fruits of their labor.`;
    }
    if(btn.dataset.art == 'rituals'){
      artist.textContent = 'ronaldo alfonso';
      project.textContent = 'Rituals';
      desc.textContent = `In his captivating body of work, "The Social Ritual of Food," Alfonso captures the essence of communal gatherings around food. Through his lens, Alfonso documents the shared experiences, emotions, and connections that unfold during these rituals. His photographs transport us to bustling marketplaces, lively dining tables, and vibrant street food scenes, inviting us to witness the vibrant tapestry of human interaction that emerges around food. Alfonso's ability to capture candid moments and fleeting expressions allows us to immerse ourselves in these social spaces, provoking a deep sense of nostalgia and fostering a renewed appreciation for the power of food to foster community and connection.`;
      sub.textContent = `Documenting the gatherings, celebrations, and everyday moments where food becomes a catalyst for connection and shared experiences so that Each photograph unveils the power of food to bridge divides, strengthen relationships, and foster a sense of community.`;
    }
    if(btn.dataset.art == 'jargonofnourishment'){
      artist.textContent = 'sue dolores';
      project.textContent = 'Jargon Of Nourishment';
      desc.textContent = `Dolores invites us into the captivating world of culinary language with her innovative installation, "Jargon of nourishment." Through an intricate arrangement of words and interactive elements, Dolores transforms the gallery space into a vibrant tapestry of culinary vocabulary. As audiences engage with the installation, they are encouraged on the exploration of nuances, meanings, and cultural associations embedded within food-related words. Dolores's interactive word installation allows us to playfully construct our own food-inspired poems, sparking a dialogue between language, taste, and creativity. "jargon" celebrates the rich tapestry of language woven into our culinary experiences.`;
      sub.textContent = `Exploring the culinary lexicon and presenting a captivating vocabulary installation that celebrates the language of food. Each word becomes a brushstroke, painting a vivid picture of the nourishment process.`;
    }
    if(btn.dataset.art == 'seeds'){
      artist.textContent = 'harvey trahab';
      project.textContent = 'Seeds';
      desc.textContent = `Dolores invites us into the captivating world of culinary language with her innovative installation, "Jargon of nourishment." Through an intricate arrangement of words and interactive elements, Dolores transforms the gallery space into a vibrant tapestry of culinary vocabulary. As audiences engage with the installation, they are encouraged on the exploration of nuances, meanings, and cultural associations embedded within food-related words. Dolores's interactive word installation allows us to playfully construct our own food-inspired poems, sparking a dialogue between language, taste, and creativity. "jargon" celebrates the rich tapestry of language woven into our culinary experiences.`;
      sub.textContent = `Each seed is a testament to the rich heritage and diversity of our agricultural landscape. An opportunity to delve into the stories embedded in these seeds, passed down through generations, carrying the wisdom and resilience of our ancestors.`;
    }
    if(btn.dataset.art == 'assembly'){
      artist.textContent = 'ahmed hashem';
      project.textContent = 'Assembly';
      desc.textContent = `Hashem's graphic designs in "Assembly" fuse artistry and food in a mesmerizing display of visual harmony. Through his meticulous assembly of food elements, Hashem creates intricate compositions that transcend the boundaries between culinary delights and graphic design. His designs celebrate the beauty, balance, and geometry found in nature's edible creations, inviting us to contemplate the inter-connectedness of art, design, and the culinary world. "Assembly" challenges us to see the inherent artistry within the realm of food and to recognize the power of aesthetics in shaping our perception and appreciation of nourishment.`;
      sub.textContent = `I invite you to explore the intersection of aesthetics and culinary experiences. Each design attempts to assemble the essence of flavors, ingredients, and cultural influences, transforming them into vibrant visual compositions.`;
    }
    if(btn.dataset.art == 'kitchens'){
      artist.textContent = 'bernice rowe';
      project.textContent = 'Kitchens';
      desc.textContent = `In her captivating photographic series, "Kitchens," rowe invites us on a visual journey to explore the diverse kitchens found across the world. Through her lens, Rowe captures the intimate spaces, utensils, ingredients, and culinary traditions that define each unique cultural context. Her photographs become windows that offer a glimpse into the heart and soul of communities, illuminating the stories, rituals, and heritage embedded within these culinary sanctuaries. "Kitchens" celebrates the universality of food preparation while honoring the rich tapestry of cultural diversity that shapes our gastronomic experiences.`;
      sub.textContent = `Through my lens, I capture the heart and soul of kitchens, revealing the unique cultural nuances, traditions, and stories they hold. From the domestic intimacy of kitchen spaces to serene home kitchens around the world, each photograph invites you to immerse yourself in the sights, sounds, and aromas that define these landscapes.`;
    }
    if(btn.dataset.art == 'tracesofconsumption'){
      artist.textContent = 'sabi pratik';
      project.textContent = 'Traces Of Consumption';
      desc.textContent = `Sabi Pratik's "Traces of consumption" collages breathe life into everyday objects, intertwining cafeteria invoices, recipes, and customer receipts. Each composition tells a fragmented story of agricultural and culinary journeys, inviting reflection on the interplay between sustenance and commerce. These collages unveil hidden narratives, reminding us of the intricate connections within our global food chain and prompting contemplation of our roles as consumers. "traces of consumption" reveals the profound impact of our choices on the world of food and agriculture.`;
      sub.textContent = `Each collage weaves together the threads of culinary narratives, unveiling the intricate stories hidden within these seemingly mundane documents. Discover the hidden connections, economic dynamics, and personal experiences that shape our relationship with food. Through this art form, I invite you to reflect on the unseen layers of the culinary world and the rich tapestry of stories that surround it.`;
    }
    if(btn.dataset.art == 'nightmarkets'){
      artist.textContent = 'peter chan';
      project.textContent = 'Night Markets';
      desc.textContent = `Chan's innovative work, "night markets," transports us to the bustling world of street food markets through the unconventional medium of sound. Using the iPhone's live feature, Chan captures the vibrant ambiance, sizzling sounds, and captivating conversations that fill these culinary hubs. His immersive audio recordings invite us to close our eyes and embark on an auditory journey through the vibrant tapestry of street food culture. "Night markets" encourages us to appreciate the multi-sensory nature of our culinary experiences, reminding us that food not only tantalizes our taste buds but also envelops us in a symphony of sounds and cultural narratives.`;
      sub.textContent = `Through the lens of the iPhone Live feature, I capture the sounds that emanate from these lively culinary spaces. Immerse yourself in the rhythmic symphony of sizzling pans, chopping knives, and animated conversations.`;
    }
  });
});

// clicking on the card will remove it
w.addEventListener('click', event =>{
  w.style.animation = 'cardSlideRev ease 300ms';
  w.style.animationFillMode = 'forwards';
});
