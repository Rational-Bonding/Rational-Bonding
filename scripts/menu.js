/* global AFRAME */

dict={"Aquarium": "IMG_Aquarium_20190323_172712_processed.jpg",
"Archer": "IMG_Archer_20190323_171500_processed.jpg",
"Baobab": "IMG_Baobab_20190323_170953_processed.jpg",
"cat": "IMG_Bengal_cat_20190323_154851_processed.jpg",
"Broadway": "IMG_Broadway_20190323_155114_processed.jpg",
"Bus": "IMG_Bus_20190323_171142_processed.jpg",
"Butterfly": "IMG_Butterfly_20190323_172215_processed.jpg",
"Chess": "IMG_Chess_20190323_163833_processed.jpg",
"Colibri": "IMG_Colibri_20190323_164802_processed.jpg",
"Coloured": "IMG_Coloured_20190323_165636_processed.jpg",
"Constellation": "IMG_Constellation_20190323_172928_processed.jpg",
"Crowd": "IMG_Crowd_20190323_163844_processed.jpg",
"Crystal": "IMG_Crystal_20190323_165614_processed.jpg",
"Curly Hair": "IMG_Curly_Hair_20190323_155326_processed.jpg",
"Daryl Feril": "IMG_Daryl_Feril_20190323_155131_processed.jpg",
"Diver": "IMG_Diver_20190323_172642_processed.jpg",
"Donuts": "IMG_Donuts_20190323_163913_processed.jpg",
"Dragon": "IMG_Dragon_20190323_165037_processed.jpg",
"Farm": "IMG_Farm_20190323_155038_processed.jpg",
"Fire": "IMG_Fire_20190323_172325_processed.jpg",
"Glaze": "IMG_Glaze_20190323_161235_processed.jpg",
"Heisenberg": "IMG_Heisenberg_20190323_155021_processed.jpg",
"Hills": "IMG_Hills_20190323_164205_processed.jpg",
"HiAI": "IMG_Huawei_HiAI_20190323_173728_processed.jpg",
"Rink": "IMG_Ice_Rink_20190323_160802_processed.jpg",
"Island": "IMG_Island_20190323_165835_processed.jpg",
"Jellyfish": "IMG_Jellyfish_20190323_165759_processed.jpg",
"Journey": "IMG_Journey_20190323_155440_processed.jpg",
"Latte": "IMG_Latte_20190323_172536_processed.jpg",
"Lobster": "IMG_Lobster_20190323_173711_processed.jpg",
"wand": "IMG_Magic_wand_20190323_161516_processed.jpg",
"space": "IMG_Man_in_space_20190323_170829_processed.jpg",
"Mosaic": "IMG_Mosaic_20190323_173813_processed.jpg",
"Paris": "IMG_Paris_20190323_164233_processed.jpg",
"Peony": "IMG_Peony_20190323_171848_processed.jpg",
"Pool": "IMG_Pool_20190323_172900_processed.jpg",
"Roll": "IMG_Rock_and_Roll_20190323_155212_processed.jpg",
"Sailor": "IMG_Sailor_20190323_164357_processed.jpg",
"Servers.com": "IMG_Servers.com_20190323_164621_processed.jpg",
"Shark": "IMG_Shark_20190323_165730_processed.jpg",
"Snowman": "IMG_Snowman_20190323_155013_processed.jpg",
"Succulent": "IMG_Succulent_20190323_172611_processed.jpg",
"Superhero": "IMG_Superhero_20190323_171113_processed.jpg",
"Surf": "IMG_Surf_20190323_155307_processed.jpg",
"Theater": "IMG_Theater_20190323_171546_processed.jpg",
"Tiger": "IMG_Tiger_20190323_165958_processed.jpg",
"Total Color": "IMG_Total_Color_20190323_165659_processed.jpg",
"Truck": "IMG_Truck_20190323_172113_processed.jpg",
"Turtle": "IMG_Turtle_20190323_172349_processed.jpg",
"Unicorn": "IMG_Unicorn_20190323_173121_processed.jpg",
"Vortex": "IMG_Vortex_20190323_172156_processed.jpg",
"Wild": "IMG_Wild_20190323_165203_processed.jpg",
"Winter": "IMG_Winter_20190323_163654_processed.jpg",
"Original": "PIA15482.jpg"}

var mMenu = document.querySelector('#mouseMenu');

document.querySelector('#mouseMenu').addEventListener('mouseenter', function() {
  AFRAME.utils.entity.setComponentProperty(mMenu, 'material.visible', true);
});

document.querySelector('#mouseMenu').addEventListener('click', function() {
    AFRAME.utils.entity.setComponentProperty(mMenu, 'material.visible', true);
  });

document.querySelector('#mouseMenu').addEventListener('mouseleave', function() {
    AFRAME.utils.entity.setComponentProperty(mMenu, 'material.visible', false);
  });