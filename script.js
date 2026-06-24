$(document).ready(function () {
  // হিরো সেকশনের ছবি এবং লেখাগুলোকে শুরুতে লুকিয়ে ফেলা
  $(".myphoto, .myinfo h5, .myinfo h1, .myinfo p, .myinfo .d-grid").hide();

  // সুন্দর করে একটার পর একটা Fade In করানো
  $(".myphoto").fadeIn(1000, function () {
    $(".myinfo h5").fadeIn(800, function () {
      $(".myinfo h1").fadeIn(800, function () {
        $(".myinfo p").fadeIn(800, function () {
          $(".myinfo .d-grid").fadeIn(800);
        });
      });
    });
  });
});

// button Hover Effect (jQuery)
$(".project-card .btn").hover(
  function () {
    $(this).css({
      "background-color": "#0dcaf0",
      color: "#fff",
    });
  },
  function () {
    $(this).css({
      "background-color": "transparent",
      color: "#212529",
    });
  },
);

// কন্টাক্ট ফর্ম সাবমিশন (jQuery)
$(document).ready(function () {
  $("#contactForm").on("submit", function (e) {
    e.preventDefault(); // পেজ রিফ্রেশ হওয়া বন্ধ করবে

    var form = $(this);
    var submitButton = form.find('button[type="submit"]');

    // বাটন লক করা যাতে ইউজার বারবার ক্লিক করতে না পারে
    submitButton.prop("disabled", true).text("Sending...");

    // AJAX এর মাধ্যমে ব্যাকগ্রাউন্ডে Formspree তে ডেটা পাঠানো
    $.ajax({
      url: form.attr("action"),
      method: "POST",
      data: form.serialize(),
      dataType: "json",
      success: function (data) {
        // SweetAlert দিয়ে সফলতার মেসেজ
        Swal.fire({
          title: "Thank You!",
          text: "Your message has reached me successfully.",
          icon: "success",
          confirmButtonColor: "#0dcaf0", // Bootstrap info color
          confirmButtonText: "Ok",
        });
        form[0].reset(); // ফর্ম রিসেট
      },
      error: function (err) {
        // SweetAlert দিয়ে ভুলের মেসেজ
        Swal.fire({
          title: "Oops...",
          text: "Sorry, something went wrong. Please try again.",
          icon: "error",
          confirmButtonColor: "#dc3545",
        });
      },
      complete: function () {
        // বাটন আবার আগের অবস্থায় ফিরিয়ে আনা
        submitButton.prop("disabled", false).text("Send Message");
      },
    });
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
// স্ক্রোল করলে বাটন দেখানো বা লুকানো
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 300) {
    $("#scrollTopBtn").fadeIn();
  } else {
    $("#scrollTopBtn").fadeOut();
  }
});

// বাটনে ক্লিক করলে স্মুথলি ওপরে ওঠা
$("#scrollTopBtn").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
$("#darkModeToggle").on("click", function () {
  // বর্তমানে কোন থিম আছে তা চেক করা
  var currentTheme = $("html").attr("data-bs-theme");

  if (currentTheme === "dark") {
    $("html").removeAttr("data-bs-theme"); // লাইট মোড
    $(this).html("🌙").removeClass("btn-body");
  } else {
    $("html").attr("data-bs-theme", "dark"); // ডার্ক মোড
    $(this).html("☀️").addClass("btn-body ");
  }
});

$("#langToggle").on("click", function () {
  // ইংরেজি লেখাগুলো লুকিয়ে থাকলে তার ওপর ভিত্তি করে লজিক
  if ($(".lang-bn").hasClass("d-none")) {
    // বাংলায় পরিবর্তন
    $(".lang-en").addClass("d-none");
    $(".lang-bn").removeClass("d-none");
    $(this).text("🇬🇧 English");
  } else {
    // ইংরেজিতে পরিবর্তন
    $(".lang-bn").addClass("d-none");
    $(".lang-en").removeClass("d-none");
    $(this).text("🇧🇩 বাংলা");
  }
});
