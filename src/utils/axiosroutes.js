import axiosCall from "./axiosCall";

export const _signout_user_ = req => {
    return axiosCall.post('/students/signout', {}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
}

export const _update_basic_user_info = req => {
    return axiosCall.post('/students/update-user', req, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
}

export const _update_password_from_settings = req => {
    return axiosCall.post('/students/change-password-from-profile', req, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
}

export const _get_all_notes = () => {
    return axiosCall('/notes/get-all-notes')
};
export const _get_all_quizzes = () => {
    return axiosCall('/quiz/get-all-quizzes')
};

export const _mark_note_as_read = req => {
    return axiosCall.post('/students/read-note', req, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
}
export const _fetch_student_from_token = req => {
    req = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhNmVlNTc3My1kMDk0LTQyODctYTBiMi03NTUzNzUxMjQ1ZGUiLCJpYXQiOjE2OTg3MDMzMjF9.G7QjPuSw2tXd6yV_MKH0TvtXmzeSdhXAXF-sAntjVu4"
    return axiosCall.get(`/students/fetch-student-data-with-token/${req}`);
}

export const _set_new_user_password = req => {
    return axiosCall.post('/students/set-student-password', req);
}

export const _mark_quiz_as_read = req => {
    return axiosCall.post('/students/take-quiz', req, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
}

export const _fetch_single_note = req => {
    return axiosCall(`/notes/get-single-note/${req}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
}

export const _fetch_student_quiz_history = req => {
    return axiosCall(`/students/fetch-student-quiz-history`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
}
export const _fetch_student_notes_history = req => {
    return axiosCall(`/students/fetch-student-notes-history`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
}

export const _fetch_single_quiz = req => {
    return axiosCall(`/quiz/get-single-quiz/${req}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
}

export const _reset_send_mail = req => {
    return axiosCall.post('/students/reset-send-mail');
}
export const _reset_password = req => {
    return axiosCall('/notes/reset-password');
}