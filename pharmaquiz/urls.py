from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("", include("quiz.urls")),
    path("admin/", admin.site.urls),
]
