<template>
  <div class="relative right-[-25%] md:right-[-3%]">
    <!-- App Store Review Widget -->
    <div class="absolute top-[30%] xl:top-[30%] xl:right-[60%] right-[50%] w-[155px]">
      <div
        class="bg-dark-900 rounded-xl py-5 px-5 text-center border border-dark-400 flex flex-col justify-between"
        data-elfsight-app-lazy="true"
      >
        <div class="BadgeContainer__Inner-sc-1s0biz7-0 fIIdbr es-badge-container">
          <!-- Container for centering image -->
          <div class="flex justify-center items-center">
            <div class="w-[40px]">
              <img :src="StroreImage" alt="Phone Image" class="h-auto mx-auto" />
            </div>
          </div>
          <div class="Rating__Container-sc-bk54oq-0 izQGGt es-rating-container">
            <div class="flex">
              <div class="mr-2">4.8</div>
              <Star size="16px" />
              <Star size="16px" />
              <Star size="16px" />
              <Star size="16px" />
              <Star size="16px" />
            </div>
          </div>
        </div>
        <div class="text-xs underline">อ่าน 3,800 รีวิวของเรา</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Star from "~/components/composables/Star.vue";
import StroreImage from "~/assets/images/platforms/ios-store.svg";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "IUX App Trade | แอปพลิเคชันการเทรดที่ครบครันน่าเชื่อถือ",
  url: "https://www.iux.com/th/platforms/apptrade",
  brand: {
    "@type": "Brand",
    name: "IUX App Trade | แอปพลิเคชันการเทรดที่ครบครันน่าเชื่อถือ",
  },
  description:
    "ซื้อขายได้ทุกที่ด้วยแอปมือถือที่ใช้งานง่ายของ IUX ปรับแต่งได้สะดวกและรวดเร็ว มอบประสบการณ์การเทรดที่ดีที่สุดสำหรับคุณ",
  image: ["https://www.iux.com/assets/images/metatags/metatags.png"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.8,
    reviewCount: 3800,
    bestRating: 5,
    worstRating: 1,
  },
  review: {
    "@type": "Review",
    reviewBody: "ข่าวมาที่ไรหลุดจากMT5ตลอด รีโหลดตลอด ปรับปรุงอีกนิด",
    datePublished: "2024-09-19",
    author: {
      "@type": "Person",
      name: "Bkkzxc",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
    },
  },
};
</script>

<style scoped>
/* Add any custom styling as needed */
</style>
