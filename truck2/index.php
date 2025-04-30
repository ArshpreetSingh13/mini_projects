<?php
session_start();
include("header.php")
?>
  <main class="main">

   
    <!-- Contact Section -->
    <section id="contact" class="contact section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>WELCOME</h2>
        <p>You can start Your Day</p>
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

              

                <div class="col-md-12 text-center">
                  
                  <button class="btn btn-primary" name="submit_btn" type="submit">Start</button>
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
    

   include("config.php");



   
    $query="INSERT INTO `driver`( `name` ) VALUES ('$name')";

    $res=mysqli_query($db,$query);
    
    
    
    
    if($res>0){
      
      $dr_query="SELECT * FROM `driver` ORDER BY `id` DESC";
      $dr_res=mysqli_query($db,$dr_query);
      $dr_data=mysqli_fetch_assoc($dr_res);
    $_SESSION['id'] = $dr_data['id'];

        echo "<script>window.location.assign('trip.php?msg=Please login')</script>";
    }
    else{ {
            echo "<script>window.location.assign('index.php?msg=Driver Adding failed')</script>";
        }

    }



  

}
?>