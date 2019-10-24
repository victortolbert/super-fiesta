<template>
  <div
    v-if="$auth.user"
    class="w-full h-full"
  >
    <div class="flex">
      <div class="w-3/12">
        <h1>{{ $auth.user.name }}</h1>

        <RouterLink to="/">
          🡄  Go back
        </RouterLink>

        <div class="nav flex-column nav-pills mt-3">
          <RouterLink
            :to="{
              name: 'profile'
            }"
            active-class="active"
            class="nav-link"
          >
            Main info
          </RouterLink>
          <RouterLink
            :to="{
              name: 'profile-change-password'
            }"
            active-class="active"
            class="nav-link"
          >
            Change password
          </RouterLink>
          <!--<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>-->
        </div>
      </div>
      <div class="w-9/12">
        <div class="tab-content">
          <div class="tab-pane fade show active">
            <div class="flex justify-center">
              <Transition
                name="router"
                mode="out-in"
              >
                <RouterView />
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data: () => ({}),
}
</script>
