<template>
 <div class="row mt-5">
      <div class="col col-sm-6 offset-3">
        <div class="card shadow-lg p-5 border-2 border-primary">
          <div class="card-body p-lg-5">
            <p class="lead text-primary">
              Oops something went wrong, please login again!
            </p>
          </div>
          <div class="d-flex align-content-center justify-content-between p-5">
            <RouterLink class="link-primary" to="/login">
              Login
            </RouterLink>
            <RouterLink class="link-primary" to="/signup">
              Signup
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
 
</template>