<?php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;
use Inertia\Inertia;


class SubscriberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Subscribers', [
            'subs' => Subscriber::all()->last()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
        ]);

        $subs = Subscriber::where('email', $request->email)->get();
        // if($subs){
        //     return echo 'already subscribed';
        // }
 
        $subscriber = new Subscriber;
        $subscriber->first_name = $request->first_name;
        $subscriber->last_name = $request->last_name;
        $subscriber->email = $request->email;
        $subscriber->unique_code = random_int(100000, 999999);

        $subscriber->save();
 
        return Inertia::location('/goodluck');
    }
    

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Subscriber  $subscriber
     * @return \Illuminate\Http\Response
     */
    public function show(Subscriber $subscriber)
    {
       
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Subscriber  $subscriber
     * @return \Illuminate\Http\Response
     */
    public function edit(Subscriber $subscriber)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Subscriber  $subscriber
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Subscriber $subscriber)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Subscriber  $subscriber
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subscriber $subscriber)
    {
        //
        $subscriber->delete();
 
        return redirect(route('admin.index'));

    }
}
