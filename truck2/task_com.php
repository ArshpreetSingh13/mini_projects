
<?php
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


                           <?php
                           $t_id=$_GET['id'];

                           ?>
                           <input type="hidden" value="<?php echo $t_id;?>" name="Ctrip" >

                        

                             
                             <div class="col-md-12">
                                <input type="number" name="kms" class="form-control"
                                    placeholder="enter your kms" required="">
                            </div>




                            <div class="col-md-12 text-center">

                                <button class="btn btn-primary"  type="submit" name="btn_s">Submit</button>


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
if(isset($_REQUEST['btn_s'])){

    





$kms=$_REQUEST['kms'];

$Ctrip=$_REQUEST['Ctrip'];

include("config.php");
$u_trip="UPDATE `trip` SET `kms`='$kms',`status`='complete' WHERE id='$Ctrip'";
$res_trip=mysqli_query($db,$u_trip);



$s_trip="SELECT * FROM `trip` WHERE id='$Ctrip'";
$s_res= mysqli_query($db, $s_trip);
$s_data=mysqli_fetch_assoc($s_res);


    if ($res_trip > 0) {
        echo "<script>window.location.assign('trip_de.php?msg=$s_data[dr_id]')</script>";
    } else { {
            echo "<script>window.location.assign('trip_de.php?msg=Trip is not completed')</script>";
        }

    }


}
?>