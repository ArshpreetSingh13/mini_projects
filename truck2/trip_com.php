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
            <?php
            if (isset($_GET['msg'])) {
                echo "<div class='alert alert-primary' role='alert'> $_GET[msg]</div>";
            }

            ?>
        </div><!-- End Section Title -->

        <div class="container" data-aos="fade" data-aos-delay="100">

            <div class="row gy-4 justify-content-center">



                <div class="col-lg-8">
                    <form method="post" data-aos="fade-up" data-aos-delay="200" action="all.php">
                        <div class="row gy-4">


                            <div class="col-md-12">
                                <select class="form-select mb-3" aria-label="Default select example" name="driver_id"
                                    required>

                                    <option selected disabled>select your name</option>
                                    <?php
                                    include("config.php");
                                    $query = "SELECT * FROM `driver` ";
                                    $res = mysqli_query($db, $query);
                                    while ($data = mysqli_fetch_assoc($res)) {
                                        ?>
                                        <option value="<?php echo $data['id'] ?>"><?php echo $data['name'] ?></option>
                                        <?php
                                    }
                                    ?>

                                </select>
                            </div>




                            <div class="col-md-12 text-center">

                                <button class="btn btn-primary"  type="submit">MY Name</button>


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