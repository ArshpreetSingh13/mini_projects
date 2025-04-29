<?php
include("header.php")
    ?>

<section id="contact" class="contact section">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
        <h2>WELCOME</h2>
        <p>Expense Tracker with Budget Analysis</p>
        
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade" data-aos-delay="100">

        <div class="row gy-4 justify-content-center">



            <div class="col-lg-8">
                <form method="post" data-aos="fade-up" data-aos-delay="200">
                    <div class="row gy-4">

                        <div class="col-md-12">
                            <input type="text" name="categroy" class="form-control" placeholder="Name your category"
                                required="">
                        </div>



                        <div class="col-md-12 text-center">

                            <button class="btn btn-primary" name="submit_btn" type="submit">Add category</button>
                        </div>

                    </div>
                </form>
            </div>

        </div>

    </div>

</section>



<?php
include("footer.php")
    ?>



<?php
if (isset($_REQUEST["submit_btn"])) {

    $categroy = $_REQUEST["categroy"];
   

    include("config.php");

    $query = "INSERT INTO `category`( `category`) VALUES ('$categroy')";

    $res = mysqli_query($db, $query);

    if ($res > 0) {
        echo "<script>window.location.assign('add_ex.php?msg=category added successful')</script>";
    } 
    else { {
            echo "<script>window.location.assign('add_ex.php?msg=unsuccessful task')</script>";
        }

    }





}
?>