from django.db import models


class Question(models.Model):
    enunciation = models.CharField("Enunciado", max_length=1000)
    company = models.CharField("Banca", max_length=100)
    subject = models.CharField("Assunto", max_length=100)
    created = models.DateTimeField("Criado em", auto_now_add=True)

    def __str__(self):
        return f"{self.enunciation}"


class Option(models.Model):
    enunciation = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.CharField("Opção", max_length=500)
    is_correct = models.BooleanField("Está correto", default=False)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["enunciation", "text"], name="unique_text_enunciation"
            )
        ]

    def __str__(self):
        return f"{self.text}"

