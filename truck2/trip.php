<?php
session_start();
include("header.php")
    ?>
<main class="main">


    <!-- Contact Section -->
    <section id="contact" class="contact section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>Add your trip</h2>
            <p>Spread Your Wings</p>
            <?php
            if (isset($_GET['msg'])) {
                echo "<div class='alert alert-primary' role='alert'> $_GET[msg]</div>";
            }

            ?>
        </div><!-- End Section Title -->

        <div class="container" data-aos="fade" data-aos-delay="100">

            <div class="row gy-4 justify-content-center">



                <div class="col-lg-8">
                    <form method="post" data-aos="fade-up" data-aos-delay="200">
                        <div class="row gy-4">


                           


                            <div class="col-md-12">
                                <input type="text" name="trip_title" class="form-control"
                                    placeholder="Enter you trip title" required="">
                            </div>
                            <div class="col-md-12">
                                <select class="form-select mb-3" aria-label="Default select example" name="task">

                                    <option selected disabled>Select Your Task</option>
                                    <option value="1">Pick Up</option>
                                    <option value="2">Drop Off</option>



                                </select>
                               
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
if (isset($_REQUEST["submit_btn"])) {

    $dr_id = $_SESSION['id'];
    $trip_title = $_REQUEST["trip_title"];
    $task = $_REQUEST["task"];


    include("config.php");




    $query = "INSERT INTO `trip`( `dr_id`,`title`, `task`) VALUES ('$dr_id','$trip_title','$task')";

    $res = mysqli_query($db, $query);

    if ($res > 0) {
        
        $_SESSION['id']=$dr_id;
        echo "<script>window.location.assign('all.php?msg=Trip is added successful')</script>";

    } else { {
            echo "<script>window.location.assign('all.php?msg=Trip is not added')</script>";
        }

    }





}
?>