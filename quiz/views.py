from django.shortcuts import render
from django.http import HttpResponse
from .models import Question, Option
import json


def index(request):
    questions = Question.objects.all()
    options = Option.objects.all()
    data = list()
    for question in questions:
        question_data = {'id': question.id,
            'enunciation': question.enunciation,
            'company': question.company,
            'subject': question.subject,
            # 'created': question.created,
            'options': [
            ]
        }
        for option in options:
            if option.enunciation_id == question.id:
                question_data['options'].append(
                    {
                        'text': option.text,
                        'is_correct': option.is_correct
                    }
                )
        data.append(question_data)
    return render(
        request, "quiz/index.html", {'data': data, 'json_data': json.dumps(data)}
    )
