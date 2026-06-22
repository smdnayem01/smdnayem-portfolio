$(document).ready(function() {
    // হিরো সেকশনের ছবি এবং লেখাগুলোকে শুরুতে লুকিয়ে ফেলা
    $(".myphoto, .myinfo h5, .myinfo h1, .myinfo p, .myinfo .d-grid").hide();

    // সুন্দর করে একটার পর একটা Fade In করানো
    $(".myphoto").fadeIn(1000, function() {
        $(".myinfo h5").fadeIn(800, function() {
            $(".myinfo h1").fadeIn(800, function() {
                $(".myinfo p").fadeIn(800, function() {
                    $(".myinfo .d-grid").fadeIn(800);
                });
            });
        });
    });
});

  // পোর্টফোলিও বাটন হোভার ইফেক্ট (jQuery)
  $(".project-card .btn").hover(
    function () {
      // মাউস ভেতরে আনলে ব্যাকগ্রাউন্ড হলুদ হবে এবং লেখা সাদা হবে
      $(this).css({
        "background-color": "#ffc107",
        color: "#000",
      });
    },
    function () {
      // মাউস সরিয়ে নিলে আগের অবস্থায় ফিরে যাবে
      $(this).css({
        "background-color": "transparent",
        color: "#212529",
      });
    },
  );

  // কন্টাক্ট ফর্ম সাবমিশন (jQuery)
  $("#contactForm").on("submit", function (event) {
    event.preventDefault(); // পেজ যেন রিফ্রেশ না হয়

    // ইনপুটের ভ্যালুগুলো নেওয়া
    var userName = $("#name").val();

    // একটি সুন্দর অ্যালার্ট দেখানো
    alert(
      "ধন্যবাদ " +
        userName +
        "! আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে। (এটি একটি ডেমো সাবমিশন)",
    );

    // ফর্মটি রিসেট বা খালি করা
    $("#contactForm")[0].reset();
  });
});
// স্ক্রোল করার সময় স্কিল বার অ্যানিমেশন
var skillAnimated = false; // এটি নিশ্চিত করবে অ্যানিমেশন যেন একবারই হয়

$(window).on("scroll", function () {
  // About সেকশনের পজিশন মাপার জন্য
  var aboutTop = $("#about").offset().top - window.innerHeight + 100;

  if ($(window).scrollTop() > aboutTop && !skillAnimated) {
    $(".progress-bar").each(function () {
      var value = $(this).attr("aria-valuenow");
      $(this).animate(
        {
          width: value + "%",
        },
        1500,
      ); // ১.৫ সেকেন্ড ধরে অ্যানিমেশন হবে
    });
    skillAnimated = true; // একবার অ্যানিমেশন হলে আর বারবার হবে না
  }
});
