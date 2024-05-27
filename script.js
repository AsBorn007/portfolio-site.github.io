$('.food_cards').slick({
    
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  });


  ScrollOut({
    targets: '.llazy', 
    once: true,
    onShown: function(el) {
       if (!el.src) { 
          el.src = el.dataset.src;
       }
    }
 })
  // const student = {
  //   fullName : "Asborn",
  //    rollNumber : 25,
  //    cgpa : 9.8,
  //     isPAss : true,
  // };
  // console.log(student.cgpa);
  // console.log(student["isPAss"]);

  // student["rollNumber"] = student["rollNumber"] + 2;
  // console.log(student["rollNumber"]); 


  // student["fullName"] = "praveen Asborn";
  // console.log(student["fullName"]);


  const Product= {
    fullName : "Parker Joter CT Ball Pen",
     rating : 4.5,
     price : 250,
      offer:100/60,
  };
  console.log(Product.price);
  console.log(Product["rating"]);