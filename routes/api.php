<?php

Route::group(['prefix' => 'employee/{employee}'], function () {
    Route::resource('attendance', 'AttendanceController')->only(['store']);
    Route::resource('failure', 'FailureController')->only(['store']);
});

Route::get('failure', 'FailureController@index')->name('failure.index');
Route::get('attendance', 'AttendanceController@index')->name('attendance.index');
Route::resource('employee', 'EmployeeController')->only(['index']);
Route::resource('rank', 'RankController')->only(['index']);