<?php
include("header.php")
?>
  <main class="main">

   
    <!-- Contact Section -->
    <section id="contact" class="contact section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>WELCOME</h2>
        <p>Expense Tracker with Budget Analysis</p>
        <?php
        if (isset($_GET['msg'])) {
            echo "<div class='alert alert-primary' role='alert'> $_GET[msg]</div>";
        }

        ?>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade" data-aos-delay="100">

        <div class="row gy-4 justify-content-center">

        

          <div class="col-lg-8">
            <form  method="post"  data-aos="fade-up" data-aos-delay="200">
              <div class="row gy-4">

                <div class="col-md-12">
                  <input type="text" name="name" class="form-control" placeholder="Your Name" required="">
                </div>

                

                <div class="col-md-12">
                  <input type="number" class="form-control" name="budget" placeholder="Enter your Monthly Budget" required="">
                </div>
                <div class="col-md-6">
                  <input type="date" class="form-control" name="date_from" placeholder="Enter your Monthly Budget" required="">
                </div>
                <div class="col-md-6">
                  <input type="date" class="form-control" name="date_to" placeholder="Enter your Monthly Budget" required="">
                </div>

              

                <div class="col-md-12 text-center">
                  
                  <button class="btn btn-primary" name="submit_btn" type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div><!-- End Contact Form -->

        </div>

      </div>

    </section><!-- /Contact Section -->

  </main>

<?php
include("footer.php")
?>


<?php
if(isset($_REQUEST["submit_btn"])){

    $name=$_REQUEST["name"];
    $budget=$_REQUEST["budget"];
    $date_from=$_REQUEST["date_from"];
    $date_to=$_REQUEST["date_to"];

   include("config.php");



   
    $query="INSERT INTO `set_budget`( `name`,`date_from`, `date_to`, `budgets` ) VALUES ('$name','$date_from','$date_to','$budget')";

    $res=mysqli_query($db,$query);

    if($res>0){
        echo "<script>window.location.assign('index.php?msg=Budget Set successful')</script>";
    }
    else{ {
            echo "<script>window.location.assign('index.php?msg=Budget Set unsuccessful')</script>";
        }

    }



  

}
?>