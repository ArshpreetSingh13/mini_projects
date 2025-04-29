
<?php
session_start();
if (!isset($_SESSION["id"])) {
    echo "<script>window.location.assign('login.php?msg=please Login ')</script>";

}
include("header.php")

    ?>

<main class="main">


    <!-- Contact Section -->
    <section id="contact" class="contact section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>Is Your Trip Completed ?</h2>
            <p>Spread Your Wings</p>
           
        </div><!-- End Section Title -->

        <div class="container" data-aos="fade" data-aos-delay="100">

            <div class="row gy-4 justify-content-center">



                <div class="col-lg-8">
                    <form method="post" data-aos="fade-up" data-aos-delay="200" action="task_com.php">
                        <div class="row gy-4">


                            <div class="col-md-12">
                                  <div class="card d-flex">
                                            <div class="card-body">
                                         <strong>Tasks</strong>
                                    </div>
                                    <p class=" btn-primary"
                                        style="position:absolute; left:550px; top:12px;"><strong>Button</strong></p>
                                </div>
                               <?php

                                    $dr_id = $_SESSION['id'];
                                    include("config.php");
                                    $query = "SELECT * FROM `trip` WHERE dr_id='$dr_id' ";
                                    $res = mysqli_query($db, $query);
                                    while ($data = mysqli_fetch_assoc($res)) {
                                        ?>
                                       <div class="card d-flex">
                                            <div class="card-body">
                                                <?php echo $data['title']?>
                                            </div>
                                            <a href="task_com.php?id=<?php echo$data['id']?>" class="btn btn-primary" style="position:absolute; left:550px; top:12px;">complete</a>
                                        </div>
                                       
                                        <?php
                                    }
                                    ?>
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
if (isset($_REQUEST['btn_s'])) {







    $kms = $_REQUEST['kms'];

    $Ctrip = $_REQUEST['Ctrip'];


    $u_trip = "UPDATE `trip` SET `kms`='$kms',`status`='complete' WHERE id='$Ctrip'";
    $res_trip = mysqli_query($db, $u_trip);



    $s_trip = "SELECT * FROM `trip` WHERE id='$Ctrip'";
    $s_res = mysqli_query($db, $s_trip);
    $s_data = mysqli_fetch_assoc($s_res);


    if ($res > 0) {
        echo "<script>window.location.assign('trip_de.php?msg=$s_data[dr_id]')</script>";
    } else { {
            echo "<script>window.location.assign('trip_de.php?msg=Trip is not completed')</script>";
        }

    }


}
?>