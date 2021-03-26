<?php 
class HardWorker {
    private $name;
    private $age;
    private $salary;

    public $setName;

    function setName($name){
        $this->name = $name;
    }

    public $getName;

    function getname(){
        return $this->name; 
    }
    public $getAge;

    function getAge(){
        return $this->age; 
    }

    public $setAge;

    function setAge($age){
        if($age >= 1 && $age<= 100){
        $this->age = $age;
        return true;
    }else{
        return false;
    }
}
    public $getSalary;

    function getSalary(){
        return $this->salary;
    }
    public $setSalary;

    function setSalary($salary){
        if($salary >=100 && $salary <=10000){
        $this->salary = $salary;
        return true;
    }else{
        return false;
    }
}
    public $toArray;
    function toArray(){
        return array("name" => $this->name, "age" => $this->age, "salary" => $this->salary);
    }
}