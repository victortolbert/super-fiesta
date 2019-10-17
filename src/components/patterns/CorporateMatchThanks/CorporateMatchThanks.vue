<template>
  <div class="max-w-3xl p-16 border bg-white shadow-lg">
    <h1 class="mb-4 font-bold text-4xl text-center text-gray-700">
      Thank You!
    </h1>

    <p class="mb-16 text-lg text-center">
      Your pledge helps <em>Avery</em> raise funds for the <em>TJ Johnson Fun Run!</em>
    </p>

    <h2 class="mb-8 font-semibold text-xl text-center">
      Search below to see if your company will match your pledge!
    </h2>

    <div class="max-w-md mx-auto">
      <ol class="mb-8 text-lg list-decimal list-inside">
        <li class="mb-2" style="text-indent: -1rem">
          Submit your company’s matching gift as a brand new pledge!
        </li>
        <li style="text-indent: -1rem">
          Select <span class="font-semibold">Corporate Matching Gift</span> as the Sponsor Type for the new pledge
        </li>
      </ol>
    </div>

    <p class="mb-8 max-w-xl mx-auto p-1 text-center bg-gray-100">
      Organization Legal Name Federal Tax ID Number: 12-345-67890
    </p>

    <p class="mb-8">If you have any questions, please reach out to <strong>Organization Legal Name</strong><br>
      or <a class="text-blue-600 border-b border-blue-500" href="#">click here to view our FAQs</a></p>

    <div class="p-8 border shadow">
      <div class="field text-center">
        <label class="mb-2 text-lg font-medium block">See if your employer will match your donation</label>
        <input class="w-full p-4 shadow border" type="search" placeholder="Search company name...">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CorporateMatchingThanks',
}
</script>
