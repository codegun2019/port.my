export default defineNuxtPlugin(({ $router }) => {
  // ก่อนที่จะมีการเปลี่ยนหน้า
  $router.beforeEach((to, from, next) => {
    console.log('Before route change:', to.fullPath)
    next() // อนุญาตให้เปลี่ยนหน้า
  })

  // หลังจากเปลี่ยนหน้าเสร็จ
  $router.afterEach(() => {
    console.log('After route change')
  })
})
