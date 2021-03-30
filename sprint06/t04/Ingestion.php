<?php
    class Ingestion{
        public $id;
        public $meal_type = array();
        public $day_of_diet;
        public $products = array();
        public function __construct($meal_type, $id){
            $this->id = $id;
            $this->meal_type  = $meal_type;
        }
        public function get_from_fridge($product){
            if($this->products[$product]->getKcal() > 200){
                throw new EatException("No more junck food, dumpling!");
            }
        }
        public function setProduct($prdct){
            $this->products[$prdct->getName()] = $prdct; 
        }
        public function getProducts(){
            return $this->products;
        }
    }
?>