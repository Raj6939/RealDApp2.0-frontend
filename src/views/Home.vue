<template>
 <div>
<main class="l-main">
            <!--========== HOME ==========-->
            <section class="home" id="home">
                <div class="home__container bd-container bd-grid">
                    <div class="home__data">
                        <h1 class="home__title">Welcome to RealDApp</h1>
                        <h2 class="home__subtitle">Make your Real estate <br> assets unique.</h2>
                    </div>
    
                    <img src="../assets/landing.jpg" alt="" class="home__img">
                </div>
            </section>
            
            <!--========== ABOUT ==========-->
            <section class="about section bd-container" id="about">
                <div class="about__container  bd-grid">
                    <div class="about__data">
                        <!-- <span class="section-subtitle about__initial">About us</span> -->
                        <h2 class="section-title about__initial">Buy Real Ownership</h2>
                        <p class="about__description">Buy and sell your real estate assets on decentralized platform</p>
                        <a href="/marketplace" class="button">Explore Marketplace</a>
                    </div>

                    <img src="../assets/key.jpg" alt="" class="about__img">
                </div>
            </section>

            <!--========== SERVICES ==========-->
            <section class="services section bd-container" id="services">
                <!-- <span class="section-subtitle">Offering</span> -->
                <h2 class="section-title">How It Works</h2>

                <div class="services__container  bd-grid">
                    <div class="services__content">
                        
                        <img src="../assets/seller.png" alt="" class="services__img">
                        <h3 class="services__title">Link Your Profile</h3>
                        <p class="services__description">Link your profile with your properties by sign up on RealDApp and KYC at Moderator office</p>
                    </div>

                    <div class="services__content">
                        <img src="../assets/ownershipkey.png" alt="" class="services__img">
                        <h3 class="services__title">Get NFT Ownership </h3>
                        <p class="services__description">Once Your Profile is linked with your existing properties, create NFT for that property.</p>
                    </div>

                    <div class="services__content">
                        <img src="../assets/buy.png" alt="" class="services__img"> <span style="margin:5px;"></span>
                        <img src="../assets/sell.png" alt="" class="services__img">
                        <h3 class="services__title">Buy or Sell </h3>
                        <p class="services__description">Your Real Estate NFT will list on RealDApp Marketplace</p>
                    </div>
                </div>
            </section>
        </main>
 </div>
</template>

<script>
// import Web3 from "web3"
export default {
  name:"Home",
};
</script>

<style>
.absolute top-0 w-full h-full bg-center bg-cover{
  background-image: url(../assets/logoonly1.png);
}
</style>