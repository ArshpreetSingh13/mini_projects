<?php
include("header.php")
    ?>

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
                <form method="post" data-aos="fade-up" data-aos-delay="200">
                    <div class="row gy-4">

                        <div class="col-md-12">
                            <input type="text" name="product" class="form-control" placeholder="Name your Product"
                                required="">
                        </div>



                        <div class="col-md-12">
                            <input type="number" class="form-control" name="amount" placeholder="amount" required="">
                        </div>
                        <div class="col-md-12">

                        
                            <select class="form-select mb-3"  aria-label="Default select example" name="category">

                                <option selected disabled>Open this select menu</option>
                                <?php
                                include("config.php");
                                $query = "SELECT * FROM `category` ";
                                $res = mysqli_query($db, $query);
                                while ($data = mysqli_fetch_assoc($res)) {
                                    ?>
                                    <option value="<?php echo $data['id']?>"><?php echo $data['category'] ?></option>
                                    <?php
                                }
                                ?>
                               
                            </select>
                            <a  href="add_category.php" class="m-2">Add category</a>
                        </div>



                        
                      




                        <div class="col-md-12 text-center">

                            <button class="btn btn-primary" name="submit_btn" type="submit">Add expense</button>
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

    $product = $_REQUEST["product"];
    $amount = $_REQUEST["amount"];
    $category = $_REQUEST["category"];
    

    $pro="INSERT INTO `products`(`product_name`, `amount`, `category` ) VALUES ('$product','$amount','$category')";

    $pro_res=mysqli_query($db,$pro);


    if ($res > 0) {
        echo "<script>window.location.assign('add_ex.php?msg=Product added successful')</script>";
    } else { {
            echo "<script>window.location.assign('add_ex.php?msg=unsuccessful task')</script>";
        }

    }




}
?>