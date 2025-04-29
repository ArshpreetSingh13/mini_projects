<?php
include("header.php")
    ?>


<div class="container pt-5 mt-5">
    <div class="row">
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Total spent for the current month.</h5>

                    <p class="card-text">
                    <ul>
                        <?php
                        $total=0;
                        include("config.php");
                        $query = "SELECT * FROM `products` ";
                        $res = mysqli_query($db, $query);
                        while ($data = mysqli_fetch_assoc($res)) {
                            ?>
                            <?php
                            $total=$total+$data['amount']
                            ?>
                            <li><?php echo $data['product_name'] ?> RS <?php echo $data['amount'] ?></li>
                            <?php
                        }
                        ?>

                    </ul>

                    </p>
                    <a href="#" class="btn btn-primary"> This month expenses<?php echo $total ?></a>
                </div>
            </div>
        </div>

        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Number of days</h5>
                    <p class="card-text">
                        <ul>
                        <?php
                       
                        include("config.php");
                        $bug = "SELECT * FROM `set_budget`ORDER BY created_at DESC ";
                        $res_bug = mysqli_query($db, $bug);
                        $data_bug = mysqli_fetch_assoc($res_bug)
                            ?>
                            <p>Your budget is rs <strong><?php echo $data_bug['budgets'] ?></strong> And your expense is rs <strong><?php echo $total ?></strong>  </p>
                            <p></p>
                            <?php
                            $total= $data_bug['budgets']-$total;
                            if($total<0){
                                ?>
                                <p class="text-danger">Your are Out of Your budget for RS</p>
                                <li> you have only <?php echo $total ?></li>

                                <?php

                            }
                            else{
                                ?>
                                <li>Now you Have only <strong><?php $c= 30-date("d") ;echo $c ?></strong> days left</li>
 
                                <?php
                            }
                            ?>
                            <?php
                        
                        ?>

                    </ul>
                    </p>
                    <a href="#" class="btn btn-primary">Rs<?php echo $total; ?></a>
                </div>
            </div>
        </div>

          <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Avarage</h5>
                    <p class="card-text">
                        <ul>
                        <?php
                      
                        include("config.php");
                        $bug = "SELECT * FROM `set_budget` ORDER BY created_at DESC ";
                        $res_bug = mysqli_query($db, $bug);
                        
                       $data_bug = mysqli_fetch_assoc($res_bug);
                            $avg=$total/30;
                            ?>
                        
                        <p>You are Spending Rs <strong><?php echo $avg ?></strong> Daily</p>
                            <?php
                       
                        ?>

                    </ul>
                    </p>
                    
                </div>
            </div>
        </div>


  <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Prediction</h5>
                    <p class="card-text">
                        <ul>
                <?php

                include("config.php");
                $bug = "SELECT * FROM `set_budget` ORDER BY created_at DESC ";
                $res_bug = mysqli_query($db, $bug);

                $data_bug = mysqli_fetch_assoc($res_bug);
                $last=$avg*30;
               if($last<0){
                    ?>

                <p  class="text-danger">Your budget is less as compair to number of days</p>
                <?php
               }
               else{
                
                    ?>

                <p class="text-success" >Your budget is in control</p>
                <?php
               }
               

                ?>

            </ul>
            </p>

        </div>
    </div>
</div>


       


    </div>
</div>


<?php
include("footer.php")
    ?>