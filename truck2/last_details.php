<?php
include("header.php")
    ?>

<main class="main">


    <!-- Contact Section -->
    <section id="contact" class="contact section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>your Earning</h2>
            <p>You can End Your Day</p>

        </div><!-- End Section Title -->

        <div class="container" data-aos="fade" data-aos-delay="100">

            <div class="row gy-4 justify-content-center">



                <div class="col-lg-8">


                    <table class="table table-striped">

                        <tr>
                            <th>S.No </th>
                            <th>starting time</th>
                            <th>ending time </th>
                            <th>Total time </th>
                            <th>task bones </th>
                            <th>travel charges </th>
                        </tr>
                        <?php


                        if (isset($_GET['msg'])) {
                            $totaltime = 0;
                            $count = 0;
                            $one = 0;
                            $drId = $_GET['msg'];
                            include("config.php");
                            $query = "SELECT * FROM `trip` WHERE dr_id='$drId'";
                            $res = mysqli_query($db, $query);
                            while ($data = mysqli_fetch_assoc($res)) {
                                if ($data['status'] == 'complete') {
                                    $count += 1;
                                    $one += 1;
                                    $time = "SELECT TIMEDIFF( '$data[com]','$data[created_at]') AS TimeDifference";
                                    $time_res = mysqli_query($db, $time);
                                    $Tdiss = mysqli_fetch_assoc($time_res);

                                    if ($data['task'] == 1) {
                                        $amt = 10;
                                    } else {
                                        $amt = 15;
                                    }

                                    $pkms = $data['kms'] * 5;


                                    $times = "SELECT ADDTIME('$totaltime', '$Tdiss[TimeDifference]') AS TotalTime";
                                    $times_res = mysqli_query($db, $times);
                                    $Tsdiss = mysqli_fetch_assoc($times_res);

                                    $totaltime = $Tsdiss['TotalTime'];




                                    ?>
                                    <tr>
                                        <td><?php echo $one ?></td>
                                        <td><?php echo $data['created_at'] ?></td>
                                        <td><?php echo $data['com'] ?></td>
                                        <td><?php echo $Tdiss['TimeDifference'] ?></td>
                                        <td><?php echo $amt ?></td>
                                        <td><?php echo $data['kms'] ?>*5=<?php echo $pkms ?></td>


                                    </tr>


                                    <?php
                                }

                            }

                        }
                        ?>
                        <div class="d-flex">

                            <div class="card w-25 m-3">
                                <div class="card-header  fw-bolder">
                                    Total Time
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title"><?php echo $totaltime ?></h5>



                                </div>
                            </div>

                            <?php
                            $dri = "SELECT * FROM `driver` WHERE id='$drId'";
                            $res_dri = mysqli_query($db, $dri);
                            $data_dri = mysqli_fetch_assoc($res_dri);
                            ?>

                            <div class="card w-25 m-3">
                                <div class="card-header  fw-bolder">
                                    Petrol
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title"><?php echo $data_dri['petrol'] ?></h5>
                                </div>
                            </div>
                            <div class="card w-25 m-3">
                            <div class="card-header  fw-bolder">
                                Total earning
                            </div>
                            <div class="card-body">
                                <h5 class="card-title"><?php echo $pkms + $amt + $data_dri['petrol'] ?></h5>
                                </div>
                            </div>
                            <div class="card w-25 m-3">
                                <div class="card-header fw-bolder">
                                    Total Shiping 
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title"><?php echo $count ?></h5>
                                </div>
                            </div>
                        </div>


                        
                </div>
                <?php


                ?>

                </table>
            </div><!-- End Contact Form -->

        </div>

        </div>

    </section><!-- /Contact Section -->

</main>
<?php
include("footer.php")
    ?>