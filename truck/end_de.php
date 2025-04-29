<?php
include("header.php")
?>

<main class="main">


    <!-- Contact Section -->
    <section id="contact" class="contact section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>Is Your Day Completed ?</h2>
            <p>Spread Your Wings</p>
            
        </div><!-- End Section Title -->

        <div class="container" data-aos="fade" data-aos-delay="100">

            <div class="row gy-4 justify-content-center">
                <div class="col-lg-8">
                    <form method="post" data-aos="fade-up" data-aos-delay="200">
                        <div class="row gy-4">

                            <div class="col-md-12">
                                <input type="number" name="petrol" class="form-control"
                                    placeholder="Your petrol expense" required="">
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
if(isset($_REQUEST['submit_btn'])){
    $d_id=$_GET['id'];
    $petrol=$_REQUEST['petrol'];
    include("config.php");

     $query="UPDATE `driver` SET `petrol`='$petrol' WHERE id='$d_id'";

     $up=mysqli_query($db,$query);

    echo "<script>window.location.assign('last_details.php?msg=$d_id')</script>";
    



  
    

    
}


?>