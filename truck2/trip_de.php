<?php
session_start();
include("header.php")
    ?>

<main class="main">


    <!-- Contact Section -->
    <section id="contact" class="contact section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>Total Trip Complete</h2>
            <p>Congrats you Complete the trip</p>

        </div><!-- End Section Title -->

        <div class="container" data-aos="fade" data-aos-delay="100">

            <div class="row gy-4 justify-content-center">



                <div class="col-lg-8">


                    <table class="table table-striped">

                        <tr>
                            <th>S.No</th>
                            <th>Title</th>
                            <th>starting time</th>
                            <th>ending time </th>
                            <th>Total time </th>
                            <th>Task bonus </th>
                            <th>Travel charges </th>
                        </tr>
                        <?php

                        if (isset($_GET['msg'])) {
                            $drId = $_GET['msg'];
                            $one=0;
                            include("config.php");
                            $query = "SELECT * FROM `trip` WHERE dr_id='$drId'";
                            $res = mysqli_query($db, $query);
                            while ($data = mysqli_fetch_assoc($res)) {
                               
                                if($data['status']=='complete'){
                                    $one += 1;
                                    $time = "SELECT TIMEDIFF( '$data[com]','$data[created_at]') AS TimeDifference";
                                    $time_res = mysqli_query($db, $time);
                                    $Tdiss = mysqli_fetch_assoc($time_res);

                                    if ($data['task'] == 1) {
                                        $amt = 10;
                                        $task="Pick Up";
                                    } else {
                                        $amt = 15;
                                        $task = "Drop Off";
                                    }

                                    $pkms = $data['kms'] * 5;


                                    ?>
                                <tr>
                                    <td><?php echo $one ?></td>
                                    <td><?php echo $data['title'] ?></td>
                                    <td><?php echo $data['created_at'] ?>...</td>
                                    <td><?php echo $data['com'] ?></td>
                                    <td><?php echo $Tdiss['TimeDifference'] ?></td>
                                    <td>Rs <?php echo $amt ?> for <br><strong><?php echo $task?></strong></td>
                                    <td><?php echo $data['kms'] ?>*5= <strong><?php echo $pkms ?></strong> </td>

                                </tr>


                                <?php
                                }

                            }

                        }


                        ?>

                    </table>
                </div><!-- End Contact Form -->
                <div class="d-flex justify-content-center" style="width:100%;">
                    <a href="end_de.php" class="btn btn-primary">End Your Day</a>
                </div>

            </div>

        </div>

    </section><!-- /Contact Section -->

</main>
<?php
include("footer.php")
    ?>